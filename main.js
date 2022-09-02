let cells = document.querySelectorAll("td:not(.given-number)")
let candidates = document.querySelectorAll(".candidates");
let values = document.querySelectorAll(".value");
let givenNums = document.querySelectorAll(".given-number");
let nums = document.querySelectorAll(".number-control");
let btn = document.querySelector("#candidate-switch");

btn.setAttribute("move", "normal");

let activeCell;

btn.addEventListener("click", function(){
    if(btn.getAttribute("move") === "normal"){
        btn.setAttribute("move", "candidate");

    }else{
        btn.setAttribute("move", "normal");
    }
})

cells.forEach(cell => {
    cell.addEventListener("click", function(){
        if( document.querySelector(".selected")){
            document.querySelector(".selected").classList.remove("selected");
        }
        cell.classList.toggle("selected");
        activeCell = cell;
    })
})

nums.forEach(num => {
    num.addEventListener("click", function(){
        if(btn.getAttribute("move") === "normal"){
            activeCell.lastElementChild.innerText = num.innerText;
        }else if(btn.getAttribute("move") === "candidate"){
            if(activeCell.firstElementChild.innerText.includes(num.innerText)){
                let str = activeCell.firstElementChild.innerText.replace(num.innerText, '');
                activeCell.firstElementChild.innerText = str;
            }else{
                let str = activeCell.firstElementChild.innerText + num.innerText;
                let arr = Array.from(str).sort();
                activeCell.firstElementChild.innerText = arr.join('');
            }
        }
    })
})


