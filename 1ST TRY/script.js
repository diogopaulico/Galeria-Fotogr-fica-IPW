function mensagem(){
    let nome= document.getElementById("nome").value;
    let mail= document.getElementById("mail").value;
    let sugestao= document.getElementById("sugestao").value;
    if(nome=="" || mail=="" || sugestao==""){
        alert("Preencha os Campos");
    }
    else if(mail.indexOf('@') == -1){
        alert("Email Inválido");
    }
    else{
        alert("Obrigado "+nome+"! Em breve entraremos em contato com você pelo e-mail "+mail);
    }
}
function limpar(){
    document.getElementById("nome").value="";
    document.getElementById("mail").value="";
    document.getElementById("sugestao").value="";
}
// Codigo para o evento click ser usando e mostrar a imagem respetiva em fullscreen
function mostrarLightbox(event) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = event.target.src;
    lightbox.style.display = 'flex';
}
function esconderLightbox() {
    let lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
// Codigo para adicionar o evento de click em todas as imagens
let imagens = document.querySelectorAll('img');
imagens.forEach(img => img.addEventListener('click', mostrarLightbox));
