import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<User> {
    return await this.usersRepository.findOneBy({
      id: _id
    });
  }

  async deleteUser(_id: number): Promise<any> {
    return await this.usersRepository.delete({
      id: _id
    });
  }

  async createUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
