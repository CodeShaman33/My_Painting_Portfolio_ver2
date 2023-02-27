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




export { setSelectedPassion };