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

    // DOM Functions (static, to create UI elements, no event management or binding)
    createDOMNodeInfoLeft() {
        let el = createElementEx("div", '', ['todo-info-left']);
        const info = {
            "" : this.title,
            "Description" : this.description,
        }
        for(const [k,v] of Object.entries(info)) {
            let infoContainer = createElementEx("div", '', ['todo-info-item']);
            let infoKey = createElementEx("span", '', ['todo-info-item-key'], (k ? `${k}: ` : ""));
            let infoValue = createElementEx("span", '', ['todo-info-item-value'], `${v}`);
            infoContainer.append(infoKey, infoValue);
            el.appendChild(infoContainer);
        }
    
        const editBtn = createElementEx("button", '', ['todo-action-item'], "Edit Item");
        const deleteBtn = createElementEx("button", '', ['todo-action-item'], "Delete Item");

        el.append(editBtn, deleteBtn);
        return {el, editBtn, deleteBtn};
    }

    createDOMNodeInfoRight() {
        const el = createElementEx("div", '', ['todo-info-right'], "");
        const priorityBtn = createElementEx("button", '', ['todo-info-priority'], this.priority);
        const dueBtn = createElementEx("button", '', ['todo-info-due-date'], this.due_at);
        el.append(priorityBtn, dueBtn);
        return {el, priorityBtn, dueBtn}
    }

    createDOMNodeCheckZone() {
        let btn = createElementEx("div", '', ['todo-done-check']);
        const doneBtn = createElementEx("img", '', ['todo-done-check-img']);
        doneBtn.src = this.done ? checkMarked : checkEmpty;
        btn.appendChild(doneBtn);
        return {btn, doneBtn};
    }

    createDOMNode() {
        let todoEl = createElementEx("div", '', ['todo-container']);
        if(this.done) todoEl.classList.add('item-done');

        const checkZone = this.createDOMNodeCheckZone();
        todoEl.appendChild(checkZone.btn);

        let todoInfo = createElementEx("div", '', ['todo-info']);
        const infoLeft = this.createDOMNodeInfoLeft()
        const infoRight = this.createDOMNodeInfoRight();

        todoInfo.append(infoLeft.el, infoRight.el);
        todoEl.appendChild(todoInfo);
        return {
            todoEl, 
            doneBtn : checkZone.doneBtn, 
            editBtn : infoLeft.editBtn, 
            deleteBtn: infoLeft.deleteBtn, 
            dueBtn : infoRight.dueBtn, 
            priorityBtn : infoRight.priorityBtn
        };
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