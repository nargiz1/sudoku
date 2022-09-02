let cells = document.querySelectorAll("td:not(.given-number)")
let candidates = document.querySelectorAll(".candidates");
let values = document.querySelectorAll(".value");
let givenNums = document.querySelectorAll(".given-number");
let nums = document.querySelectorAll(".number-control");
let btn = document.querySelector("#candidate-switch");

let activeCell;

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
        if(btn.checked === false){
            activeCell.lastElementChild.innerText = num.innerText;
        }else if(btn.checked === true){
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


