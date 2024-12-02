console.log("Script carregado");

function enviarEmail() {
    console.log("Função enviarEmail chamada");

    var emailContato = "diazsalmeida@hotmail.com";  // Email de destino
    var subject = "Contato pelo site";       // Assunto do email

    // Pega a mensagem que o usuário digitou
    var userMessageElement = document.getElementById("userMessage");
    var body = userMessageElement ? userMessageElement.value : "Esta é uma mensagem de contato gerada pelo site.";

    // Cria a URL para o Gmail
    var gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailContato)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Mostra o link no console para verificar
    console.log("Link do Gmail:", gmailURL);

    // Abre uma nova aba com o link do Gmail
    window.open(gmailURL, '_blank');
}

function sendWhatsAppMessage() {
    // Número de telefone no formato internacional sem o "+" (código do país + código da cidade + número)
    var phoneNumber = '5511958774472'; // Exemplo: +55 11 99999-9999
    var message = 'Olá, vim do site e gostaria de mais informações!';

    // Codifica a mensagem para ser compatível com URL
    var encodedMessage = encodeURIComponent(message);

    // URL para enviar a mensagem via WhatsApp
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

    // Redireciona o usuário para a URL do WhatsApp
    window.open(whatsappURL, '_blank');
}