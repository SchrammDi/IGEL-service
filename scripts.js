function showForm(formId) {
    document.getElementById('overview').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
    const forms = document.querySelectorAll('.service-form');
    forms.forEach(form => {
        form.style.display = form.id === formId ? 'block' : 'none';
    });
}

function showOverview() {
    document.getElementById('overview').style.display = 'block';
    document.getElementById('form-container').style.display = 'none';
}

function sendMail(event, serviceType) {
    event.preventDefault();

    const form = event.target;
    const ansprechpartner = form.elements['ansprechpartner'].value;
    const email = form.elements['email'].value;
    const telefonnummer = form.elements['telefonnummer'].value;
    const produktnummer = form.elements['produktnummer'] ? form.elements['produktnummer'].value : '';
    const ersatzteilnummer = form.elements['ersatzteilnummer'] ? form.elements['ersatzteilnummer'].value : '';
    const beschreibung = form.elements['beschreibung'] ? form.elements['beschreibung'].value : '';
    const foto = form.elements['foto'].files[0];

    const subject = `Neue ${serviceType}`;
    let body = `Ansprechpartner: ${ansprechpartner}\nE-Mail: ${email}\nTelefonnummer: ${telefonnummer}\nProduktnummer: ${produktnummer}\nErsatzteilnummer: ${ersatzteilnummer}\nBeschreibung: ${beschreibung}`;

    const mailtoLink = `mailto:dirk.schramm@igel-nobilis.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (foto) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Data = e.target.result.split(',')[1];
            body += `\n\nFoto des Typenschildes: ${base64Data}`;
            const updatedMailtoLink = `mailto:dirk.schramm@igel-nobilis.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = updatedMailtoLink;
        };
        reader.readAsDataURL(foto);
    } else {
        window.location.href = mailtoLink;
    }
}
