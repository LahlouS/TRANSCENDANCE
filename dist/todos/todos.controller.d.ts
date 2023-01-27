import { Todo } from './todos.interfaces';
import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    findAll(): Todo[];
}
