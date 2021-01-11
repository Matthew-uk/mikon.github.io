const number = document.querySelector("#number");
const btn = document.querySelector('#btn');
const p = document.querySelector('#p');
const form = document.querySelector('#form');

btn.addEventListener("click", permutation);
form.addEventListener("submit", permutation);

function permutation(e)
{
    
    e.preventDefault();
    var i, fact, val;
    fact = 1;
    val = number.value;

    if(val){
    for(i=1; i <= val; i++){
        fact = fact * i;
        console.log(i,fact);

    }
    p.innerHTML = `${number.value}! ${fact}`
    } else if(val === null){
        p.innerHTML = `${number.value}! ${fact}`
    }

}

