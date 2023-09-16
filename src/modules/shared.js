export default class Entity {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
}