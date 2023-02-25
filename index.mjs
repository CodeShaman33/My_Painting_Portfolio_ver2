// contains functions that create layout to the main page
//import files
import { passionsArray, aboutMe } from "./data.mjs";

class setLayout
{
    constructor()
    {
        //setting up functions
        this.setMainContainer();
        this.setNavBar();
        this.setAbout();
        this.setPassions();
        this.setPassionSection();
        this.hamburger();
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
        //about section
        let about = document.createElement("section");
        about.classList.add("about");
        about.id = "about";
        about.textContent = "About";
        mainContainer.appendChild(about);
        //passions items
        let passions = document.createElement("section");
        passions.classList.add("passions");
        passions.id = "passions";
        mainContainer.appendChild(passions);
        //selected-passion item
        let selectedPassion = document.createElement("section");
        selectedPassion.classList.add("selected-passion");
        selectedPassion.id = "selected-passion";
        mainContainer.appendChild(selectedPassion);
        //footer
        let footer = document.createElement("footer");
        footer.classList.add("footer");
        footer.id = "footer";
        footer.textContent = "Footer";
        
        mainContainer.appendChild(footer);
        
    }

    setNavBar()
    {
        let navBar = document.getElementById("navbar");
        //nav-items
        let title = document.createElement("div");
        title.classList.add("navbar-element");
        title.id = "title";
        title.textContent = "Marcin Dończyk";
        //links 
        let navLinks = document.createElement("ul");
        navLinks.classList.add("navbar-links");
        //home
        let home = document.createElement("li");
        home.classList.add("navbar-link");
        home.id = "home";
        home.innerHTML = "<a href='#'>Home</a>";
        navLinks.appendChild(home);
        //gallery
        let gallery = document.createElement("li");
        gallery.classList.add("navbar-link");
        gallery.id = "gallery";
        gallery.innerHTML = "<a href='#'>Gallery</a>";
        navLinks.appendChild(gallery);
        //form
        let form = document.createElement("li");
        form.classList.add("navbar-link");
        form.id = "form";
        form.innerHTML = "<a href='#'>Form</a>";
        navLinks.appendChild(form);
    
        //append elements
        navBar.appendChild(title);
        navBar.appendChild(navLinks);
    }

    setAbout()
    {
        let about = document.getElementById("about");
        about.textContent = aboutMe;

    }
    
    setPassions()
    {
        let passions = document.getElementById("passions");
        let passionItems = document.createElement('ul');
        passionItems.classList.add('passion-items');
        passionItems.id = "passion-items";


        //items from array
        passionsArray.forEach(
            (item) => {
                let li = document.createElement('li');
                li.id = item.id;
                li.classList.add('passion-item');

                //icon
                let icon = document.createElement('img');
                icon.src = item.svg;
                icon.id = item.id;
                icon.classList.add('passion-icon');
                li.append(icon);
                
                //title
                let title = document.createElement('h2');
                title.textContent = item.title;
                li.appendChild(title);
                passionItems.appendChild(li);

                
            }
        )
        passions.appendChild(passionItems);

    }

    setPassionSection()
    {
        //passion description
        let selectedPassion = document.getElementById("selected-passion");
        let passionDescription = document.createElement("div");
        passionDescription.classList.add("passion-description");
        passionDescription.id = "passion-description";
        selectedPassion.appendChild(passionDescription);
        //passion photos
        let passionPhotos = document.createElement("div");
        passionPhotos.classList.add("passion-photos");
        passionPhotos.id = 'passion-photos';
        selectedPassion.appendChild(passionPhotos);
        
    }

    hamburger()
    {
        let hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        hamburger.id = "hamburger";
        hamburger.innerHTML = "<span></span><span></span><span></span>";
        let navbar = document.getElementById("navbar");
        navbar.appendChild(hamburger);
        //event listener
        hamburger.addEventListener("click", () => 
        {
            let navLinks = document.getElementsByClassName("navbar-links");
            navLinks[0].toggleAttribute("active");


        });
    }
}

export default setLayout;