import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
	todos = [
		{
			id: 1,
			title: 'todos app',
			description: 'Create a NestJS app',
			done: false
		},
		{
			id:2,
			title: 'shopping',
			description: 'you have to go shopping man',
			done: true
		}
	];

	findAll() : any[] {
		return (this.todos);
	}
}
