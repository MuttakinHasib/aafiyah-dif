import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { createHash } from '../../utils/hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserInput: CreateUserInput) {
    const userExists = await this.findOne({ email: createUserInput.email });
    if (userExists) throw new ConflictException('User already exists');

    createUserInput.password = await createHash(createUserInput.password);
    const user = this.userRepository.create(createUserInput);
    await this.userRepository.save(user);
    return `Welcome ${createUserInput.name}!`;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(query: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    return await this.userRepository.findOne({ where: query });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this.userRepository.save({ id, ...updateUserInput });
    return 'User profile has been updated';
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
    return 'User has been deleted';
  }
}
