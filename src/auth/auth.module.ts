import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/app/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),
    UserModule, 
    PassportModule, 
    JwtModule.register({
      privateKey:'',
      
    })
  ],
})
export class AuthModule {}
