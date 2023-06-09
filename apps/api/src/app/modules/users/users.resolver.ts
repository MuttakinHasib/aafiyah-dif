import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { CurrentUser } from '@aafiyah/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => String)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.usersService.findOne({ id });
  }

  @Mutation(() => String)
  @UseGuards(AuthenticatedGuard)
  async updateUser(
    @CurrentUser() user: User,
    @Args('updateUserInput') updateUserInput: UpdateUserInput
  ) {
    return await this.usersService.update(user.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.remove(id);
  }
}
