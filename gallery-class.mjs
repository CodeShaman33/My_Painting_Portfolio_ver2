import { paintingsList } from "./data.mjs";


class Carousel 
{
    constructor(params) 
    {
        this.carouselList
        this.carousel
        this.container = document.getElementById('main-container');
        //run functions
        this.setUpLayout();
        this.setUpCarousel();
        this.currentSlide = 0;


    }

    //set up HTML elements
    setUpLayout()
    {
        let paintingList = document.createElement('div');
        paintingList.classList.add('painting-list');
        paintingList.id = 'painting-list';
        this.container.appendChild(paintingList);
    }

    setUpCarousel()
    {
        let carousel = document.createElement('div');
        this.carousel = carousel;
        carousel.classList.add('carousel');
        carousel.id = 'carousel';
        this.container.appendChild(carousel);
        
    }

}
export default Carousel;