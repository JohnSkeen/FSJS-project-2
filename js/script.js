
// Global Variables
const searchDiv = document.createElement('div');
const searchLocation = document.querySelector('.page-header').appendChild(searchDiv);
searchDiv.className = "student-search";
const liNodes = document.getElementsByClassName('student-item');
const newDiv = document.createElement('div');
const pageLocation = document.querySelector('.page').appendChild(newDiv);
newDiv.className = "pagination";
let currentPage = 1;

// Dynamically Adding Search HTML
const searchStructure = `
    <input type="text" id="searchInput" placeholder="Search for students...">
    <button class="searchButton">Search</button>
    <p class="noResults" style="display: none;">Sorry, there are no students with that name!</p>
`;

searchLocation.innerHTML = searchStructure;

// ********************************************
//  Creating Functional Pagination
// ********************************************

// Function to show students based on current page pageNumber

const showPage = (list, page) => {
  let start = ((page - 1) * 10);
  let end = (start + 9);
  for (i = 0; i < list.length; i +=1 ) {
    if (i >= start && i <= end) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
};

// add Active class to current page

const addActive = () => {
  const linkList = document.querySelectorAll('.pagination ul li a');
  for (i=0; i<linkList.length; i+=1) {
    if (linkList[(currentPage - 1)] === linkList[i]) {
      linkList[i].classList.add('active');
    } else {
      linkList[i].classList.remove('active');
    }
  }
};

// Function to add dynamic page list and set current active pageNumber

const appendPageLinks = (list) => {
  let pageNumber = Math.ceil(list.length / 10);
  let createList = `
    <ul id="pageList">`
    for (i = 1; i <= pageNumber; i+=1) {
      createList += `
      <li>
        <a href="#" class="pageLink">${[i]}</a>
      </li>
      `
    }
  createList += `
    </ul>`
  pageLocation.innerHTML = createList;
  addActive();
};

showPage(liNodes, currentPage);
appendPageLinks(liNodes);

// Function to change page based on page number clicked

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'pageLink' ) ) {
      currentPage =  (event.target.innerHTML);
      showPage(liNodes, currentPage)
      addActive();
    }
}, false);

// ********************************************
//  Creating Search Function
// ********************************************

// set Input location
const input = document.getElementById('searchInput');

// create Search Function
function searchBar() {
  // Declare variables
  let filter = input.value.toUpperCase();
  const ul = document.querySelector('.student-list');
  const li = ul.getElementsByTagName('li');
  let searchResults = [];
  let noResults = [];

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    let h3 = li[i].getElementsByTagName("h3")[0];
    let txtValue = h3.textContent || h3.innerText;
    let noResultsText = document.querySelector(".noResults");
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      searchResults.push(li[i]);
    } else {
      li[i].style.display = "none";
      noResults.push(li[i]);
    }
    if (noResults.length === liNodes.length) {
      noResultsText.style.display = "";
    } else {
      noResultsText.style.display = "none";
    }
  }
  showPage(searchResults, currentPage);
  appendPageLinks(searchResults);
}



// Add event listener for search button
document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'searchButton' ) ) {
      searchBar();
    }
}, false);

// Add event listener when pressing enter on search
input.addEventListener('keyup', function (event) {
    if ( event.keyCode === 13 ) {
      searchBar();
    }
}, false);
