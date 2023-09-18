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
        if(this.done) todoEl.classList.add('item-done');

        let checkZone = createElementEx("div", '', ['todo-done-check']);
        const doneBtn = createElementEx("img", '', ['todo-done-check-img']);
        doneBtn.src = this.done ? checkMarked : checkEmpty;
        checkZone.appendChild(doneBtn);
        todoEl.appendChild(checkZone);

        let todoInfo = createElementEx("div", '', ['todo-info']);
        let todoInfoLeft = createElementEx("div", '', ['todo-info-left']);
        const info = {
            "" : this.title,
            "Description" : this.description,
        }
        for(const [k,v] of Object.entries(info)) {
            let infoContainer = createElementEx("div", '', ['todo-info-item']);
            let infoKey = createElementEx("span", '', ['todo-info-item-key'], (k ? `${k}: ` : ""));
            let infoValue = createElementEx("span", '', ['todo-info-item-value'], `${v}`);
            infoContainer.append(infoKey, infoValue);
            todoInfoLeft.appendChild(infoContainer);
        }
    
        const editBtn = createElementEx("button", '', ['todo-action-item'], "Edit Item");
        const deleteBtn = createElementEx("button", '', ['todo-action-item'], "Delete Item");

        todoInfoLeft.append(editBtn, deleteBtn);

        const todoInfoRight = createElementEx("div", '', ['todo-info-right'], "");
        const priorityBtn = createElementEx("button", '', ['todo-info-priority'], this.priority);
        const dueBtn = createElementEx("button", '', ['todo-info-due-date'], this.due_at);
        todoInfoRight.append(priorityBtn, dueBtn);



        todoInfo.append(todoInfoLeft, todoInfoRight);
        todoEl.appendChild(todoInfo);
        return {todoEl, editBtn, doneBtn, deleteBtn, dueBtn, priorityBtn};
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