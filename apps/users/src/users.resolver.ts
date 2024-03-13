import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RegisterDto } from './dto/user.dto';
import { RegisterRepose } from './types/user.types';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterRepose)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterRepose> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const user = await this.usersService.register(registerDto);

    return { user };
  }

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    const users = await this.usersService.getAllUsers();

    return users;
  }
}
