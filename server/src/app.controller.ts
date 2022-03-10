import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProxifyDto } from 'dto/proxify.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('proxify')
  async proxifyRequest(@Body() proxifyDto: ProxifyDto) : Promise<any> {
    return await this.appService.proxifyRequest( proxifyDto );
  }
}
