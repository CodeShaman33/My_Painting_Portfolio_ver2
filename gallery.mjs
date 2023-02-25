import setLayout from "./main.mjs";
import Carousel from "./carousel.mjs";


//setting up baasic elements 
let layout = new setLayout();
layout.setCanvas();
layout.setNavBar();
layout.hamburger();
//carousel
let carousel = new Carousel();


