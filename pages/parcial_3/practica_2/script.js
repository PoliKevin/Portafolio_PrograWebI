function leer() 
{
    // Referencia: Pseudoclases
    let nombre = document.forms["formulario"].elements[0].value;

    // Referencia: Id
    let pass = document.getElementById("password").value;

    // Referencia: Tag Name
    let carrera = document.getElementsByTagName("select")[0].value;

    // Referencia: Nombre
    let sexo = document.getElementsByName("genero");
    for (i = 0; i < sexo.length; i++) {
        if (sexo[i].checked)
            sexoValor = sexo[i].value;
    }

    let check = document.getElementById("privacidad").checked;
    if (check)
        checkActivo = "Aceptaste";
    else
        checkActivo = "No aceptaste";

    document.getElementById("datos").innerHTML = "Nombre: " + nombre + "\<br>Contraseña: " + pass + "\<br>Tú carrera: " + carrera + "\<br>Tú género: " + sexoValor + "\<br>Términos y condiciones: " + checkActivo;
}