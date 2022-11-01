import { Injectable } from '@nestjs/common';
// import { json } from 'stream/consumers';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Mock = require('mockjs');
import data from './mock/mock';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify(data);
    // return data;
  }
}
