import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './entity/user.entity';
import { UserService } from './service';
import { CreateUserInput } from './dto/CreateUserInput';
import { AuthService } from '../common/auth/services/auth.service';
import {
  BadRequestException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { LoginUserDto } from './dto/LoginUser.dto';
import { LoggedUserDto } from './dto/LoggedUser.dto';
import { JwtAuthGuard } from '../common/auth/jwt-auth.guard';
import { ListUsersDto } from './dto/ListUsers.dto';
import { OnlySameUserByIdAllowed } from '../common/auth/interceptors/users.interceptor';
import { UpdateUserInput } from './dto/UpdateUser.dto';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserEntity])
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Mutation(() => UserEntity)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<UserEntity> {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => LoggedUserDto)
  loginUser(@Args('loginUserInput') loginUserInput: LoginUserDto) {
    return this.userService.loginUser(loginUserInput);
  }
  @UseGuards(JwtAuthGuard)
  @Query(() => [UserEntity], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(OnlySameUserByIdAllowed)
  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }
}
