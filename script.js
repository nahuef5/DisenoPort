//Funcion que muestra el menu responsivo

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){x.className = "responsive";}
    else{x.className = ""}
}

//funcion que aplica el estilo a la opcion seleccionada
//en el menu y quita la previamente seleccionada
function seleccionar(link){
//dentro de nav ul id="links"
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className= "seleccionado";
//hacemos desaparecer el menu una vez que se ha sellecionado
//una opcion en el modo responsive

let x=document.getElementById("nav");
x.className="";

}

//detector de scroll para aplicar la animacion de la barra de skills

window.onscroll= function(){ efectoSkills()};

//funcion que aplica la anumacion de la barra habiidades

function efectoSkills(){
    let skills= document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills>=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("java").classList.add("barra-progreso4");
    }
}














