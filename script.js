const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>(a*b).toFixed(2);
const divide=(a,b)=>(a/b).toFixed(2);
const operate=(operator,a,b)=>{
    switch(operator){
        case "+":return add(a,b);
        case "-":return subtract(a,b);
        case "/":return divide(a,b);
        case "*":return multiply(a,b);
    }
};
const clearAll=()=>{
    prevValue="";
    clickedOp="";
    total="";
    clickedOpTimes=false;
    document.querySelector(".display").innerText="";
    document.querySelector(".old").innerText="";
    document.querySelector(".operator").innerText="";
};

let clickedOp="";
let prevValue="";
let total="";
let clickedOpTimes=false;

//Numbers Buttons
document.querySelectorAll(".num-normal").forEach(elem=>elem.addEventListener("click",elem=>{
    if(!clickedOpTimes){
        document.querySelector(".display").innerText+=elem.target.innerText;
    }
    else{
        document.querySelector(".display").innerText=elem.target.innerText;
    }
    clickedOpTimes=false;
    console.log(prevValue);
}));

//Function Buttons
document.querySelectorAll(".op,.eq").forEach(elem=>elem.addEventListener("click",elem=>
{
   //console.log(total);
   clickedOpTimes=true;
   prevValue=document.querySelector(".display").innerText;
   
   if(document.querySelector(".old").innerText==""){document.querySelector(".old").innerText=prevValue;}
   else{
    if(document.querySelector(".display").innerText!=""){
    switch (clickedOp){
        case "+":
            total=operate(clickedOp,parseInt(document.querySelector(".old").innerText),parseInt(document.querySelector(".display").innerText));document.querySelector(".old").innerText=total;clickedOpTimes=true;break;
        case "*":
            total=operate(clickedOp,parseInt(document.querySelector(".old").innerText),parseInt(document.querySelector(".display").innerText));document.querySelector(".old").innerText=total;clickedOpTimes=true;break;
        case "/":
            total=operate(clickedOp,parseInt(document.querySelector(".old").innerText),parseInt(document.querySelector(".display").innerText));if(total==Infinity){alert("Error, don't divide by 0!");clearAll();}else{document.querySelector(".old").innerText=total;}clickedOpTimes=true;break;
        case "-":
            total=operate(clickedOp,parseInt(document.querySelector(".old").innerText),parseInt(document.querySelector(".display").innerText));document.querySelector(".old").innerText=total;clickedOpTimes=true;break;
    }
   }}
   document.querySelector(".display").innerText="";clickedOp=elem.target.innerText;document.querySelector(".operator").innerText=clickedOp;
}));

document.querySelector(".point").addEventListener("click",elem=>{
    let numRegex=/^\d+\.?\d*/;
    document.querySelector(".display").innerText+=".";
    document.querySelector(".display").innerText=document.querySelector(".display").innerText.match(numRegex)[0];
 });


document.querySelector(".ac").addEventListener("click",elem=>{
   clearAll();
});

document.querySelector(".c").addEventListener("click",elem=>{
    let displayText=document.querySelector(".display").innerText;
    if(displayText!=""){
        document.querySelector(".display").innerText=displayText.slice(0,-1);
    }
 });

document.querySelector("body").addEventListener("keydown",elem=>{
    switch (elem.key){
        case "1":document.querySelector("#one").click();break;
        case "2":document.querySelector("#two").click();break;
        case "3":document.querySelector("#three").click();break;
        case "4":document.querySelector("#four").click();break;
        case "5":document.querySelector("#five").click();break;
        case "6":document.querySelector("#six").click();break;
        case "7":document.querySelector("#seven").click();break;
        case "8":document.querySelector("#eight").click();break;
        case "9":document.querySelector("#nine").click();break;
        case "10":document.querySelector("#ten").click();break;
        case "+":document.querySelector("#plu").click();break;
        case "-":document.querySelector("#sub").click();break;
        case "*":document.querySelector("#mul").click();break;
        case "/":document.querySelector("#div").click();break;
        case "=":document.querySelector("#equ").click();break;
        case "Backspace":document.querySelector(".c").click();break;
    }
});