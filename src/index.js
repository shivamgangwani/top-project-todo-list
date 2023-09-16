import Project from "./modules/project";

let project = new Project("Test", "ABCD");

project.createToDo("Todo1", "Just testing");
project.createToDo("Todo2", "Just testing");
project.createToDo("Todo3", "Just testing");


console.log(project.getPendingToDos());
console.log(project.getPendingToDosCount());

project.todos[0].setDoneState(true);
project.todos[1].setPriority("High");
project.todos[2].setDueAt("16-Sep-2023 21:00:00");

console.log(project.viewToDos());