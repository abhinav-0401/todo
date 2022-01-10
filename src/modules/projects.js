import implementTabSystem from "./tabSystem";

class Project {
    constructor(name) {
        this.name = name;
    }
};

const projectsPage = () => {
    const tabContent = document.querySelector("#tab-content");
    
    // Clearing the tab content div
    tabContent.innerHTML = "";

    //Actual tab content
    tabContent.innerText ="These are your projects!";
};

const renderProjects = () => {

};

export default projectsPage;