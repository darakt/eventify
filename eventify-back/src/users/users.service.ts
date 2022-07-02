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
    console.log(user)
    return {
      statusCode: 200,
      user
    };
  }

  async findAll() {
    const users = await this.userModel.findAll();
    console.log(users);
    return {
      statusCode: 200,
      users
    };
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    if (user === null) {
      console.log('Not found!');
      throw new BadRequestException('Invalid id');
    }
    return {
      statusCode: 200,
      user,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.userModel.update(updateUserDto, { where: { id } });
    console.log(res)
    if (res[0] === 1) {
      const user = await this.userModel.findByPk(id);
      return {
        statusCode: 200,
        user,
      };
    };
    throw new BadRequestException();
  }

  async remove(id: number) {
    const res = await this.userModel.destroy({ where: { id } }); // should copy to another table then remove or use a flag
    if (res === 1) return { statusCode: 204};
    throw new BadRequestException('Invalid Id');
  }
}
