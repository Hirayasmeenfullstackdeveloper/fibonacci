let div=document.getElementById("Fibonacci Series")

let a=-1;
let b=1;
let c="";

let number=parseInt(prompt("Enter the limit"));
for(let i=1; i<=number; i++)
{
    c=a+b;
    document.write("<br>"  + c);
    a=b;
    b=c;
}




