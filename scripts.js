function showForm(formId) {
    const forms = document.querySelectorAll('.service-form');
    forms.forEach(form => form.style.display = 'none');

    document.getElementById(formId).style.display = 'block';
}

function sendMail(event, serviceType) {
    event.preventDefault();

    const form = event.target;
    const ansprechpartner = form.elements['ansprechpartner'].value;
    const email = form.elements['email'].value;
    const telefonnummer = form.elements['telefonnummer'].value;
    const produktnummer = form.elements['produktnummer'] ? form.elements['produktnummer'].value : '';
    const ersatzteilnummer = form.elements['ersatzteilnummer'] ? form.elements['ersatzteilnummer'].value : '';
    const beschreibung = form.elements['beschreibung'].value;

    const subject = `Neue ${serviceType}`;
    const body = `Ansprechpartner: ${ansprechpartner}\nE-Mail: ${email}\nTelefonnummer: ${telefonnummer}\nProduktnummer: ${produktnummer}\nErsatzteilnummer: ${ersatzteilnummer}\nBeschreibung: ${beschreibung}`;

    window.location.href = `mailto:dirk.schramm@igel-nobilis.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
