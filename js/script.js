
// Global Variables

const liNodes = document.getElementsByClassName('student-item');
const newDiv = document.createElement('div');
const pageLocation = document.querySelector('.page').appendChild(newDiv);
newDiv.className = "pagination";
let currentPage = 1;


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
  const pageList = document.querySelectorAll('.pagination ul li');
  for (i=0; i<pageList.length; i+=1) {
    if (pageList[(currentPage - 1)] === pageList[i]) {
      pageList[i].classList.add('active');
    } else {
      pageList[i].classList.remove('active');
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
  addActive();
};

appendPageLinks(liNodes.length);



document.onclick = function(event) {
    var target = event.target || event.srcElement;

    let currentPage =  ( target.innerHTML );
    showPage(liNodes, currentPage)
    addActive();
};
