import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  
  constructor (
    @InjectRepository(UserEntity)
    private readonly userRepository:Repository<UserEntity>,){}

    async findAll(){
      return await this.userRepository.find();
    }

    async findOne(id: number){
      try{
        return await this.userRepository.findOneOrFail(id);
      }catch(error){
        throw new NotFoundException(error.message);
      }
    }

    async create(){

    }

    async update(){

    }

    async deleteById(){

    }

}
