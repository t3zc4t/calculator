const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;
const operate=(operator,a,b)=>{
    switch(operator){
        case "add":return add(a,b);
        case "sub":return subtract(a,b);
        case "div":return divide(a,b);
        case "mul":return multiply(a,b);
    }
};