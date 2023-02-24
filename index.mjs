// contains functions that create layout to the main page


class setLayout
{
    constructor()
    {
        //setting up functions
        this.setMainContainer();
        this.setNavBar();
    }

    //main container
    setMainContainer()
    {
        let mainContainer = document.getElementById("main-container");
        //navbar
        let navBar = document.createElement("nav");
        navBar.classList.add("navbar");
        navBar.id = "navbar";   
        mainContainer.appendChild(navBar);
    }

    setNavBar()
    {
        let navBar = document.getElementById("navbar");
        //nav-items
        let title = document.createElement("div");
        title.classList.add("navbar-element");
        title.id = "title";
        title.textContent = "Marcin Dończyk";


        //append elements
        navBar.appendChild(title);

        

    }
    
}

export default setLayout;