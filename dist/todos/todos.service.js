"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    constructor() {
        this.todos = [
            {
                id: 1,
                title: 'todos app',
                description: 'Create a NestJS app',
                done: false
            },
            {
                id: 2,
                title: 'shopping',
                description: 'you have to go shopping man',
                done: true
            }
        ];
    }
    findAll() {
        return (this.todos);
    }
};
TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map