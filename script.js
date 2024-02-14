var canDoOperation = true;
var fontSize = 350;
var originalFontSize = 350;
var maxDisplayLength = 8;
var textDisplay = document.querySelector('.text-display');
var leftSide;
var hasSelectedLeft = false;
var operation;


function addEventListenerToButtonsInDiv(divClass) {
    // Select all the divs with the specified class name
    const divs = document.querySelectorAll(`.${divClass}`);

    // Loop through each div
    divs.forEach(div => {
        // Select all buttons within the current div
        const buttons = div.querySelectorAll('button');

        // Add event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if(button.id != 'backspace')
                {
                    changeDisplay(this.id);
                }
                else
                {
                    backspaceDisplay();
                }
            });
        });
    });
}

function changeDisplay(buttonID){
    if(Number(textDisplay.textContent) == 0 || textDisplay.textContent == "NaN")
    {
        textDisplay.textContent = '';
    }
    textDisplay.textContent += buttonID;

    decreaseFontSize();
}

addEventListenerToButtonsInDiv('number-pad');
addEventListenerToButtonsInDiv('big-button');

document.addEventListener('keydown', function(event) {
    if (event.key === "m" || event.key === "M" || (event.shiftKey && event.key === "*")) { 
        multiplication();
    }
    if (event.key === "s" || event.key === "S" ||  event.key === "-") {
        subtraction();
    }
    if (event.key === "a" || event.key === "A" ||  (event.shiftKey && event.key === "+")) { 
        addition();
    }
    if (event.key === "d" || event.key === "D" ||  event.key === "/") { 
        division();
    }
    if (event.key === "p" || event.key === "P" ||  (event.shiftKey && event.key === "%")) { 
        percentage();
    }
    if (event.key === "n") { 
        posNeg();
    }
    if (event.key === "c" || event.key === "C") { 
        clear();
    }
    if(event.key === "Backspace"){
        backspaceDisplay();
    }
    if (event.key === "=" || event.key === "e" || event.key === "E" || event.key === "Enter") { 
        equals();
    }
    if (event.key === "0" ) { 
        changeDisplay('0');
    }
    if (event.key === "1" ) { 
        changeDisplay('1');
    }
    if (event.key === "2" ) { 
        changeDisplay('2');
    }
    if (event.key === "3" ) { 
        changeDisplay('3');
    }
    if (event.key === "4" ) { 
        changeDisplay('4')
    }
    if (event.key === "5" ) { 
        changeDisplay('5');
    }
    if (event.key === "6" ) { 
        changeDisplay('6');
    }
    if (event.key === "7" ) { 
        changeDisplay('7');
    }
    if (event.key === "8" ) { 
        changeDisplay('8');
    }
    if (event.key === "9" ) { 
        changeDisplay('9');
    }
});

document.getElementById('clear').addEventListener('click', function() {
   clear();

});

document.getElementById('plusneg').addEventListener('click', function() {
    posNeg();
});

document.getElementById('percent').addEventListener('click', function() {
    percentage();
});

document.getElementById('divide').addEventListener('click', function() {
    division();
});

document.getElementById('multiply').addEventListener('click', function() {
    multiplication();
});

document.getElementById('minus').addEventListener('click', function() {
    subtraction();
});

document.getElementById('decimal').addEventListener('click', function() {
    decimal();
});

document.getElementById('add').addEventListener('click', function() {
    addition();
});
document.getElementById('equals').addEventListener('click', function() {
    equals();
});

function multiplication(){
    if(textDisplay.textContent.length > 0 && canDoOperation)
    {
        leftSide = Number(textDisplay.textContent);
        textDisplay.textContent = '';
        operation = '*'
        canDoOperation = false;
        hasSelectedLeft = true;
    }
}

function division(){
    if(textDisplay.textContent.length > 0 && canDoOperation)
    {
        leftSide = Number(textDisplay.textContent);
        textDisplay.textContent = '';
        operation = '/'
        canDoOperation = false;
        hasSelectedLeft = true;
    }
}

function subtraction(){
    if(textDisplay.textContent.length > 0 && canDoOperation)
    {
        leftSide = Number(textDisplay.textContent);
        textDisplay.textContent = '';
        operation = '-'
        canDoOperation = false;
        hasSelectedLeft = true;
    }
}

function addition(){
    if(textDisplay.textContent.length > 0 && canDoOperation)
    {
        leftSide = Number(textDisplay.textContent);
        textDisplay.textContent = '';
        operation = '+'
        canDoOperation = false;
        hasSelectedLeft = true;
    }
    
}

function decimal(){
    if(!textDisplay.textContent.includes('.'))
    {
        textDisplay.textContent += '.';
    }
}

function clear(){
    textDisplay.textContent = '';1
    textDisplay.style.fontSize = '350%';
    fontSize = 350;
    canDoOperation = true;
}

function posNeg(){
    textDisplay.textContent = Number(textDisplay.textContent) *-1;
    decreaseFontSize();
}

function percentage(){
    textDisplay.textContent = Number(textDisplay.textContent) /100;
    decreaseFontSize();
}

function backspaceDisplay(){

    if(textDisplay.textContent != '')
    {
        console.log('here');
        textDisplay.textContent = textDisplay.textContent.slice(0,-1);11
    }
    
}



function equals(){
    if(hasSelectedLeft && textDisplay.textContent > 0)
    {
        if(operation == '/'){
            textDisplay.textContent = Number(leftSide) / Number(textDisplay.textContent);
            leftSide = textDisplay.textContent;
            canDoOperation = true;
        }
        else if(operation == '*')
        {
            textDisplay.textContent = Number(leftSide) * Number(textDisplay.textContent);
            leftSide = textDisplay.textContent;
            canDoOperation = true;
        }
        else if(operation == '-')
        {
            textDisplay.textContent = Number(leftSide) - Number(textDisplay.textContent);
            leftSide = textDisplay.textContent;
            canDoOperation = true;
        }
        else if(operation == '+')
        {
            textDisplay.textContent = Number(leftSide) + Number(textDisplay.textContent);
            leftSide = textDisplay.textContent;
            canDoOperation = true;
        }
        decreaseFontSize()
        operation = '';

    }
}
function decreaseFontSize(){
    fontSize = originalFontSize/Math.ceil(textDisplay.textContent.length/maxDisplayLength);
    textDisplay.style.fontSize = `${fontSize}%`;
}

