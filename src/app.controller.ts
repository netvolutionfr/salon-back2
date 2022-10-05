import { Controller, Get, Header, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('toto')
  getToto(): string {
    return 'Toto';
  }

  @Get('test')
  @Header('content-type', 'application/json')
  getTest(): string {
    const objet = {
      nom: 'Humez',
      prenom: 'Stanis',
    };
    return JSON.stringify(objet);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
