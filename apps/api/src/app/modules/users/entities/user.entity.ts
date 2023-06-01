import * as bcrypt from 'bcrypt';
import { CoreEntity } from '@aafiyah/common';
import { ObjectType, Field, OmitType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column({default: ''})
  @Field()
  @IsUrl()
  @IsOptional()
  avatar?: string;

  @Column()
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ default: 'customer' })
  @Field()
  @IsString()
  @IsNotEmpty()
  role: string;

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}

@ObjectType()
export class UserWithoutPassword extends OmitType(User, ['password']) {}