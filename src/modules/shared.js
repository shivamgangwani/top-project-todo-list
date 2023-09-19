import PubSub from 'PubSub';

export const pubsub = new PubSub();

export default class Entity {
    static entityCount = 0;
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.id = Entity.entityCount++;
    }

    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
}

export function createElementEx(tagName, id="", classList=[], textContent="") {
    const el = document.createElement(tagName);
    if(id) el.id = id;
    if(classList.length > 0) el.classList.add(...classList);
    if(textContent) el.textContent = textContent;
    return el;
}

export function getEntityInput(titlePrompt, descriptionPrompt) {
    let name = null;
    while(!name) {
        name = prompt(titlePrompt);
        if(name === null) return;
        if(name.length > 20) name = null;
    }

    let description = null;
    while(!description) {
        description = prompt(descriptionPrompt);
        if(description === null) return;
    }
    return {name, description};
}