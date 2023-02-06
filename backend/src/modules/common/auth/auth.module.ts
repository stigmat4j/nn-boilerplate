import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './services/jwt.strategy.service';
import { UserModule } from '../../user/module';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/module';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '6000s' }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthModule, AuthService]
})
export class AuthModule {}
