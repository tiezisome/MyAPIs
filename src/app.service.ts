/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import list from "./mock";

@Injectable()
export class AppService {
  getList(): string {
    return JSON.stringify(list);
  }
}
