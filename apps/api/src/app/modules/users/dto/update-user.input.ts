import { User } from '../entities/user.entity';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(User,InputType) {}
