// Entity - Card
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('users')

export class User {

	@Field({nullable: true})
	@ObjectIdColumn()
	_id: string;

	@Field({nullable: true})
	@Column()
	firstName: string;

	@Field({nullable: true})
	@Column()
	lastName: string;

	@Field({nullable: true})
	@Column()
	email: string;
	
	@Field({nullable: true})
    @Column({select: false})
	password: string;

	@Field({nullable: true})
	token?: string;

	@Field({nullable: true})
	@CreateDateColumn()
	createdAt: Date;

	@Field({nullable: true})
	@UpdateDateColumn({ default: () => "NOW()"})
	updatedAt: Date;
}
