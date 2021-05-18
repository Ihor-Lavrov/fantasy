import { Controller, Post, UseGuards, Request, Response, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RegisterData } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Response() res): Promise<any> {
    const {user} = req;
    const cookie = this.authService.getCookieWithJwtToken(user);
    res.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return res.send(user);
  }

  @Post('register')
  async register(@Body() registerData: RegisterData) {
    return this.authService.register(registerData)
  }
}