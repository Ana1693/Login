document.getElementById("boton_registrarse").addEventListener("click",registro);
document.getElementById("boton_iniciar_sesion").addEventListener("click",iniciarSesion);
window.addEventListener("resize",anchopag);



//declarando variables
var contenedor_login_registrarse=document.querySelector(".contenedor_login_registrarse");
var formulario_login =document.querySelector(".formulario_login");
var formulario_registrarse =document.querySelector(".formulario_registrarse");
var caja_trasera_login =document.querySelector(".caja_trasera_login");
var caja_trasera_registrarse=document.querySelector(".caja_trasera_registrarse");


function anchopag(){
    if(window.innerWidth>850){
        caja_trasera_login.style.display="block";
        caja_trasera_registrarse.style.display="block";
        
    }else{
        caja_trasera_registrarse.style.display="block";
        caja_trasera_registrarse.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario_login.style.display="block";
        formulario_registrarse.style.display="none";
        contenedor_login_registrarse.style.left="0px";
    }
    
}

anchopag();
    




function registro(){
    
    if(window.innerWidth>850){
    
    formulario_registrarse.style.display="block";
    contenedor_login_registrarse.style.left="410px"; 
    formulario_login.style.display="none";
    caja_trasera_registrarse.style.opacity="0";
    caja_trasera_login.style.opacity="1";
}else{
    formulario_registrarse.style.display="block";
    contenedor_login_registrarse.style.left="0px"; 
    formulario_login.style.display="none";
    caja_trasera_registrarse.style.display="none";
    caja_trasera_login.style.display="block"; 
    caja_trasera_login.style.opacity="1";
}
}
function iniciarSesion(){
    
    if(window.innerWidth>850){
        
    formulario_registrarse.style.display="none";
    contenedor_login_registrarse.style.left="10px"; 
    formulario_login.style.display="block";
    caja_trasera_registrarse.style.opacity="1";
    caja_trasera_login.style.opacity="0";
    
    }else{
        
    formulario_registrarse.style.display="none";
    contenedor_login_registrarse.style.left="0px"; 
    formulario_login.style.display="block";
    caja_trasera_registrarse.style.display="block";
    caja_trasera_login.style.display="none";    
    }
}
    