const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_b922qsk';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Gracias por escribirme, estare respondiendo a tu solicitud!');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});