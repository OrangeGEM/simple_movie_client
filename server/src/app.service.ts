import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ProxifyDto } from 'dto/proxify.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  async proxifyRequest(proxifyDto: ProxifyDto): Promise<any> {

    const request = await axios({
      method: proxifyDto.options.method,
      url: proxifyDto.options.api_url,
      data: { ...proxifyDto.data } || {},
      headers: {
        Authorization: proxifyDto.options.token || '',
        "Content-Type": "application/json"
      }
    })
    return await request.data;
    
  }
}
