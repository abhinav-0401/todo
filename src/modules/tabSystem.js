const implementTabSystem = (listArr, funcObj) => {
    listArr.forEach((el) => {
        const dataTab = el.dataset.tab.toLowerCase();

        console.log(dataTab);
        el.addEventListener("click", () => {
            funcObj[dataTab + "Page"]();
        });
    });
};

export default implementTabSystem;
