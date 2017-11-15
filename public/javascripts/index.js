function uradiNesto() {
    window.location.href = './test';
    $('#testnitag').toggle('slow');
}

function uradiNestoSaServerom() {
    alert("Saljem zahtjev serveru!");

    $.ajax({
        url: "/evoZahtjev",
        data: {ime: "Sead"},
        type: 'GET'
    }).done(function(data) {
       alert("Dosao odgovor: " + data.status + " i ime koje mi je vratio: " + data.evoTiIme);
    });

}