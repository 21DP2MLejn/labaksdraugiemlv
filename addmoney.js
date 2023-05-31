var five_button = document.getElementById('five');
var ten_button = document.getElementById('ten');
var twenty_button = document.getElementById('twenty');
var fifty_button = document.getElementById('fifty');
var seventyfive_button = document.getElementById('seventy-five');
var hundred_button = document.getElementById('hundred');
var balance = document.getElementById('balance');
var cuhibits = 0;

five_button.addEventListener('click', addfive);
ten_button.addEventListener('click', addten);
twenty_button.addEventListener('click', addtwenty);
fifty_button.addEventListener('click', addfifty);
seventyfive_button.addEventListener('click', addseventyfive);
hundred_button.addEventListener('click', addhundred);

function addfive(){
    cuhibits = cuhibits + 5;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

function addten(){
    cuhibits = cuhibits + 10;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

function addtwenty(){
    cuhibits = cuhibits + 20;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

function addfifty(){
    cuhibits = cuhibits + 50;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

function addseventyfive(){
    cuhibits = cuhibits + 75;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

function addhundred(){
    cuhibits = cuhibits + 100;
    balance.textContent = 'Cuhibits: ' + cuhibits;

}

