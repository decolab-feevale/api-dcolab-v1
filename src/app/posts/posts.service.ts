import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostsEntity } from '../entity/posts.entity';

@Injectable()
export class PostsService {
  constructor (
    @InjectRepository(PostsEntity)
    private readonly postsRepository:Repository<PostsEntity>,){}

    async findAll(){
      return await this.postsRepository.find();
    }

    async findOneOrFail(id: string){
      try{
        return await this.postsRepository.findOneOrFail(id);
      }catch(error){
        throw new NotFoundException(error.message);
      }
    }

    async create(data: CreatePostDto){
      return await this.postsRepository.save(this.postsRepository.create(data));
    }

    async update(id: string, data: UpdatePostDto){
      const post = await this.findOneOrFail(id);

      this.postsRepository.merge(post, data);
      return await this.postsRepository.save(post);
    }

    async deleteById(id: string){
      await this.findOneOrFail(id);
      await this.postsRepository.softDelete(id);
    }
}
