'use strict'
//declaring variables and selecting DOM elements
const Alphabets = [
  "A a",
  "B b",
  "C c",
  "D d",
  "E e",
  "F f",
  "G g",
  "H h",
  "I i",
  "J j",
  "K k",
  "L l",
  "M m",
  "N n",
  "O o",
  "P p",
  "Q q",
  "R r",
  "S s",
  "T t",
  "U u",
  "V v",
  "W w",
  "X x",
  "Y y",
  "Z z",
];
const letter = document.querySelector("p");
const btn = document.querySelector("button");
let i = 0;

//onclick function
function nextLetter() {
    //statement to loop the array infinitely
  if (i == Alphabets.length) {
    i = 0;
  }
  //assigning each iteration to the DOM
  letter.textContent = Alphabets[i];
  i++;
  //change button text
  if (letter.textContent.length != 'English Letters') {
    btn.textContent = "Next";
  }
}
//click event with callback fn 
btn.addEventListener("click", nextLetter);
