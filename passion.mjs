//import 
import { currentPassion, passionsArray } from "./data.mjs";

function setSelectedPassion()
{
    let passions = document.querySelectorAll('.passion-item');
    let selectedOne = document.getElementById('selected-passion');

    passions.forEach(item => {
    //get id of an element
    let tempId = item.getAttribute('id');

    item.addEventListener('click', () => 
    {
        item.toggleAttribute('selected');
        let desc = document.getElementById('passion-description');
        //resetting element
        desc.innerHTML = '';
        //title
        let tempTitle = document.createElement('h2');
        tempTitle.textContent = passionsArray[tempId].title;
        desc.appendChild(tempTitle);
        //description
        let tempDesc = document.createElement('p');
        tempDesc.textContent = passionsArray[tempId].description;
        desc.appendChild(tempDesc);
        //create carousel for specific passion
        indexCarousel(tempId);
        selectedOne.setAttribute('active', 'true');


    });


        


    })
}

function indexCarousel(tempId) {
    const container = document.getElementById("passion-photos");
    //reset html element
    container.innerHTML = "";
    const imageUrls = passionsArray[tempId].images;

    const imageCount = imageUrls.length;
    let currentImageIndex = 0;

    // Create elements for the carousel
    const carousel = document.createElement("div");
    carousel.className = "index-carousel";
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    
    const prevButton = document.createElement("button");
    prevButton.classList.add("button");
    const nextButton = document.createElement("button");
    nextButton.classList.add("button");
    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);
    prevButton.id = "prev-button";
    nextButton.id = "next-button";

    const image = document.createElement("img");

    // Set initial image
    image.src = imageUrls[currentImageIndex];
    image.style.maxWidth = "100%";
    carousel.appendChild(image);

    // Style the  buttons
    prevButton.textContent = "<";
    nextButton.textContent = ">";

    // Add event listeners to buttons
    prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + imageCount - 1) % imageCount;
      image.src = imageUrls[currentImageIndex];
    });
    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % imageCount;
      image.src = imageUrls[currentImageIndex];
    });

    // Add elements to container
    container.appendChild(carousel);
    container.appendChild(buttonsContainer);

  }

export default setSelectedPassion;