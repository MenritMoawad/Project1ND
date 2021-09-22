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
const sectionsNum = document.querySelectorAll("section"); // array of sections
const navBar = document.querySelector("#navbar__list"); // select nav bar

const createAnchor = document.createElement("a");

const createList = document.createElement("li"); // create a list item
createAnchor.textContent = "hello";
createAnchor.style.color = "black";
createAnchor.setAttribute("href","#section1");
createList.insertAdjacentElement("afterbegin",createAnchor);
navBar.appendChild(createList);

console.log(sectionsNum.length);


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
