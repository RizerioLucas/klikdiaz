console.log("Script carregado");

function enviarEmail() {
    console.log("Função enviarEmail chamada");
    var emailContato = "-----@gmail.com";
    var subject = "Contato pelo site";
    var body = document.getElementById("userMessage").value || "Esta é uma mensagem de contato gerada pelo site.";
    var mailtoLink = `mailto:${emailContato}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mostrar o link no console para verificação
    console.log("Link do mailto:", mailtoLink);

    window.location.href = mailtoLink;
}
