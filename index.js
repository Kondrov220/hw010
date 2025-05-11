//1
let i = 0;
const intervalId = setInterval(() => {
    console.log(i)
    if(i === 5){
        clearInterval(intervalId)
    }
    i++;
}, 1000);
//2
const circel = setInterval(() => {
    document.querySelector(".circle").classList.toggle("circle-animetion");
}, 2000);


const square = setInterval(() => {
    document.querySelector(".square").classList.toggle("square-animetion");
}, 2000);


const rectangle = setInterval(() => {
    document.querySelector(".rectangle").classList.toggle("rectangle-animetion");
}, 2000);

//3
let score = 0
let second = 60
document.querySelector("button").addEventListener("click", () => {
    const timer = setInterval(() => {
        second--;
        if(second === 0){
            clearInterval(timer)
            clearInterval(game)
        }
        document.querySelector("#second").textContent = second
    }, 1000);
    const game = setInterval(() => {
        document.querySelector(`#box1`).style.backgroundColor = "red";
        document.querySelector(`#box2`).style.backgroundColor = "red";
        document.querySelector(`#box3`).style.backgroundColor = "red";
        const rund =  Math.round(Math.random() * (3 - 1) + 1)
        document.querySelector(`#box${rund}`).style.backgroundColor = "green";
        document.querySelector(`#box${rund}`).addEventListener("click", () => {
            score++;
            document.querySelector("#score").textContent = score
        })
    }, 1000);
})
//4
document.querySelector("#button").addEventListener("click", () =>{
    document.querySelector("#text").textContent = "Ви увімкнули таймер"
const time = document.querySelector("input").value
setTimeout(() => {
    document.querySelector("#text").textContent = "Час вийшов"
}, time*1000);
})
