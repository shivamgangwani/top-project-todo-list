import {
    pubsub,
    createElementEx, 
    getEntityInput
} from './modules/shared';

import initDOM, {
    createProjectButtonDOMNode,
    getProjectButtonNode,
    createAddToDoButton,
    createToDoDOMNode,
    createEditToDoDOMNode
} from './modules/dom';


import Project from "./modules/project";
import ToDo from './modules/todo';

import "./style.css"


class App {
    static DOM_ELEMENTS;
    constructor() {
        this.projects = [];
        this.current_project = null;
        this.init();
        
        if(this.getFromLocalStorage() === null) this.addDummyData();
        else this.loadLocalStorage();
    }

    init() {
        this.DOM_ELEMENTS = initDOM();

        // "Add Project" button
        let newProjectBtn = createElementEx("button", "add-new-project", [], "Add Project");
        newProjectBtn.addEventListener('click', () => this.addNewProject());
        let createDummyProject = createElementEx("button", "add-dummy-project", [], "Add Dummy Project");
        createDummyProject.addEventListener('click', () => this.addDummyData());
        this.DOM_ELEMENTS.projects.append(newProjectBtn, createDummyProject);

        pubsub.subscribe("todo_add_to_project", (data) => this.refreshProjectButton(data.project));
        pubsub.subscribe("todo_remove_from_project", (data) => this.refreshProjectButton(data.project));
        pubsub.subscribe("todo_done_state_change", (data) => this.refreshProjectButton(this.getToDoProject(data.todo)));
        pubsub.subscribe("data_changed", () => this.saveToLocalStorage());

        this.resetView();
    }

    addDummyData() {
        // Sample data for testing
        let proj = this.addNewProject("Testing", "12345");
        proj.addToDo(new ToDo("Test", "123123123"));
        proj.addToDo(new ToDo("Test", "123123123"));
        proj.addToDo(new ToDo("Test", "123123123"));
        proj.addToDo(new ToDo("Test", "123123123"));
        proj.addToDo(new ToDo("Test", "123123123"));
    }


    // <Project Functions: High level>
    addNewProject(name=null, description=null) {
        if(name===null) {
            let projDetails = getEntityInput(
                "Enter project name (Max 20 characters): ",
                "Enter project description: ",
            );
            if(projDetails === undefined) return;
            name = projDetails.name;
            description = projDetails.description;
        }

        const project = new Project(name, description);
        this.projects.push(project);
        this.DOM_ELEMENTS.projects.appendChild(this.createAndBindEvents_ProjectButton(project));
        pubsub.publish("data_changed");
        return project;
    }

    viewProject(project) {
        this.DOM_ELEMENTS.contentAreaHeader.textContent = project.title;
        this.DOM_ELEMENTS.contentAreaBody.replaceChildren(createElementEx("p", '', [], project.description));
        this.renderProjectToDos(project);
        this.current_project = project;
        this.DOM_ELEMENTS.todoContainer = this.DOM_ELEMENTS.contentArea.querySelector("#todo-container");
    }

    deleteProject(project, event) {
        this.removeProjectButton(event.target);

        this.projects.splice(this.projects.indexOf(project), 1);
        if(this.current_project === project) this.resetView();

        pubsub.publish("data_changed");
        // We don't want to trigger a click on the project button itself, which leads the user to view the project!
        event.stopPropagation(); 
        return project;
    }
    
    // <Project Functions: Helpers>
    createAndBindEvents_ProjectButton(project) {
        // Create UI element & bind events 
        const projectBtn = createProjectButtonDOMNode(project);
        projectBtn.btn.addEventListener('click', () => this.viewProject(project));
        projectBtn.trashBtn.addEventListener('click', (e) => this.deleteProject(project, e));
        return projectBtn.btn;
    }

    renderProjectToDos(project) {
        if(project === null) return;
        const container = createElementEx("div", 'todo-container');
        
        const addNewToDoButton = createAddToDoButton();
        addNewToDoButton.addEventListener('click', () => this.createToDo(project));
        container.appendChild(addNewToDoButton);

        project.todos.forEach((todo) => container.appendChild(this.createToDoNode(todo, project)));
        this.DOM_ELEMENTS.contentAreaBody.append(container);
        return container;
    }

    removeProjectButton(trashBtnNode) {
        const projectBtnEl =  trashBtnNode.parentElement
        projectBtnEl.remove(); 
    }

