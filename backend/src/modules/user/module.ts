import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserService } from './service';
import { UserResolver } from './resolver';
import { AuthModule } from '../common/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
