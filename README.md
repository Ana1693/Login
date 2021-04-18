# Login
my hobbie
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login  </title>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <main>
            <div class="contenedor_todo">
                <div class="caja_trasera">
                
                <div class="caja_trasera_login">
                    <h3>Ya tienes cuenta</h3>
                    <p>incia sesion para entrar a la pagina  </p>
                    <button id="boton_iniciar_sesion">Iniciar Sesion</button>
                </div>
                <div class="caja_trasera_registrarse">
                    <h3>¿Aun no tienes una cuenta?</h3>
                    <p>Registrate para que puedas iniciar sesion</p>
                    <button id="boton_registrarse">Registrate</button>
                </div>
                   </div>
                   <%--Formulario de Login y Registro ----%>
                <div class="contenedor_login_registrarse">
    
    <%--- Login--%>
                    <form action="" class="formulario_login" >
                        <h2>Iniciar sesion</h2>
                        <input type="text" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <button>Entrar</button>
                    </form>
                    <%-- Registro---%>
               
                <form action="" class="formulario_registrarse">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre completo" >
                    <input type="text" placeholder="Correo electronico">
                    <input type="text" placeholder="Usuario">
                    <input type="text" Placeholder="Contraseña"> 
                    <button>Registrarse</button>
                </form>
            </div>

        </main>
                    
      <script src="js/script.js" type="text/javascript"></script>
    </body>
</html>
