const Username = document.getElementById("Username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const mdp2 = document.getElementById("mdp2");

let erreur;

form.addEventListener('submit', e => {
    e.preventDefault();

    if(!Username.value){
        erreur = "Veuillez entrer votre nom d'utilisateur"
    }

    if(!age.value){
        erreur = "Veuillez entrer votre age"
    }

    if(!email.value){
        erreur = "Veuillez entrer votre email"
    }

    if(!mdp.value){
        erreur = "Veuillez entrer votre mot de passe"
    }

})