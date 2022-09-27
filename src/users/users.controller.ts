import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

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
}
