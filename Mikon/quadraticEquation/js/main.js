const form = document.querySelector("#form");

const quadraticEquation = (e) =>
{
    e.preventDefault();
    const a = Number(document.querySelector("#a").value);
    const ax2 = `${a}x`
    const b = Number(document.querySelector("#b").value);
    const bx = `${b}x`
    const c = Number(document.querySelector("#c").value);
    const p = document.querySelector("#p");
    const b2 = Math.pow(b,2);
    const D = b2 - (4 * a *c);
    let val,fact,i,p2,per;

        if(D > 0)
        {
            val = " The roots are real and distinct"
        }
        else if(D === 0)
        {
            val = " The roots are real and equal"
        }
        else if (D < 0)
        {
            val = " The roots are unreal"
        }


    const sD = Math.sqrt(D);
    const U = (-b + sD)/(2 * a);
    const U2 = (-b - sD)/(2 * a);

    const answer =  `${a === 1 ? "x<sup>2</sup>" :  ax2}
    ${b < 0 ? "" : "+" }
    ${b === 1 ? "x" : b === -1 ? "-x" : b}  
    ${c < 1 ? "" : "+"}
    ${c} =  ${U2} or ${U}`;
     p.innerHTML = answer.concat(val);
    console.log(a,b,c);
    console.log(U)
    val = document.querySelector
    fact = 1;
    per = document.querySelector("#per");
    p2 = document.querySelector("#p2");
    for(i=1;i<=per.value;i++)
    {
        fact = fact * i;
    }
    console.log(fact);
}

form.addEventListener("submit", quadraticEquation);