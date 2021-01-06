/*selecionamos al que sera el padre del texto en el boton*/
var numbers = document.getElementById("box");

/*creamos texto dentro de boton desde 1 a 99*/
for (i = 0; i < 100; i++) {
    var span = document.createElement("span");
    span.textContent = i;
    numbers.appendChild(span);
    /*0*/
    /*01*/
    /*012*/
    /*.........*/
}

var num = numbers.getElementsByTagName("span");
var index = 0;

function nextNum() {
    /*oculta el anterior child*/
    num[index].style.display = "none";
    index = (index + 1) % num.length;
    /*visible el actual child*/
    num[index].style.display = "initial";
}

function prevNum() {
    /*oculta el actual child*/
    num[index].style.display = "none";
    index = (index - 1 + num.length) % num.length;
    /*visible el anterior child*/
    num[index].style.display = "initial";
}
