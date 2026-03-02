// animatioin.js
const caracters = 200; // type =.


/**
 * cont and final 
 * 
 *   types => char, var, int , string ist [] list sort operation 
 */
const Symbols = ['+', '-', '*', '/', '=', '<', '>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','+', '-', '*', '/', '=', '<', '>','+', '-', '*', '/', '=', '<', '>','+', '-', '*', '/', '=', '<', '>','!','@','#','$','%','^','&','!','@','#','$','%','^','&','!','@','#','$','%','^','&',];
for(let i=0; i<caracters; i++){
    const span = document.createElement('span');
    span.innerText = Symbols[Math.floor(Math.random() * Symbols.length)];
    span.style.position = 'absolute';
    span.style.top = '-10vh';
    span.style.overflow = 'hidden';
    span.style.zIndex = '1';
    span.style.margin = '0';
    span.style.padding = '0';
    span.style.widows = '100%';  
    span.style.left = Math.random() * 100 + 'vw';
    span.style.fontSize = (Math.random() * 20 + 10) + 'px';
    span.style.color = '#374151'; 
    span.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    span.style.animationDelay = (Math.random() * 5) + 's';
    document.body.appendChild(span);
 }

