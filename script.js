function mostrar() {
    const campo = document.getElementById("senha");
    if (campo.type == "password") {
        campo.type = "text";

     } else {
        campo.type  ="password";
     }
    }
function submit() {
   const email = document.getElementById('email').value
   const senha = document.getElementById('senha').value

   alert('Email: ' + email + "\nsenha: " + senha)
}