import { Controller, Get, Header, Post, UseGuards, Request } from "@nestjs/common";
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService) {}

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
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
