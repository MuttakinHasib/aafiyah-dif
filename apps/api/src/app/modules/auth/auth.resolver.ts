import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { LoginInput, LoginResponse } from './dto/login.input';
import { CurrentUser } from '@aafiyah/common';
import { UserWithoutPassword } from '../users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { SessionAuthGuard } from './guards/session.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { Logout } from './guards/logout.guard';

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginResponse)
  @UseGuards(LocalAuthGuard, SessionAuthGuard)
  async login(
    @CurrentUser() user: UserWithoutPassword,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Args('loginInput') _loginInput: LoginInput
  ) {
    return { message: `Welcome back! ${user.name}` };
  }

  @Query(() => UserWithoutPassword)
  // @UseGuards(AuthenticatedGuard)
  whoAmI(@CurrentUser() user: UserWithoutPassword) {
    return user;
  }

  @UseGuards(Logout)
  @Query(() => String, { name: 'logout' })
  async logout() {
    return 'Logout Success';
  }
}
