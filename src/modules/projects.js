import implementTabSystem from "./tabSystem";
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

const projectManager = (() => {

    let projectArr = [new Project("hello")];

    const projectsPage = () => {
        initialiseProjectPage();
    };

    const initialiseProjectPage = () => {
        const tabContent = document.querySelector("#tab-content");
        
        // Clearing the tab content div
        tabContent.innerHTML = "";
    
        //Actual tab content
        tabContent.innerText ="These are your projects!";
    
        // Create a project list element that stores projects
        const projectList = document.createElement("ul");
        projectList.id = "projectList";
        
        const projectContent = document.createElement("div");
        projectContent.id = "projectContent";

        const todoList = document.createElement("ol");
        todoList.id = "todoList";

        projectContent.appendChild(todoList);


        tabContent.appendChild(projectList);
        tabContent.appendChild(projectContent);

        renderProject();
    };

    const renderProject = () => {
        const tabContent = document.querySelector("#tab-content");
        const projectList = document.querySelector("#projectList");
        const todoList = document.querySelector("#todoList");
        
        projectArr.forEach((el) => {
            const listElement = document.createElement("li");
            listElement.innerText = el.name;

            listElement.addEventListener("click", () => {
                projectContent.innerHTML = "";
                
                el.todoArr.forEach((todoEl) => {
                    const todoListElement = document.createElement("li");
                    todoListElement.innerText = todoEl.name;

                    todoList.appendChild(todoListElement);
                });
            });

            projectList.appendChild(listElement);
        });

        const addProjectButton = document.createElement("button");
        addProjectButton.innerText = "Add project";

        addProjectButton.addEventListener("click", () => {
            const newProjectName = prompt("Enter a name for the new project please");

            const newProject = addProject(newProjectName);

            const newProjectListElement = document.createElement("li");
            newProjectListElement.innerText = newProject.name;
            projectList.appendChild(newProjectListElement);
        });

        tabContent.appendChild(addProjectButton);
};

    const addProject = (name) => {
        const newProject = new Project(name);
        newProject.projectID = projectArr.length - 1;
        projectArr.push(newProject);
        return newProject;
    };

    const removeProject = (projectObj) => {
        projectArr.forEach((el) => {
            if(el.name === projectObj.name) {
                projectArr.splice(projectObj.projectID, 1);
            }
        });
    };
    
    return {
        projectsPage,
        addProject,
        removeProject
    }

})();

export default projectManager.projectsPage;