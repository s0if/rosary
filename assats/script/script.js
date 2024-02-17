const first = document.querySelector(".first  button");
const second = document.querySelector(".second  button");
const theard = document.querySelector(".theard  button");
const fourth = document.querySelector(".fourth button");
let numberOfFirst = 0;
let numberOfSecond = 0;
let numberOfTherd = 0;
let numberOfFourth = 0;
first.onclick = () => {
    numberOfFirst++;
    document.querySelector(".first span").innerText = numberOfFirst;
}
second.onclick = () => {
    numberOfSecond++;
    document.querySelector(".second span").innerText = numberOfSecond;
}
theard.onclick = () => {
    numberOfTherd++;
    document.querySelector(".theard span").innerText = numberOfTherd;
}
fourth.onclick = () => {
    numberOfFourth++;
    document.querySelector(".fourth span").innerText = numberOfFourth;
}
