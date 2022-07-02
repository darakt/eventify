import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);
    return user
  }

  async findAll() {
    const users = await this.userModel.findAll();
    return users
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    if (user === null) {
      throw new BadRequestException('Invalid id');
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.userModel.update(updateUserDto, { where: { id } });
    if (res[0] === 1) {
      const user = await this.userModel.findByPk(id);
      return user
    };
    return null; // maybe some log here
  }

  async remove(id: number) {
    return await this.userModel.destroy({ where: { id } }); // should copy to another table then remove or use a flag
  }
}
