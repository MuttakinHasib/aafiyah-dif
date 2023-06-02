/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { UserWithoutPassword } from '../users/entities/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: UserWithoutPassword, done: CallableFunction): any {
    return done(null, user);
  }
  async deserializeUser(
    payload: UserWithoutPassword,
    done: CallableFunction
  ): Promise<any> {
    const user = await this.usersService.findOne({ id: payload.id });
    delete user.password;
    return done(null, user);
  }
}
