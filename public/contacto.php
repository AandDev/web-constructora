<?php

    $destino = "andha032@gmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $header = "Enviado desde grupovidriero.com";
    $contenido = 
    "Nombre: ".$nombre .
    "\nEmail: ".$email .
    "\nTelefono: ".$telefono .
    "\nMensaje: ".$mensaje;

    mail($destino, $asunto, $contenido, $header);
    header("location:contacto.html");
?>