import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  user_nicename: string;

  @IsNotEmpty()
  user_login: string;
}