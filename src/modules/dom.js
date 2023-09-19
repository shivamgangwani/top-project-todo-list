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
    const totaltodos = project.todos.length;
    const pendingtodos = project.getPendingToDosCount()
    const progress = (totaltodos > 0) ? `${pendingtodos}` : "";

    let btn = createElementEx("button", '', ['project-button']);
    if(totaltodos === 0) btn.classList.add('project-empty');
    else {
        if(pendingtodos === 0) btn.classList.add('project-complete');
        else btn.classList.add('project-incomplete');
    }
    btn.setAttribute("data-index", project.id);
    let title = createElementEx("p", '', ['project-button-title']);
    if(progress !== "") {
        let titleProgress = createElementEx("span", '', ['project-button-progress'], progress);
        title.append(titleProgress)
    }
    let titleTitle = createElementEx("span", '', ['project-button-title-text'], project.title);
    title.append(titleTitle);

    let trashBtn = createElementEx("img", '', ['project-delete-trash-icon'], "");
    trashBtn.src = trashIcon;

    btn.append(title, trashBtn);
    return {btn, trashBtn};
}

export function getProjectButtonNode(project) {
    return document.querySelector(`.project-button[data-index='${project.id}']`);
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

    function getPriorityClass(priority) {
        switch(priority) {
            case "High" : return "priority-high";
            case "Low" : return "priority-low";
            case "Medium" : return "priority-medium";
        }
    }

    function createDOMNodeInfoRight(todo) {
        const el = createElementEx("div", '', ['todo-info-right'], "");
        let priorityBtn = null;
        let dueBtn = null;
        if(todo.priority) {
            priorityBtn = createElementEx("button", '', ['todo-info-priority'], `Priority: ${todo.priority}`);
            priorityBtn.classList.add(getPriorityClass(todo.priority));
            el.append(priorityBtn);
        }
        if(todo.due_at) {
            dueBtn = createElementEx("button", '', ['todo-info-due-date'], `Due: ${todo.due_at}`);
            el.append(dueBtn);
        }
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

function createInputEx(formId, type, name='', value='', placeholder='', maxlength=-1, selected=false) {
    let el = createElementEx("input");
    el.setAttribute("form", formId);
    el.setAttribute("type", type);
    el.setAttribute("name", name);
    el.setAttribute("value", value);
    el.setAttribute("placeholder", placeholder);
    if(maxlength !== -1) el.setAttribute("maxlength", maxlength);
    if(selected) el.setAttribute("checked", true);
    return el;
}

function createPriorityInput(todo, formId) {
    const priorityOptions = [
        createLabelInputPair("Low", createInputEx(formId, "radio", "priority", "Low", '', -1, (todo.priority === "Low")), true),
        createLabelInputPair("Medium", createInputEx(formId, "radio", "priority", "Medium", '', -1, (todo.priority === "Medium")), true),
        createLabelInputPair("High", createInputEx(formId, "radio", "priority", "High", '', -1, (todo.priority === "High")), true)
    ];
    const priorityInput = createElementEx("div");
    priorityInput.append(...priorityOptions);
    return priorityInput;
}

function createToDoEditForm(todo, formId) {
    const editForm = createElementEx("div", '', ['todo-edit-form'], "");
    const inputs = {
        "" : createInputEx(formId, "text", "title", todo.title, "Title", 20),
        "Description: " : createInputEx(formId, "text", "description", todo.title, "Description"),
        "Due Date" : createInputEx(formId, "date", "dueDate", todo.due_at, "Due Date"),
        "Priority" : createPriorityInput(todo, formId),
    };

    for(const [k,v] of Object.entries(inputs)) {
        const inpPair = createLabelInputPair(k, v);
        editForm.appendChild(inpPair);
    }
    return editForm;
}

export function createEditToDoDOMNode(todo) {
    let form = createElementEx("form");
    const formId = `form_todo_${todo.id}`;
    form.setAttribute("id", formId);

    let todoEl = createElementEx("div", '', ['todo-container']);
    todoEl.setAttribute("data-index", todo.id);
    
    const formActionsContainer = createElementEx("div");
    const submitBtn = createInputEx(formId, "submit", "submit", "Submit");
    const cancelBtn = createInputEx(formId, "reset", "reset", "Cancel");
    formActionsContainer.append(submitBtn, cancelBtn);
    const editForm = createToDoEditForm(todo, formId);

    todoEl.append(formActionsContainer, editForm);
    return {todoEl, form};
}

function createLabelInputPair(labelText, inputNode, inputFirst=false) {
    const inputContainer = createElementEx("div", '', ['input-container']);
    const label = createElementEx("label", '', [], labelText);
    if(inputFirst) inputContainer.append(inputNode, label);
    else inputContainer.append(label, inputNode);
    return inputContainer;
}


// DOM
export function createAddToDoButton() {
    const addNewToDoButton = createElementEx("div", 'todo-add-new', [], '');
    const PlusButton = createElementEx("span", 'add-icon', [], "+")
    const PlusText = createElementEx("span", 'add-icon-text', [], "Add New Item");
    addNewToDoButton.append(PlusButton, PlusText);
    return addNewToDoButton;
}