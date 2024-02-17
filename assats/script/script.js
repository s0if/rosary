const first = document.querySelector(".first  button");
const firstSpan = document.querySelector(".first span")
const second = document.querySelector(".second  button");
const secondSpan = document.querySelector(".second span")
const theard = document.querySelector(".theard  button");
const theardSpan = document.querySelector(".theard span");
const fourth = document.querySelector(".fourth button");
const fourthSpan = document.querySelector(".fourth span");
let numberOfFirst = 0;
let numberOfSecond = 0;
let numberOfTheared = 0;
let numberOfFourth = 0;
const countOfFirst = localStorage.getItem("first");
if (countOfFirst){
    numberOfFirst = countOfFirst;
    firstSpan.innerText = countOfFirst;}
else 
numberOfFirst=0;
const countOfSecond = localStorage.getItem("second");
if (countOfSecond){
    numberOfSecond = countOfSecond;
    secondSpan.innerText = countOfSecond;}
    else numberOfSecond=0;
const countOfTheared = localStorage.getItem("theared");
if (countOfTheared){
    numberOfTheared = countOfTheared
    theardSpan.innerText = countOfTheared;}
    else numberOfTheared=0;
const countOfFourth = localStorage.getItem("fourth");
if (countOfFourth){
    numberOfFourth = countOfFourth
    fourthSpan.innerText = countOfFourth;}
    else numberOfFourth=0;
first.onclick = () => {
    numberOfFirst++;
    firstSpan.innerText = numberOfFirst;
    localStorage.setItem("first", numberOfFirst);
}
second.onclick = () => {
    numberOfSecond++;
    secondSpan.innerText = numberOfSecond;
    localStorage.setItem("second", numberOfSecond);
}
theard.onclick = () => {
    numberOfTheared++;
    theardSpan.innerText = numberOfTheared;
    localStorage.setItem("theared", numberOfTheared);
}
fourth.onclick = () => {
    numberOfFourth++;
    fourthSpan.innerText = numberOfFourth;
    localStorage.setItem("fourth", numberOfFourth);
}
