import aboutPage from "./modules/about";
import projectsPage from "./modules/projectManager";
import implementTabSystem from "./modules/tabSystem";

const pageFunctions = {aboutPage, projectsPage};

const homePageRenderer = (() => {
    const tabsArr = Array.from(document.querySelectorAll("#tabs li"));

    const initialisePage = () => {

        // Writing a tab system
        implementTabSystem(tabsArr, pageFunctions);
    };
    
    return {
        initialisePage  
    };
})();

homePageRenderer.initialisePage();