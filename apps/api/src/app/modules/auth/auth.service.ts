import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validate(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne({ email });
    if (!user) throw new NotFoundException('User does not exist');

    if (await user.comparePassword(password)) {
      delete user.password;
      return user;
    }
    throw new UnauthorizedException('Password is incorrect');
  }
}
