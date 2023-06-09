import {
  Resolver,
  Mutation,
  Args,
  Query,
  Context,
  GqlContextType,
} from '@nestjs/graphql';
import { LoginInput, LoginResponse, LogoutResponse } from './dto/login.input';
import { CurrentUser } from '@aafiyah/common';
import { UserWithoutPassword } from '../users/entities/user.entity';
import { Res, UseGuards } from '@nestjs/common';
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
  @UseGuards(AuthenticatedGuard)
  me(@CurrentUser() user: UserWithoutPassword) {
    return user;
  }

  @UseGuards(Logout)
  @Mutation(() => LogoutResponse, { name: 'logout' })
  async logout() {
    return { message: 'Logout Success' };
  }
}
