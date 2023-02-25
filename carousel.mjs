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
        this.galleryCarousel();
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
        //elements list
        let carouselList = document.createElement('ul');
        carouselList.classList.add('carousel-list');
        carousel.appendChild(carouselList);
        this.carouselList = carouselList;
    }

    galleryCarousel() {
        //reset html element
        const imageUrls = paintingsList;
    
        const imageCount = imageUrls.length;
        let currentImageIndex = 0;
    

    
        for(let i = 0; i < imageCount; i++)
        {
            let listElement = document.createElement('li');
            listElement.classList.add('carousel-item');
            listElement.id = `carousel-item-${i}`;
            let image = document.createElement('img');
            image.classList.add('carousel-image');
            image.id = `carousel-image-${i}`;
            image.src = imageUrls[i];
            listElement.appendChild(image);
            listElement.setAttribute('style', 'display: none;');


            this.carouselList.appendChild(listElement);
            //diplay 


        }

        //buttons
        let previousButton = document.createElement("button");
        previousButton.classList.add("button");
        previousButton.id = "previous-button";
        previousButton.innerHTML = "<<";
        this.carousel.appendChild(previousButton);
        //next
        let nextButton = document.createElement("button");
        nextButton.classList.add("button");
        nextButton.id = "next-button";
        nextButton.innerHTML = ">>";
        this.carousel.appendChild(nextButton);
        let slides = document.querySelectorAll(".carousel-item");

        
    
        //Add event listeners to buttons
        previousButton.addEventListener("click", () => {
            slides[currentImageIndex].style.display = "none";

            currentImageIndex = (currentImageIndex + imageCount - 1) % imageCount;
            let slide = document.getElementById(`carousel-item-${currentImageIndex}`);
            slide.setAttribute('style', 'display: block;');



        });
        nextButton.addEventListener("click", () => {
            slides[currentImageIndex].style.display = "none";

          currentImageIndex = (currentImageIndex + 1) % imageCount;
          let slide = document.getElementById(`carousel-item-${currentImageIndex}`);
          slide.setAttribute('style', 'display: block;');

        });
    

    
      }

}

export default Carousel;