
let btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", agregar);

let btnAutorConMasDocs = document.querySelector("#autorMasDoc");
btnAutorConMasDocs.addEventListener("click", getAutor);

let btnTituloMasModerno = document.querySelector("#tituloModerno");
btnTituloMasModerno.addEventListener("click", getTituloModerno);


let btnTituloMasAntiguo = document.querySelector("#tituloAntiguo");
btnTituloMasAntiguo.addEventListener("click", getTituloAntiguo);

let btnLimpiar = document.querySelector("#btnLimpiar");
btnLimpiar.addEventListener("click", limpiarTabla);


let listaDocs = [];


function agregar() {
    console.log("Funcion Agregar");
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let tema = document.querySelector('#tema').value;
    let fecha = document.querySelector('#fecha').value;
    let doc = {
        "titulo": titulo,
        "autor": autor,
        "tema": tema,
        "fecha": fecha,
    };
    listaDocs.push(doc);
    mostrarLista();

}

function mostrarLista() {

    html = "";
    for (let i = 0; i < listaDocs.length; i++) {
        html += `
               <tr>
                   <td>${listaDocs[i].titulo}</td>
                   <td>${listaDocs[i].autor}</td>
                   <td>${listaDocs[i].tema}</td>
                   <td>${listaDocs[i].fecha}</td>
                   </tr>
           `;
    }

    document.querySelector("#tablaLista").innerHTML = html;
}

function getAutor() {
    document.querySelector("#Resultado").innerHTML = getAutorConMasDocumentos();
    
}

function getTituloModerno(){
    document.querySelector("#Resultado").innerHTML = getTituloMasModerno();
}

function getTituloAntiguo(){
    document.querySelector("#Resultado").innerHTML = getTituloMasAntiguo();
}


function limpiarTabla() {
    document.querySelector("#tablaLista").innerHTML = "";
}

function getAutorConMasDocumentos(){
    let contadorAutores=[]; 
    for (let a of listaDocs){
        let estaAutor = false;
        for (let b of contadorAutores){
            if (a.autor == b.autor){
                b.cantidad++;
                estaAutor = true;
            }
        }
        if (estaAutor == false){
            let registroAutor= {
                "autor": a.autor,
                "cantidad":1,
            };
            contadorAutores.push(registroAutor);
        }
    }
    let autor = {
        "autor":"",
        "cantidad": 0,
    };
    for (let c of contadorAutores){
        if (c.cantidad > autor.cantidad){
            autor = c;
        }
    }
    return autor.autor;
}

function getTituloMasModerno(){
    
    let tituloMasModerno = listaDocs[0];
    for (let i=1; i<listaDocs.length;i++){
        if (listaDocs[i].fecha > tituloMasModerno.fecha){
               tituloMasModerno = listaDocs[i];
            }
        
    }
    return tituloMasModerno.titulo;
}


function getTituloMasAntiguo(){
    
    let tituloMasAntiguo = listaDocs[0];
    for (let i=1; i<listaDocs.length;i++){
        if (listaDocs[i].fecha < tituloMasAntiguo.fecha){
               tituloMasAntiguo = listaDocs[i];
            }
        
    }
    return tituloMasAntiguo.titulo;
}


