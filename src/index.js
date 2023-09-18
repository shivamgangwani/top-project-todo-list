import {
    createElementEx, 
    getEntityInput,
    initDOM
} from './modules/shared';

import Project from "./modules/project";
import ToDo from './modules/todo';

import "./style.css"


class App {
    static DOM_ELEMENTS;
    constructor() {
        this.projects = [];
        this.current_project = null;
        this.init();
        this.addDummyData();
    }

    init() {
        this.DOM_ELEMENTS = initDOM();

        // "Add Project" button
        let newProjectBtn = createElementEx("button", "add-new-project", [], "Add Project");
        newProjectBtn.addEventListener('click', () => this.addNewProject());
        this.DOM_ELEMENTS.projects.appendChild(newProjectBtn);

        this.resetView();
    }

    addDummyData() {
        // Sample data for testing
        let proj = this.createNewProject("Testing", "12345");
        proj.createToDo("Test", "123123123");
        proj.createToDo("Test", "123123123");
        proj.createToDo("Test", "123123123");
        proj.createToDo("Test", "123123123");
        proj.createToDo("Test", "123123123");
    }


    // <Project Functions>
    addNewProject() {
        let projDetails = getEntityInput(
            "Enter project name (Max 20 characters): ",
            "Enter project description: ",
        );
        if(projDetails === undefined) return;
        return this.createNewProject(projDetails.name, projDetails.description);
    }

    createNewProject(name, details) {
        const project = new Project(name, details);
        this.projects.push(project);

        // Get UI element & bind events 
        const projectBtn = project.createDOMNode();
        projectBtn.btn.addEventListener('click', () => this.viewProject(project));
        projectBtn.trashBtn.addEventListener('click', (e) => this.deleteProject(project, e));

        this.DOM_ELEMENTS.projects.appendChild(projectBtn.btn);
        return project;
    }

    renderProjectToDos(project) {
        if(project === null) return;
        const container = createElementEx("div", 'todo-container');
        
        const addNewToDoButton = ToDo.createAddToDoButton();
        addNewToDoButton.addEventListener('click', () => this.createToDo(project));
        container.appendChild(addNewToDoButton);

        project.todos.forEach((todo) => container.appendChild(this.createToDoNode(todo)));
        this.DOM_ELEMENTS.contentAreaBody.replaceChildren(container);
        return container;
    }

    viewProject(project) {
        this.DOM_ELEMENTS.contentAreaHeader.textContent = project.title;
        this.renderProjectToDos(project);
        this.current_project = project;
    }

    deleteProject(project, event) {
        const projectBtnEl =  event.target.parentElement
        projectBtnEl.remove(); 

        this.projects.splice(this.projects.indexOf(project), 1);
        if(this.current_project === project) this.resetView();

        // We don't want to trigger a click on the project button itself, which leads the user to view the project!
        event.stopPropagation(); 
        return project;
    }
    // </Project Functions>

    
    // <ToDo Functions>
    createToDoNode(todo) {
        const tmp = todo.createDOMNode();
        tmp.doneBtn.addEventListener('click', (e) => this.flipToDoDone(todo, e));
        tmp.editBtn.addEventListener('click', (e) => this.editToDo(todo, e));
        return tmp.todoEl;
    }

    createToDo(project) {
        let todoDetails = getEntityInput(
            "Enter title (Max 20 characters): ",
            "Enter description: ",
        );
        if(todoDetails === undefined) return;
        return this.addNewToDo(project, todoDetails.name, todoDetails.description);
    }

    addNewToDo(project, title, description) {
        console.log("addNewToDo called");
        console.log(project, title, description);
    }

    refreshToDoNode(todo, node) {
        node.parentElement.replaceChild(this.createToDoNode(todo), node);
    }

    flipToDoDone(todo, event) {
        todo.toggleDoneState();

        const todoEl = event.target.parentElement;
        this.refreshToDoNode(todo, todoEl);
    }

    editToDo(todo, event) { 
        console.log("editToDo called");
    }

    // </ToDo Functions>


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