    refreshProjectButton(project) {
        const button = getProjectButtonNode(project);
        button.replaceWith(this.createAndBindEvents_ProjectButton(project));
    }
    // </Project Functions>

    
    // <ToDo Functions>
    createToDoNode(todo) {
        const tmp = createToDoDOMNode(todo);
        tmp.doneBtn.addEventListener('click', (e) => this.flipToDoDone(todo, e));
        tmp.deleteBtn.addEventListener('click', (e) => this.deleteToDo(todo, e));

        // Enable edit buttons only if todo is not marked as done yet
        if(!todo.done) [tmp.editBtn, tmp.dueBtn, tmp.priorityBtn].forEach((k) => { if(k) { k.addEventListener('click', (e) => this.editToDo(todo, e)) } });
        return tmp.todoEl;
    }

    createToDo() {
        let todoDetails = getEntityInput(
            "Enter title (Max 20 characters): ",
            "Enter description: ",
        );
        if(todoDetails === undefined) return;

        const todo = new ToDo(todoDetails.name, todoDetails.description);
        this.current_project.addToDo(todo);
        this.addToDoNodeToDOM(todo);
        pubsub.publish("data_changed");
        return todo;
    }

    editToDo(todo, event) {
        const todoBtn = event.target.parentElement.parentElement.parentElement;
        const editNodeAndForm = createEditToDoDOMNode(todo);
        const newEl = editNodeAndForm.todoEl;
        todoBtn.replaceWith(newEl);

        const form = editNodeAndForm.form;
        this.DOM_ELEMENTS.contentAreaBody.appendChild(form);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.saveToDo(todo, newEl, form);
            pubsub.publish("data_changed");
        })
        form.addEventListener("reset", (e) => {
            e.preventDefault();
            this.cancelEdit(todo, newEl, form);
        })
    }

    cancelEdit(todo, node, form) {
        this.refreshToDoDOMNode(todo, node);
        form.remove();
    }

    saveToDo(todo, node, form) {
        const newData = new FormData(form);
        todo.title = newData.get('title');
        todo.description = newData.get('description');
        if(newData.get('dueDate')) todo.due_at = newData.get('dueDate');
        if(newData.get('priority')) todo.priority = newData.get('priority');
        this.refreshToDoDOMNode(todo, node);
        form.remove();
    }

    flipToDoDone(todo, event) {
        todo.toggleDoneState();

        const todoEl = event.target.parentElement.parentElement;
        pubsub.publish("data_changed");
        this.refreshToDoDOMNode(todo, todoEl);
    }

    deleteToDo(todo, event) {
        const todoEl = event.target.parentElement.parentElement.parentElement;
        todoEl.remove();

        this.current_project.deleteToDo(todo);
        pubsub.publish("data_changed");
        return todo;
    }

    // <ToDo Functions: Helpers>
    addToDoNodeToDOM(todo) {
        this.DOM_ELEMENTS.todoContainer.appendChild(this.createToDoNode(todo));
    }

    refreshToDoDOMNode(todo, node) {
        node.replaceWith(this.createToDoNode(todo));
    }

    getToDoProject(todo) {
        for(let project of this.projects) {
            if(project.todos.includes(todo)) return project;
        }
        return null;
    }

    // </ToDo Functions>


    
    // <Storage Functions>
    saveToLocalStorage() {
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    getFromLocalStorage() {
        return localStorage.getItem("projects");
    }

    loadLocalStorage() {
        const projData = JSON.parse(this.getFromLocalStorage());
        for(let project of projData) {
            let proj = this.addNewProject(project.title, project.description);
            for(let todo of project.todos) {
                let todoObj = new ToDo(todo.title, todo.description);
                proj.addToDo(todoObj);
                todoObj.due_at = todo.due_at;
                todoObj.priority = todo.priority;
                todoObj.done = todo.done;
            }
        }
    }
    // </Storage Functions>

    // <Misc Functions>
    resetView() {
        this.DOM_ELEMENTS.contentAreaHeader.textContent = "Hey there!";
        this.DOM_ELEMENTS.contentAreaBody.innerHTML = "";
        this.DOM_ELEMENTS.contentAreaBody.textContent = "No project chosen.";
        this.current_project = null;
    }
    // </Misc Functions>
}

new App();