//import 
import { currentPassion, passionsArray, paintingsList } from "./data.mjs";
import createPhotoCarousel from './carousel.mjs';

function setSelectedPassion()
{
    let passions = document.querySelectorAll('.passion-item');
    let selectedOne = document.getElementById('selected-passion');

    passions.forEach(item => {
    //get id of an element
    let tempId = item.getAttribute('id');
    let photoElement = document.getElementById('passion-photos');


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
        photoElement.innerHTML = '';
        createPhotoCarousel(photoElement, paintingsList);


    });


        


    })
}




export { setSelectedPassion };