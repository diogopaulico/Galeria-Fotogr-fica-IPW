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

function mensagem(){
    var from_name = document.getElementById("nome").value;
    var email_id = document.getElementById("mail").value;
    var message = document.getElementById("sugestao").value;
    if(from_name == "" || email_id == "" || message == ""){
        alert("Preencha os Campos");
        return;
    }
    var params = {
        'from_name': from_name,
        'email_id': email_id,
        'message': message,
    };

    if(email_id.indexOf('@') == -1){
        alert("Email invalido");
        return;
    }
    emailjs.send('service_xon81lf', 'template_tqdl9jl', params).then(function(res){
        console.log('E-mail enviado com sucesso:', res);
        alert("E-mail enviado com sucesso");
        limpar();
    }, function(error){
        console.log('Erro ao enviar e-mail:', error);
        alert("Erro ao enviar e-mail");
    });

}
function limpar(){
    document.getElementById("nome").value="";
    document.getElementById("mail").value="";
    document.getElementById("sugestao").value="";
}
