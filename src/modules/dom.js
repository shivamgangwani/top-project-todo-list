import {createElementEx} from "./shared";

import checkEmpty from '../imgs/check-empty.png';
import checkMarked from '../imgs/check-marked.png';
import trashIcon from "../imgs/trash.png";


export default function initDOM() {
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

// DOM Functions
export function createProjectButtonDOMNode(project) {
    let btn = createElementEx("button", '', ['project-button']);
    btn.setAttribute("data-index", project.id);
    let title = createElementEx("p", '', ['project-button-title'], project.title);
    let trashBtn = createElementEx("img", '', ['project-delete-trash-icon'], "");
    trashBtn.src = trashIcon;

    btn.append(title, trashBtn);
    return {btn, trashBtn};
}


export const createToDoDOMNode = (function() {
    function createDOMNodeInfoLeft(todo) {
        let el = createElementEx("div", '', ['todo-info-left']);
        const info = {
            "" : todo.title,
            "Description" : todo.description,
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

    function createDOMNodeInfoRight(todo) {
        const el = createElementEx("div", '', ['todo-info-right'], "");
        const priorityBtn = createElementEx("button", '', ['todo-info-priority'], todo.priority);
        const dueBtn = createElementEx("button", '', ['todo-info-due-date'], todo.due_at);
        el.append(priorityBtn, dueBtn);
        return {el, priorityBtn, dueBtn}
    }

    function createDOMNodeCheckZone(todo) {
        let btn = createElementEx("div", '', ['todo-done-check']);
        const doneBtn = createElementEx("img", '', ['todo-done-check-img']);
        doneBtn.src = todo.done ? checkMarked : checkEmpty;
        btn.appendChild(doneBtn);
        return {btn, doneBtn};
    }

    function createDOMNode(todo) {
        let todoEl = createElementEx("div", '', ['todo-container']);
        todoEl.setAttribute("data-index", todo.id);
        if(todo.done) todoEl.classList.add('item-done');

        const checkZone = createDOMNodeCheckZone(todo);
        todoEl.appendChild(checkZone.btn);

        let todoInfo = createElementEx("div", '', ['todo-info']);
        const infoLeft = createDOMNodeInfoLeft(todo)
        const infoRight = createDOMNodeInfoRight(todo);

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
    return createDOMNode;
})();

// DOM
export function createAddToDoButton() {
    const addNewToDoButton = createElementEx("div", 'todo-add-new', [], '');
    const PlusButton = createElementEx("span", 'add-icon', [], "+")
    const PlusText = createElementEx("span", 'add-icon-text', [], "Add New Item");
    addNewToDoButton.append(PlusButton, PlusText);
    return addNewToDoButton;
}