import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User, UserWithoutPassword } from '../../users/entities/user.entity';

@InputType()
export class LoginInput extends PickType(
  User,
  ['email', 'password'],
  InputType
) {}

@ObjectType()
export class LoginResponse {
  @Field()
  message: string;

  @Field()
  user: UserWithoutPassword;
}
