function zerar() {
    document.getElementById('number').innerHTML = "0";
    if (document.getElementById('number').innerHTML == 0) {
        document.getElementById('number').style.color = "black";
    }
}

function somar () {
    var x = document.getElementById('number').innerHTML;
    var y = 1;
    document.getElementById('number').innerHTML = parseInt(x) + parseInt(y);
    if (document.getElementById('number').innerHTML > 0) {
        document.getElementById('number').style.color = "green";
    }
}

function diminuir () {
    var x = document.getElementById('number').innerHTML;
    var y = 1;
    document.getElementById('number').innerHTML = parseInt(x) - parseInt(y);
    if (document.getElementById('number').innerHTML < 0) {
        document.getElementById('number').style.color = "red";
    }
}

