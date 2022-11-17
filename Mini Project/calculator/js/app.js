let keypad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+","-","*","/","%"];


let filter = x =>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if(current.length >= 10){
        return false;
    };

    if(current == '0' && x != '.'){
        clearLast()
    };

    if(operators.includes(x) && operators.includes(lastChar)){
        return false;
    };

    return true;
};

let filterCalc = _ =>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if(operators.includes(lastChar)){
        return false;
    };
    return true;
};

let showInDisplay = (x) =>{
    if(filter(x)){
        displayBox.innerText += x;
    }
};

let calc = _ =>{
    if(filterCalc()){
        displayBox.innerText = eval(displayBox.innerText);
    }
}

let clearAll = _ => displayBox.innerText = "";

let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1);

keypad.addEventListener("click",_=>{
    if(displayBox.innerText.length > 10){
        displayBox.style.fontSize = 30 + "px";
    }else if(displayBox.innerText.length > 5){
        displayBox.style.fontSize = 60 + "px";
    }
});
