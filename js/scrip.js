let menu=document.querySelector('#menunormal');
let menu_bar=document.querySelector('#menuresponsive')


menu_bar.addEventListener('click', function(){

    menu.classList.toggle('ul-toggle');

})

const contenedor=document.querySelector(".container");

function crearllave(nombre,modelo,precio){
    img="<img src='llave.png'>"
    nombre=<h2>${nombre}</h2>
    modelo=<h3>${modelo}</h3>
    precio=<p><b>${precio}</b></p>
    return [img,nombre,modelo,precio]
}

const llave = crearllave("llave1","mode loX","33");
document.write(llave[0].llave[1],llave[2])

contenedor.innerHTML=llave[0]+llave[1]+llave[2];