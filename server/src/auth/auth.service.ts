import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { RegisterData } from './auth.dto';
import * as bcrypt from 'bcryptjs';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, plainPassword: string): Promise<any> {
    const user = await this.userService.findOne(username);
    await this.verifyPassword(plainPassword, user.password);
    user.password = undefined;

    return user;
  }

  async verifyPassword (plainPassword: string, hashedPassword: string) {
    const isPasswordMatched = await bcrypt.compare(plainPassword, hashedPassword);
    if (!isPasswordMatched) {
      throw new Error('Wrong credentials provided');
    }
  }

  async getCookieWithJwtToken(user: any) {
    const payload = { username: user.username, sub: user.id }
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=60`;
  }

  async register(registrationData: RegisterData) {
    const hashedPassword: string = await bcrypt.hash(registrationData.password, 10);
    const createdUser = await this.userService.create({...registrationData, password: hashedPassword})

    createdUser.password = undefined;

    return createdUser;
  }
}