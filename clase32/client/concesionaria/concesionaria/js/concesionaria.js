let btnCrearAuto = document.querySelector("#crearAuto");
btnCrearAuto.addEventListener("click", crearAuto);

let btnCrearCamioneta = document.querySelector("#crearCamioneta");
btnCrearCamioneta.addEventListener("click", crearCamioneta);

let btnLimpiarTabla = document.querySelector("#limpiarTabla");
btnLimpiarTabla.addEventListener("click", limpiarTabla);

let btnFiltrarCamionetas = document.querySelector("#filtrarCamionetas");
btnFiltrarCamionetas.addEventListener("click", filtrarCamionetas);

let btnFiltrarAutos = document.querySelector("#filtrarAutos");
btnFiltrarAutos.addEventListener("click", filtrarAutos);

let btnVerTodo = document.querySelector("#verTodo");
btnVerTodo.addEventListener("click", mostrarRegistro);



let vehiculos = [];

async function crearAuto() {
    let marca = document.querySelector('#marca').value;
    let patente = document.querySelector('#patente').value;
    let modelo = document.querySelector('#modelo').value;
    let anio = parseInt(document.querySelector('#anio').value);
    let precio = parseInt(document.querySelector('#precio').value);
    let capBaul = parseInt(document.querySelector('#capBaul').value);
    let vehiculo = {
        "tipo": "auto",
        "marca": marca,
        "patente": patente,
        "modelo": modelo,
        "anio": anio,
        "precio": precio,
        "capacidad": capBaul,
    };
    let resp = await fetch('/concesionaria', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(vehiculo)
    })
    if (resp.ok) {
        vehiculos.push(vehiculo);
        mostrarRegistro();
    } else {
        console.log("fallo el post");
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "<h1> Fallo Post </h1>";
    }



}

async function crearCamioneta() {
    let marca = document.querySelector('#marca').value;
    let patente = document.querySelector('#patente').value;
    let modelo = document.querySelector('#modelo').value;
    let anio = parseInt(document.querySelector('#anio').value);
    let precio = parseInt(document.querySelector('#precio').value);
    let capCaja = parseInt(document.querySelector('#capCaja').value);
    let vehiculo = {
        "tipo": "camioneta",
        "marca": marca,
        "patente": patente,
        "modelo": modelo,
        "anio": anio,
        "precio": precio,
        "capacidad": capCaja
    };
    let resp = await fetch('/concesionaria', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(vehiculo)
    })
    if (resp.ok) {
        vehiculos.push(vehiculo);
        mostrarRegistro();
    } else {
        console.log("fallo el post");
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "<h1> Fallo Post </h1>";
    }
}


function mostrarRegistro() {

    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        html += `
               <tr>
                   <td>${(vehiculos[i].tipo).toUpperCase()}</td>
                   <td>${(vehiculos[i].marca).toUpperCase()}</td>
                   <td>${(vehiculos[i].patente).toUpperCase()}</td>
                   <td>${(vehiculos[i].modelo).toUpperCase()}</td>
                   <td>${vehiculos[i].anio}</td>
                   <td>${vehiculos[i].precio}</td>
                   <td>${vehiculos[i].capacidad}</td>
              </tr>
           `;
    }

    document.querySelector("#lista").innerHTML = html;
    console.log(vehiculos);
}

function limpiarTabla() {
    document.querySelector("#lista").innerHTML = "";
}


async function load() {
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1> ...LOADING... </h1>";
    try {
        let response = await fetch('/concesionaria');
        if (response.ok) {
            let t = await response.json();
            vehiculos = t; //reemplazo arreglo global de vehiculos por el que viene de la api 
            mostrarRegistro(); //muestro los vehiculos
            container.innerHTML = ""; //lo dejo vacio, sin mensaje
        }
        else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
}


function filtrarCamionetas(){
    limpiarTabla(); //limpio tabla inicial
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        if(vehiculos[i].tipo == "camioneta"){
            html += `
               <tr>
                   <td>${(vehiculos[i].tipo).toUpperCase()}</td>
                   <td>${(vehiculos[i].marca).toUpperCase()}</td>
                   <td>${(vehiculos[i].patente).toUpperCase()}</td>
                   <td>${(vehiculos[i].modelo).toUpperCase()}</td>
                   <td>${vehiculos[i].anio}</td>
                   <td>${vehiculos[i].precio}</td>
                   <td>${vehiculos[i].capacidad}</td>
              </tr>
           `;
        }
    }
    document.querySelector("#lista").innerHTML = html;



}

function filtrarAutos(){
    limpiarTabla(); //limpio tabla inicial
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        if(vehiculos[i].tipo == "auto"){
            html += `
               <tr>
                   <td>${(vehiculos[i].tipo).toUpperCase()}</td>
                   <td>${(vehiculos[i].marca).toUpperCase()}</td>
                   <td>${(vehiculos[i].patente).toUpperCase()}</td>
                   <td>${(vehiculos[i].modelo).toUpperCase()}</td>
                   <td>${vehiculos[i].anio}</td>
                   <td>${vehiculos[i].precio}</td>
                   <td>${vehiculos[i].capacidad}</td>
              </tr>
           `;
        }
    }
    document.querySelector("#lista").innerHTML = html;
}


load();