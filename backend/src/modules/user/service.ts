import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/CreateUserInput';
import { AuthService } from '../common/auth/services/auth.service';
import { LoginUserDto } from './dto/LoginUser.dto';
import { ListUsersDto } from './dto/ListUsers.dto';
import { UpdateUserInput } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    private readonly authService: AuthService
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async create(createUserInput: CreateUserInput): Promise<UserEntity> {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);

    Object.keys(createUserInput).forEach(
      (k) =>
        createUserInput[k] == null ||
        (createUserInput[k] == '' && delete createUserInput[k])
    );

    return await this.userRepository.save(createUserInput);
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }

  async loginUser(loginUserInput: LoginUserDto) {
    const user = await this.authService.validateUser(
      loginUserInput.email,
      loginUserInput.password
    );
    if (!user) {
      throw new BadRequestException(`Email or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  async update(id, updateUserInput: UpdateUserInput) {
    const existingUser = await this.userRepository.findOneBy({ id: id });

    if (!existingUser) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return existingUser;
  }
}
