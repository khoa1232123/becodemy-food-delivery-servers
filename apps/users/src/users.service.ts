import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // register user service
  async register(registerDto: RegisterDto) {
    return registerDto;
  }

  // login user service
  async login(loginDto: LoginDto) {
    return loginDto;
  }

  // get all users service
  async getAllUsers() {
    const users = [
      {
        id: '1',
        name: 'John',
        email: '<EMAIL>',
        password: '<PASSWORD>',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return users;
  }
}
