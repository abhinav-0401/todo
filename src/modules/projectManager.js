import implementTabSystem from "./tabSystem";
import Project from "./project";

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

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv";

        projectContent.appendChild(todoList);
        projectContent.appendChild(buttonDiv);

        tabContent.appendChild(projectList);
        tabContent.appendChild(projectContent);
        
        renderProject();
    };

    const renderProject = () => {
        const tabContent = document.querySelector("#tab-content");
        const projectList = document.querySelector("#projectList");
        
        projectArr.forEach((el) => {
            const listElement = document.createElement("li");
            listElement.innerText = el.name;

            listElement.addEventListener("click", () => {
                projectContent.firstChild.innerHTML = "";       
                renderTodo(el);         
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

            newProjectListElement.addEventListener("click", () => {
                projectContent.firstChild.innerHTML = "";       
                renderTodo(newProject);
            });
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

    const renderTodo = (projectObj) => {
        const todoList = document.querySelector("#todoList");
        // const projectContent = document.querySelector("#projectContent");
        const buttonDiv = document.querySelector("#buttonDiv");

        projectObj.todoArr.forEach((todoEl) => {
            const todoListElement = document.createElement("li");
            todoListElement.innerText = todoEl.name;

            todoList.appendChild(todoListElement);
        });

        const addTodoButton = document.createElement("button");
        addTodoButton.innerText = "Add Todo";

        buttonDiv.innerHTML = "";
        buttonDiv.appendChild(addTodoButton);

        addTodoButton.addEventListener("click", () => {
            const newTodoName = prompt("Name for the todo? ");

            projectObj.addTodo(newTodoName);

            // renderTodo(projectObj);

            todoList.innerHTML = "";

            console.log(projectObj);
            projectObj.todoArr.forEach((todoEl) => {
                const todoListElement = document.createElement("li");
                todoListElement.innerText = todoEl.name;

                todoList.appendChild(todoListElement);
            });
        });

        const removeTodoButton = document.createElement("button");
        removeTodoButton.id = "removeTodoButton";
        removeTodoButton.innerText = "Remove Todo";

        buttonDiv.appendChild(removeTodoButton);
        
        removeTodoButton.addEventListener("click", () => {
            const removeID = Number(prompt("number of todo?"));

            console.log(projectObj.todoArr[removeID]);
            projectObj.todoArr.splice(removeID - 1, 1);

            todoList.innerHTML = "";
            
            projectObj.todoArr.forEach((todoEl) => {
                const todoListElement = document.createElement("li");
                todoListElement.innerText = todoEl.name;

                todoList.appendChild(todoListElement);
            });
        });
    };
    
    return {
        projectsPage,
        addProject,
        removeProject
    }

})();

export default projectManager.projectsPage;