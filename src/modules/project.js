import Todo from "./todo";

class Project {

    todoArr = [];
    projectID = 100;
    
    constructor(name) {
        this.name = name;  
    }

    addTodo(name, description, priority) {
        this.todoArr.push(new Todo(name, description, priority, this));
    }

    removeTodo(todoID) {
        this.todoArr.splice(todoID, 1);

        this.todoArr.refreshID(this);
    }

};

export default Project;
