import Entity, {createElementEx} from "./shared";
import ToDo from "./todo";

import trashIcon from "../imgs/trash.png";

export default class Project extends Entity {
    constructor(title, description) {
        super(title, description);
        this.todos = [];
    }

    addToDo(todo) {
        this.todos.push(todo);
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

    // DOM Functions
    createDOMNode() {
        let btn = createElementEx("button", '', ['project-button']);
        let title = createElementEx("p", '', ['project-button-title'], this.title);
        let trashBtn = createElementEx("img", '', ['project-delete-trash-icon'], "");
        trashBtn.src = trashIcon;
    
        btn.append(title, trashBtn);
        return {btn, trashBtn};
    }
}