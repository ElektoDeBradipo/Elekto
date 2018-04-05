import { Get, Controller, Post, Body } from '@nestjs/common';
import { User } from '../data/interfaces';
import { UsersService } from '../data/services';
import { CreateUserDto } from '../data/dto';

@Controller()
export class ApiController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  root(): string {
    return 'Hello World!';
  }

  @Get('test')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('test')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
