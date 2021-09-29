function afficher(id_div) {
    $("#formation").show();
}
function cacher(id_div) {
    $("#formation").hide();
}

function validation() {
    var contenu_email = $("#mail").val();
    valider_email(contenu_email);
    
}
function valider_email(email) {
    //vérifier que l'email contient le caractère @
    //si ce n'est pas le cas afficher une alerte.
    const mail = $("#mail").val();
    const mail_identifier = '@';
    console.log(`Le mail_validity "${mail_identifier}" ${mail.includes(mail_identifier) ? 'est' : 'n\'est pas'} valide`);
    if (mail_identifier != mail.includes(mail_identifier)) {
        window.alert('Pb avec le mail');
    }
}

function validation_tel() {
    var contenu_tel = $("#tel").val();
    contenu_tel = contenu_tel.length;
    console.log(`Le tel_validity "${contenu_tel}" ${contenu_tel == 10 ? 'est' : 'n\'est pas'} valide`);
    if (contenu_tel < 10) {
        window.alert('Pb avec le tel');
    }
}
