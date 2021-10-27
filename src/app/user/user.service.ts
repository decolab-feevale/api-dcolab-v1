import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  
  constructor (
    @InjectRepository(UserEntity)
    private readonly usersRepository:Repository<UserEntity>,){}

    async findAll(){
      return await this.usersRepository.find({
        select: ['id','user_email', 'user_nicename' ]
      });
    }

    async findOneOrFail(
      conditions: FindConditions<UserEntity>, 
      options?: FindOneOptions<UserEntity>){
      try{
        return await this.usersRepository.findOneOrFail(conditions, options);
      }catch(error){
        throw new NotFoundException(error.message);
      }
    }
    
    async store(data: CreateUserDto){
      const user = this.usersRepository.create(data);
      return await this.usersRepository.save(user);

    }

    async update(id: string, data: UpdateUserDto){

      const user = await this.findOneOrFail({ id });

      this.usersRepository.merge(user, data);

      return await this.usersRepository.save(user);
    }

    async deleteById(id: string){
      await this.usersRepository.findOneOrFail({ id });
      this.usersRepository.softDelete({id})
    }

}
