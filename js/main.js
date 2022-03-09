console.log('Hello');
console.error('World');
console.warn('!');

    let reponse = [];

const analyze = () => {
        console.log("Analyze");
        var textArea = document.getElementById('text').value;
        
        /* On ajoute les titres à chaque section résultat*/
        document.querySelector('#id_titre_texte').append("Texte");
        document.querySelector('#id_longueur').append("Longueur");
        document.querySelector('#id_nb_e').append("Nombre de e");
        document.querySelector('#id_nb_mot').append("Nombre de Mot");
        document.querySelector('#id_rep_lettre').append("Dénombrement alphabétique");

        /*On affiche le texte analysé*/
        let divResult = document.createElement('div');
        divResult.setAttribute('class','reponse');
        divResult.innerHTML = textArea;
        document.querySelector('#id_titre_texte').appendChild(divResult);


}



