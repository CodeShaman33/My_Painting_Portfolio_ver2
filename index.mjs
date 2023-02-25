import setLayout from "./main.mjs";
import setSelectedPassion  from "./passion.mjs";
import passionEventListener from "./event-listener.mjs";

//setting up elements 
let layout = new setLayout();
//setting up functions
layout.setCanvas();
layout.setNavBar();
layout.setMainContainer();
layout.setAbout();
layout.setPassions();
layout.setPassionSection();
layout.hamburger();
       
setSelectedPassion();
passionEventListener();
//background
