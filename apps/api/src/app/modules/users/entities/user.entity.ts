import * as bcrypt from 'bcrypt';
import { CoreEntity } from '@aafiyah/common';
import {
  ObjectType,
  Field,
  OmitType,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';

@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column({
    default:
      'https://res.cloudinary.com/muttakinhasib/image/upload/v1611336104/avatar/user_qcrqny.svg',
  })
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

  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  gender?: string;

  @Column({ nullable: true })
  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDate()
  @IsOptional()
  dob?: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsPhoneNumber('BD')
  @IsOptional()
  phone?: string;

  @Column({ default: 'customer' })
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  role?: string;

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}

@ObjectType()
export class UserWithoutPassword extends OmitType(User, ['password']) {}
