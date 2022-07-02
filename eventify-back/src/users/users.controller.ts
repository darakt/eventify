import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      statusCode: 200,
      user,
    };
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {
      statusCode: 200,
      users,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    return {
      statusCode: 200,
      user,
    };
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    if (user) {
      return {
        statusCode: 200,
        user,
      };
    } else throw new BadRequestException();
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const res = await this.usersService.remove(id);
    if (res === 1) return { statusCode: 204 };
    throw new BadRequestException('Invalid Id');
  }
}
