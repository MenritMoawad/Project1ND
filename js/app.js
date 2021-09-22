/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section"); // array of sections
const navBar = document.querySelector("#navbar__list"); // select nav bar


const fragment = document.createDocumentFragment();

for (let i = 0; i < sections.length; i++) {
    const createList = document.createElement("li"); // create a list item
    const createAnchor = document.createElement("a");
    createAnchor.textContent = sections[i].getAttribute("data-nav");
    createAnchor.style.color = "black";
    createAnchor.setAttribute("href","#"+sections[i].getAttribute("id"));
    createList.insertAdjacentElement("afterbegin",createAnchor);
    fragment.appendChild(createList);           
}

navBar.appendChild(fragment);

window.addEventListener('scroll',toggleActiveState);

const listItems = document.querySelector("#navbar__list").children; // put list items in an array to change the styling

function toggleActiveState() {
    // let sec1 = sections[0];
    // let port1 = sec1.getBoundingClientRect();
    // console.log(port1.top);
    // if (port1.top < 100 & port1.top > -350) {
    //     console.log("here");
    //     sec1.style.backgroundColor = "orange";
    // }
    // else
    // {
    //     sec1.style.backgroundColor = "";
    // }
    // console.log(listItems);
    for (let i = 0; i < sections.length; i++) {
        let sec = sections[i].getBoundingClientRect();
        if (sec.top < 150 & sec.top > -300) {
            // sections[i].style.backgroundColor = "orange";
            console.log("here "+i);
            sections[i].classList.remove("your-active-class");
            sections[i].classList.add("selected-section");
            listItems[i].classList.add("selected-section");
        }    
        else{
            sections[i].classList.add("your-active-class");
            sections[i].classList.remove("selected-section");
            listItems[i].classList.remove("selected-section");
        }
    }
}

for (let i = 0; i < listItems.length; i++) {
   listItems[i].addEventListener('click', function scrollToSection(event) {
        event.preventDefault();
        console.log(event.target.getAttribute("href"));
        // let value;
        if (event.target.nodeName === 'LI' | event.target.nodeName === 'A') {
            // value = event.target.getAttribute("href");   
            sections[i].scrollIntoView({behavior: "smooth", block: "center"});
        }
});    
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
