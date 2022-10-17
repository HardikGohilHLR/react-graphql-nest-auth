// Resolver - Users
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => User)
	login(@Args('login') loginInput: LoginUserInput): Promise<User> {
		return this.usersService.login(loginInput);
	}

	@Mutation(() => User)
	signup(@Args('signup') signupInput: CreateUserInput): Promise<User> {
		return this.usersService.signup(signupInput);
	}

	@Query(() => String)
	sayHello(): string {
	  	return 'Hello World!';
	}
}
