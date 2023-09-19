import Entity, {pubsub} from "./shared";


export default class Project extends Entity {
    constructor(title, description) {
        super(title, description);
        this.todos = [];
    }

    addToDo(todo) {
        this.todos.push(todo);
        pubsub.publish('todo_add_to_project', {
            'todo' : todo,
            'project' : this
        });
    }

    deleteToDo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        pubsub.publish('todo_remove_from_project', {
            'todo' : todo,
            'project' : this
        });
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