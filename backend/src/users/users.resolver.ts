// Resolver - Users
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { Request } from 'express';

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

	@Query(() => User)
	getUser(@Context('req') req: Request): Promise<User> {

		const token = req.headers.authorization?.split('Bearer ')[1];

		return this.usersService.getUser(token);
	}

	@Query(() => String)
	sayHello(): string {
	  	return 'Hello World!';
	}
}
