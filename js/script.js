
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

const g = document.querySelectorAll('[href="#"]');
console.log(g.length);
for (let i = 0, len = g.length; i < len; i++)
{
    g[i].onclick = function(){
        alert(g.parentNode.indexOf())  ;
    }
}


/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
