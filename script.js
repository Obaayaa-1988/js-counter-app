const counter = document.querySelector('.count');

const btnAdd = document.querySelector('.add');

const btnSub = document.querySelector('.tract');

const btnReset = document.querySelector('.set');

btnAdd.addEventListener("click", () => {
    counter.innerHTML++;
    changeColors();
})

btnSub.addEventListener("click", () => {
    counter.innerHTML--;
    changeColors();

})

btnReset.addEventListener("click", () => {
    counter.innerHTML = 0;
    changeColors();

})

function changeColors(){
    if(counter.innerHTML > 0) {
        counter.style.color = "red";
    } else if( counter.innerHTML < 0) {
        counter.style.color = "white";
    } else{
        counter.style.color = "black";

    }
}

