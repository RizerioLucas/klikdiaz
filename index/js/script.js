console.log("Script carregado");

function enviarEmail() {
    console.log("Função enviarEmail chamada");
    var emailContato = "luirizerio@gmail.com";
    var subject = "Contato pelo site";
    var userMessageElement = document.getElementById("userMessage");
    var body = userMessageElement ? userMessageElement.value : "Esta é uma mensagem de contato gerada pelo site.";
    var mailtoLink = `mailto:${emailContato}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mostrar o link no console para verificação
    console.log("Link do mailto:", mailtoLink);

    window.location.href = mailtoLink;
}


function sendWhatsAppMessage() {
    // Número de telefone no formato internacional sem o "+" (código do país + código da cidade + número)
    var phoneNumber = '5511999999999'; // Exemplo: +55 11 99999-9999
    var message = 'Olá, gostaria de mais informações!';

    // Codifica a mensagem para ser compatível com URL
    var encodedMessage = encodeURIComponent(message);

    // URL para enviar a mensagem via WhatsApp
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

    // Redireciona o usuário para a URL do WhatsApp
    window.open(whatsappURL, '_blank');
}