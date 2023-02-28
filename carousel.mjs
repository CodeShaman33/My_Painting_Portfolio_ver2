export default function createPhotoCarousel(element, imageUrls) {


    // create carousel element
    let carousel = document.createElement('div');
    carousel.classList.add('carousel-inside');
    element.appendChild(carousel);
  
    // create carousel list element
    let carouselList = document.createElement('ul');
    carouselList.classList.add('carousel-list');
    carousel.appendChild(carouselList);
  
    // create carousel item elements and add images
    for (let i = 0; i < imageUrls.length; i++) {
      let listItem = document.createElement('li');
      listItem.classList.add('carousel-item');
      let img = document.createElement('img');
      img.classList.add('carousel-image');
      img.src = imageUrls[i];
      listItem.appendChild(img);
      carouselList.appendChild(listItem);
    }
  
    // create prev and next buttons
    let prevButton = document.createElement('button');
    prevButton.classList.add('carousel-button');
    prevButton.classList.add('prev-button');
    prevButton.innerHTML = '&#8656';
    carousel.appendChild(prevButton);
  
    let nextButton = document.createElement('button');
    nextButton.classList.add('carousel-button');
    nextButton.classList.add('next-button');
    nextButton.innerHTML = '&#8658';
    carousel.appendChild(nextButton);
  
    // set up event listeners for prev and next buttons
    let currentImageIndex = 0;
    let carouselItems = document.querySelectorAll('.carousel-item');
  
    prevButton.addEventListener('click', () => {
      carouselItems[currentImageIndex].classList.remove('active');
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = carouselItems.length - 1;
      }
      carouselItems[currentImageIndex].classList.add('active');
    });
  
    nextButton.addEventListener('click', () => {
      carouselItems[currentImageIndex].classList.remove('active');
      currentImageIndex++;
      if (currentImageIndex >= carouselItems.length) {
        currentImageIndex = 0;
      }
      carouselItems[currentImageIndex].classList.add('active');
    });
  
    // set initial active slide
    carouselItems[currentImageIndex].classList.add('active');
  }
  
  