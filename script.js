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
      if (email == '') {
      alert("você precisa digitar um email")
   }

   const senha = document.getElementById('senha').value
      if (senha == '') {
      alert("você precisa digitar uma senha")
   }
   else
      alert('Email: ' + email + "\nsenha: " + senha)
}

function recuperar() {
   const email = document.getElementById('email_recuperacao').value
   if (email == '') {
      alert("você precisa digitar um email")
   }
   else 
       alert('email enviado para: ' + email)
}

function inicio() {
   window.location.href = "login.html";
}