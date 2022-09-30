import { Controller, Get, Param, Delete, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {
  constructor(private userservice: UsersService) {
  }

  @Get()
  getUsers() {
    return this.userservice.getUsers();
  }

  @Get(':id')
  getUser(@Param() params) {
    return this.userservice.getUser(params.id);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.userservice.deleteUser(params.id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.userservice.createUser(user);
  }
}
