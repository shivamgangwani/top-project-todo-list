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

export function initDOM() {
    const DOM_ELEMENTS = {};
    DOM_ELEMENTS.content = document.querySelector("div#content");
    DOM_ELEMENTS.sideBar = createElementEx("div", "sidebar", [], "");
    DOM_ELEMENTS.projects = createElementEx("div", "projects");

    DOM_ELEMENTS.sideBar.append(
        createElementEx("h1", "", [], "Projects"), 
        DOM_ELEMENTS.projects
    );

    DOM_ELEMENTS.contentArea = createElementEx("div", "content-display");
    DOM_ELEMENTS.contentAreaHeader = createElementEx("h1", "content-display-head", [], "");
    DOM_ELEMENTS.contentAreaBody = createElementEx("div", "content-display-body");
    DOM_ELEMENTS.contentArea.append(
        DOM_ELEMENTS.contentAreaHeader,
        DOM_ELEMENTS.contentAreaBody
    );
    DOM_ELEMENTS.content.append(DOM_ELEMENTS.sideBar, DOM_ELEMENTS.contentArea);
    return DOM_ELEMENTS;
}