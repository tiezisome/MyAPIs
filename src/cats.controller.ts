import { Controller, Get } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get("profile")
  findAll(): string {
    return "This action returns all cats with profile";
  }
  @Get()
  demo(): string {
    return "this is a demo!!";
  }
}
