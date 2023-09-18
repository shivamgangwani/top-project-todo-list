import Entity, {createElementEx} from "./shared";

import checkEmpty from '../imgs/check-empty.png';
import checkMarked from '../imgs/check-marked.png';

export default class ToDo extends Entity {
    constructor (title, description) {
        super(title, description);
        this.due_at = "today";
        this.priority = "Low";
        this.done = false;
    }

    setDueAt(due_datetime) {
        this.due_at = due_datetime;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setDoneState(new_state) {
        this.done = new_state;
    }

    toggleDoneState() {
        this.setDoneState(!this.done);
    }

    // DOM Functions
    createDOMNode() {
        let todoEl = createElementEx("div", '', ['todo-container']);

        let checkZone = createElementEx("div", '', ['todo-done-check']);
        const doneBtn = createElementEx("img", '', ['todo-done-check-img']);
        doneBtn.src = this.done ? checkMarked : checkEmpty;
        checkZone.appendChild(doneBtn);
        todoEl.appendChild(checkZone);

        let todoInfo = createElementEx("div", '', ['todo-info']);
        const info = {
            "Title" : this.title,
            "Description" : this.description,
            "Priority" : this.priority,
            "Due At" : this.due_at
        }
        for(const [k,v] of Object.entries(info)) {
            let infoContainer = createElementEx("div", '', ['todo-info-item']);
            let infoKey = createElementEx("span", '', ['todo-info-item-key'], `${k}: `);
            let infoValue = createElementEx("span", '', ['todo-info-item-value'], `${v}`);
            infoContainer.append(infoKey, infoValue);
            todoInfo.appendChild(infoContainer);
        }
    
        const editBtn = createElementEx("button", '', ['todo-action-item'], "Edit Item");
        const deleteBtn = createElementEx("button", '', ['todo-action-item'], "Delete Item");

        todoInfo.append(editBtn, deleteBtn);
        
        todoEl.appendChild(todoInfo);
        return {todoEl, editBtn, doneBtn, deleteBtn};
    }

    // Static methods

    // DOM
    static createAddToDoButton() {
        const addNewToDoButton = createElementEx("div", 'todo-add-new', [], '');
        const PlusButton = createElementEx("span", 'add-icon', [], "+")
        const PlusText = createElementEx("span", 'add-icon-text', [], "Add New Item");
        addNewToDoButton.append(PlusButton, PlusText);
        return addNewToDoButton;
    }
}