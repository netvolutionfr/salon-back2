import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

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
      prenom: 'Stanis'
    }
    return JSON.stringify(objet);
  }
}
