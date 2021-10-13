import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsEntity } from '../entity/posts.entity';

@Injectable()
export class PostsService {
  constructor (
    @InjectRepository(PostsEntity)
    private readonly postsRepository:Repository<PostsEntity>,){}

    async findAll(){
      return await this.postsRepository.find();
    }

   /**  async findOne(id: string){
      try{
        return await this.wp_postsRepository.findOneOrFail(id);
      }catch(error){
        throw new NotFoundException(error.message);
      }
    }

    async create(){

    }

    async update(){

    }

    async deleteById(){

    }*/
}
