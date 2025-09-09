function mostrar() {
    const campo = document.getElementById("senha");
    if (campo.type == "password") {
        campo.type = "text";

     } else {
        campo.type  ="password";
     }
    }

function inicio() {
   window.location.href = "login.html";
}