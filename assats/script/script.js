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
firstSpan.innerText = countOfFirst;
if (countOfFirst)
    numberOfFirst = countOfFirst;
const countOfSecond = localStorage.getItem("second");
secondSpan.innerText = countOfSecond;
if (countOfSecond)
    numberOfSecond = countOfSecond;
const countOfTheared = localStorage.getItem("theared");
theardSpan.innerText = countOfTheared;
if (countOfTheared)
    numberOfTheared = countOfTheared
const countOfFourth = localStorage.getItem("fourth");
fourthSpan.innerText = countOfFourth;
if (countOfFourth)
    numberOfFourth = countOfFourth
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
