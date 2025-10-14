function mostrar() {
    const campo = document.getElementById("senha");
    if (campo.type == "password") {
        campo.type = "text";

     } else {
        campo.type  ="password";
     }
    }

function inicio() {
   window.location.href = "index.html";
}

function tela() {
   window.location.href = "inicio.html";
   
}

function perfil() {
   window.location.href = 'perfil.html'
}

function carrinho(){
   window.location.href = 'carrinho.html'
}