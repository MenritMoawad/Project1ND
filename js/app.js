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

for (let i = 1; i <= sections.length; i++) {
    const createList = document.createElement("li"); // create a list item
    const createAnchor = document.createElement("a");
    createAnchor.textContent = "Section"+i;
    createAnchor.style.color = "black";
    createAnchor.setAttribute("href","#section"+i);
    createList.insertAdjacentElement("afterbegin",createAnchor);
    fragment.appendChild(createList);           
}

navBar.appendChild(fragment);


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
