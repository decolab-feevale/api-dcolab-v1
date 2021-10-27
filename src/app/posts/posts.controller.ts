import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsEntity } from '../entity/posts.entity';
import { UpdatePostDto } from '../dto/update-post.dto';

@Controller('api/v1/posts')
export class PostsController {

  constructor(private readonly PostsService: PostsService) {}

  @Get('all')
   async findAll(){
    return this.PostsService.findAll();
  }
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.PostsService.findOneOrFail(id);
  }

  @Post()
  async create(@Body() body){
    return await this.PostsService.create(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdatePostDto,
  ) {
    return await this.PostsService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.PostsService.deleteById(id);
  }
}
