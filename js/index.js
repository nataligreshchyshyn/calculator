const display = document.querySelector('.display');

const main = document.querySelector('body');
for (let i = 0; i < 10; i++) {
    const numBtn = document.createElement('button');
    numBtn.textContent = i;
    main.appendChild(numBtn);
    numBtn.addEventListener('click', function() {
    display.value += event.target.innerText;
});
}

document.querySelectorAll('.operation')
    .forEach( el => el.addEventListener('click', function() {
    display.value += event.target.innerText;
}));
    
document.querySelector('.exp').addEventListener('click', function() {
    display.value = Math.pow(display.value, 2);
});

document.querySelector('.sqroot').addEventListener('click', function() {
    display.value = Math.sqrt(display.value);
});

document.querySelector('.percent').addEventListener('click', function() {
    display.value = display.value/100;
});

document.querySelector('.clean').addEventListener('click', function() {
    display.value = '';
})

document.querySelector('.calc').addEventListener('click', function() {
    display.value = eval(display.value);
});



    