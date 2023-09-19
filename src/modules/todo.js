import Entity from "./shared";

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
}