const priorityLevel  = {
    easy: 0,
    medium: 1,
    hard: 2
};

class Todo {

    constructor(name = "", description = "", priority = priorityLevel.easy, projectObj) {
        if (!name) {
            alert("Giving a name is required");
        } 
        else {
            this.name = name;
        }

        this.id = projectObj.todoArr.length;
    }

    refreshID(projectObj) {
        this.id = projectObj.todoArr.length;
    }

}

export default Todo;
