import Entity, {createElementEx} from "./shared";

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
        let todoEl = createElementEx("div", '', []);
        const info = {
            "Title" : this.title,
            "Description" : this.description,
            "Done" : this.done,
            "Priority" : this.priority,
            "Due At" : this.due_at
        }
        for(const [k,v] of Object.entries(info)) {
            let infoContainer = createElementEx("div", '', ['todo-item']);
            let infoKey = createElementEx("span", '', ['todo-item-key'], `${k}: `);
            let infoValue = createElementEx("span", '', ['todo-item-value'], `${v}`);
            infoContainer.append(infoKey, infoValue);
            todoEl.appendChild(infoContainer);
        }
    
        const editBtn = createElementEx("div", '', [], "Edit Item");
        const doneBtn = createElementEx("div", '', [], (this.done ? 'Mark Undone' : 'Mark Done'));
        todoEl.append(editBtn, doneBtn);
        return {todoEl, editBtn, doneBtn};
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