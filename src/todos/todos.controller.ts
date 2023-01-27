import { Controller, Get } from '@nestjs/common';
import { Todo } from './todos.interfaces';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
	constructor(private readonly  todoService: TodosService){}
	@Get()
	findAll() : Todo[]{
		return (this.todoService.findAll());
	}
}
