let numbers = document.querySelector('.number-2');
let counters = 0;
setInterval(()=>{
    if(counters == 75){
clearInterval();
    }else{
        counters += 1;
        numbers.innerHTML = counters + "%"
    }

},20);


let numbers3 = document.querySelector('.number-3');
let counters3 = 0;
setInterval(()=>{
    if(counters3 == 16){
clearInterval();
    }else{
        counters3 += 1;
        numbers3.innerHTML = counters3 + "%"
    }

},20);

let numbers4 = document.querySelector('.number-4');
let counters4 = 0;
setInterval(()=>{
    if(counters4 == 51){
clearInterval();
    }else{
        counters4 += 1;
        numbers4.innerHTML = counters4 + "%"
    }

},20);


