import setLayout from "./main.mjs";
import Gallery from "./gallery-class.mjs";
import  createPhotoCarousel  from "./carousel.mjs";
import { paintingsList } from './data.mjs';

//setting up baasic elements 
let layout = new setLayout();
layout.setCanvas();
layout.setNavBar();
layout.hamburger();
//carousel
let gallery = new Gallery();
let carousel = document.getElementById('carousel');
createPhotoCarousel(carousel, paintingsList);

