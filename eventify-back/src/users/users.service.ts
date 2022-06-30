import { BadRequestException, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import User from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserModel: typeof User) { };

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return 'This action adds a new user';
  }

  async findAll() {
    const users = await this.UserModel.findAll();
    console.log(users);
    return users;
  }

  async findOne(id: number) {
    const user = await this.UserModel.findByPk(id);
    if (user === null) {
      console.log('Not found!');
      throw new BadRequestException('Invalid id');
    }
    console.log(user instanceof User); // true
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
