function saludo() {
    alert("Bienvenido a mi website con Bootstrap y Js");
}
function suma() {


    alert("Algoritmo que sumara los valoes");
    // Declaramos la variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    // Solicitamos los valores 
    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo vvalor a sumar"));
    //  Realizamos los procesos 
    S = A + B;
    // Mostramos el resultado en pantalla
    alert("El resultado de la suma es:" + S);

}

function operaciones() {
    alert("Algoritmo que seumara,restara,multiplicara y dividira 2 valores ingresados");


    let A = 0;
    let B = 0;
    let C = 0;

    A = parseFloat(prompt("Ingrese el digito"))
    B = parseFloat(prompt("Ingrese otro digito"))

    C = A + B;
    C = A - B;
    C = A * B;
    C = A / B;

    alert("El resuñtado sera:" + C);
}

function mayor() {

    alert("Algoritmo que determinara el numero mayor de los ingresados");


    let n1 = 0;
    let n2 = 0;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));

    if (n1 == n2) {
        alert("Los valores son iguales");
    }

    else if (n1>n2) {
        alert("El numero mayor es:" + n1);
    }
    else{
        alert(" El numero mayor es:" + n2);
    }
}


function menor() {

    alert("Algoritmo que determinara el numero menor de los ingresados");


    let n1 = 0;
    let n2 = 0;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));

    if (n1 == n2) {
        alert("Los valores son iguales");
    }

    else if (n1<n2) {
        alert("El numero mayor es:" + n1);
    }
    else{
        alert(" El numero mayor es:" + n2);
    }
}

// el colegio abc quiere un algoritmo de un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 calificaciones y este le indique si aprobo o reprobo la materia 
// teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6



function promedio() {

    let estudiantes = 0;
    let materia = 0;
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;
    let x5 = 0;
    let x6 = 0;
    let x7 = 0;
    let x = 0;
    let y = 0;

    estudiantes = parseInt(prompt("Ingrese el nombre del alumno"));
    materia = parseInt(prompt("Digite la materia "));
    x1 = parseInt(prompt("digite la primera nota"));
    x2 = parseInt(prompt("digite la segunda nota"));
    x3 = parseInt(prompt("digite la tercera nota"));
    x4 = parseInt(prompt("digite la cuarta nota"));
    x5 = parseInt(prompt("digite la quinta nota"));
    x6 = parseInt(prompt("digite la sexta nota"));
    x7 = parseInt(prompt("digite la septima nota"));

    x = x1 + x2 + x3 + x4 + x5 + x6 + x7;
    
    y = x/7;

    alert("El resultado toda es:" + x);

    

}



function circulo() {

    // capturamos en una constante el elemento html que deseamos manipular
    const figura = document.getElementById("figura");
    figura.classList.add("circulo");
    
}

function movetop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
    
}

function panellateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
    
}

function gif(){

    
    const figura = document.getElementById("figura");

    figura.classList.toggle("gif");

    
}


function bottom() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("bottom");
    
}

function left() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");
    
}

function rhigt() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("rhigt");
    
}

function horizontal() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("horizontal");
    
}

function vertical() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("vertical");
    
}

function degradado() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("degradado");
    
}

function rombo() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
    
}

function triangulo() {

    const figura = document.querySelector("#figura");
    figura.classList.toggle("triangulo");
    
}


function panelsuperior() {
    const panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");
    
}



// se requiere un sistema o algoritmo que en dolares nos indique a cuantos pesos colombianos equivale, euros, soles
// Un individuo desea invertir su capital en un banco y desea sabe cuanto ganara despues en el numero de años teniendo en cuenta que el banco paga un interes del 1.3 porciento mensual 
