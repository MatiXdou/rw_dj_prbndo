$(document).ready(function() {
    var email;
    var formato;
    var dns;
    $("#email").blur(function(){
        email = $("#email").val();
        if(email.length > 0){
            $.get("https://www.disify.com/api/email/" + email,
                function(data){
                    formato = data.format;
                    dns = data.dns;
                    if(formato==true){
                        if (dns==true) {
                            $("#error3").html("");
                            console.log('email validado correctamente.')
                        } else {
                            $("#error3").html('<p>El email no tiene un dominio valido.</p>');
                            $("#email").focus();
                            return;
                        }
                    } else {
                        $("#error3").html('<p>El email no tiene un formato valido.</p>');
                            $("#email").focus();
                            return;
                    }
                    
                });
        } else{
            $("#error3").html('<p>Debe rellenar este campo.</p>');
            $("#email").focus();
            return;
        }
        

    })

    $("#formulario-contacto").submit(function(event) {
        /*declarar variables*/
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        email = $("#email").val();
        var motivoContacto = $("#motivo-contacto").val();
        var whyContacto = $("#why-contacto").val();

        /*Validaciones*/
        if (nombre.length >=3 && nombre.length <= 20) {
            event.preventDefault();
            $("#error1").html("");
            console.log('nombre validado correctamente.')
        } else {
            event.preventDefault();
            $("#error1").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
            $("#nombre").focus();
            return;
        }


        if (apellido.length >=3 && apellido.length <= 20) {
            event.preventDefault();
            $("#error2").html("");
            console.log('apellido validado correctamente.')
        } else {
            event.preventDefault();
            $("#error2").html("<p>El apellido debe tener entre 3 y 20 caracteres.</p>");
            $("#apellido").focus();
            return;
        }
    


        /*
        if (dominio=="gmail.com") {
            event.preventDefault();
            $("#error3").html("");
            console.log('email validado correctamente.')
        } else {
            event.preventDefault();
            $("#error3").html('<p>El email debe tener el dominio: "@gmail.com".</p>');
            $("#email").focus();
            dominio="";
            return;
        }
        */



        if (motivoContacto!="defoption") {
            event.preventDefault();
            $("#error4").html("");
            console.log('Motivo validado correctamente.')
        } else {
            event.preventDefault();
            $("#error4").html("<p>Debe seleccionar un motivo.</p>");
            $("#motivo-contacto").focus();
            return;
        }


        if (whyContacto.length >=10 && whyContacto.length <= 200) {
            event.preventDefault();
            $("#error5").html("");
            console.log('Mensaje contacto validado correctamente.')
        } else {
            event.preventDefault();
            $("#error5").html("<p>El mensaje debe contener entre 10 y 200 caracteres.</p>");
            $("#why-contacto").focus();
            return;
        }

        
        alert("¡Se ha enviado tu mensaje correctamente!");
        $("#nombre").val("");
        $("#apellido").val("");
        $("#email").val("");
        $("#motivo-contacto").val("");
        $("#why-contacto").val("");



    });


$("#formulario-suscripcion").submit(function(event) {
    /*declarar variables*/
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var edad = $("#edad").val();
    var genero = $("#genero").val();


    /*Validaciones*/
    if (nombre.length >=3 && nombre.length <= 20) {
        event.preventDefault();
        $("#error1").html("");
        console.log('Nombre validado correctamente.')
    } else {
        event.preventDefault();
        $("#error1").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
        $("#nombre").focus();
        return;
    }


    if (edad >= 18) {
        event.preventDefault();
        $("#error2").html("");
        console.log('Edad validada correctamente.')
    } else {
        event.preventDefault();
        $("#error2").html("<p>La edad debe ser mayor o igual a 18.</p>");
        $("#edad").focus();
        return;
    }


    if (genero!="defoption") {
        event.preventDefault();
        $("#error4").html("");
        console.log('Genero validado correctamente.')
    } else {
        event.preventDefault();
        $("#error4").html("<p>Debe seleccionar un genero.</p>");
        $("#genero").focus();
        return;
    }


    
    alert("¡Usted se ha suscrito exitosamente.!");
    $("#nombre").val("");
    $("#email").val("");
    $("#edad").val("");
    $("#genero").val("");



});
    });




    