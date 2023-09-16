import Entity from "./shared";
import ToDo from "./todo";

export default class Project extends Entity {
    constructor(title, description) {
        super(title, description);
        this.todos = [];
    }

    createToDo(title, description) {
        this.todos.push(new ToDo(title, description));
    }

    deleteToDo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    viewToDos() {
        for(const[k,v] of Object.entries(this.todos)) {
            console.log(`${k} - ${v.title} - ${v.description} - DONE: ${v.done} - DUE AT: ${v.due_at} - PRIORITY : ${v.priority}`);
        }
    }

    getPendingToDos() {
        return this.todos.filter((x_todo) => !x_todo.done);
    }

    getPendingToDosCount() {
        return this.getPendingToDos().length;
    }
}