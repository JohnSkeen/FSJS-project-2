
// Global Variables

const liNodes = document.getElementsByClassName('student-item');
const newDiv = document.createElement('div');
const pageLocation = document.querySelector('.page').appendChild(newDiv);
let currentPage = 1;
newDiv.className = "pagination";


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

// Function to add dynamic page list and set current active pageNumber

const appendPageLinks = (list) => {
  let pageNumber = Math.ceil(list / 10);
  let createList = `
    <ul id="pageList">`
    for (i = 1; i <= pageNumber; i+=1) {
      createList += `
      <li>
        <a href="#">${[i]}</a>
      </li>
      `
    }
  createList += `
    </ul>`
  pageLocation.innerHTML = createList;
  showPage(liNodes, currentPage);
};

appendPageLinks(liNodes.length);

// add Active class to current page
const addActive = () => {
  const pageList = document.querySelectorAll('.pagination ul li');
  for (i=0; i<pageList.length; i+=1) {
    if (pageList[(currentPage - 1)] === pageList[i]) {
      pageList[i].classList.add('active');
    } else {
      pageList[i].classList.remove('active');
    }
  }
};

addActive();

// const changePage = () => {
//   const pageList = document.querySelectorAll('.pagination ul li a')
//   console.log(pageList)
//   // pageList.addEventListener('click', () => {
//   //   currentPage = pageList
//   // })
//   // addActive();
// };
//
// changePage();


// Attempting to find the parent index in order to change the page variable to current parent index
const g = document.querySelectorAll('[href="#"]');
console.log(g.length);
for (let i = 0, len = g.length; i < len; i++)
{
    g[i].onclick = function(){
        alert(g.parentNode.indexOf())  ;
    }
}
