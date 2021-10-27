import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessageHelper } from '../helpers/message.helpes';
import { RegExHelper } from '../helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  user_nicename: string;

  @IsNotEmpty()
  @IsEmail()
  user_email: string;

  @IsNotEmpty()
  user_login: string;
  
  @IsNotEmpty()
  @Matches(RegExHelper.password,{message: MessageHelper.password})
  user_pass: string;
}