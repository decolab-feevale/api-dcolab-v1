import { IsIn, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  post_content: string;

  @IsNotEmpty()
  @IsIn([0, 1])
  post_status: String;

  @IsNotEmpty()
  @IsIn([0, 1])
  comment_status: String;
  
}