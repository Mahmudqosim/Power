
console.log('I Love Javascript');

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById('power').style.display = 'none';
    document.getElementById("myDiv").style.display = "block";
}

var displayText = document.getElementById('showResult');

const power = (base, exponent = 2) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

check = (x) => {
    if (x == 0) {
        x = 2;
    } else {
        return x;
    }
}


solve = () => {
    var b = document.getElementById('xvalue').value;
    var expo = document.getElementById('yvalue').value;
    var expo = check(expo);
    // alert(power(b, expo)); 
    document.getElementById('showResult').innerHTML = 'Anwser = ' + power(b, expo);
    document.getElementById('displayList').innerHTML += b + "^" + expo + " = " + power(b, expo) + '<br/>';
}

clearCalcs = () => {
    document.getElementById('displayList').innerHTML = "";
}

