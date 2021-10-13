import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsEntity } from '../entity/posts.entity';

@Controller('api/v1/posts')
export class PostsController {

  constructor(private readonly PostsService: PostsService) {}

  @Get('all')
   async findAll(){
    return this.PostsService.findAll();
  }
}
