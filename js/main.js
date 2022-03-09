console.log('Hello');
console.error('World');
console.warn('!');

    let reponse = [];
    let init = 0;
    let divResult = document.createElement('div');
    var input = document.getElementById('zone_result');
    var cpt = 0;
    
    let lettre = [];
    let nbLettre = []; 

/*input.addEventListener('keyup',function(e)){
});*/

const analyze = () => {
            console.log("Analyze");
            var textArea = document.getElementById('text').value;
        
        /* On ajoute les titres à chaque section résultat*/
        if(init === 0)
        {
            document.querySelector('#id_titre_texte').append("Texte");
            document.querySelector('#id_longueur').append("Longueur");
            document.querySelector('#id_nb_e').append("Nombre de e");
            document.querySelector('#id_nb_mot').append("Nombre de Mot");
            document.querySelector('#id_rep_lettre').append("Dénombrement alphabétique");
            init ++;
        }

        /*On affiche le texte analysé*/
        divResult.setAttribute('class','reponse');
        divResult.innerHTML = textArea;
        document.querySelector('#id_titre_texte').appendChild(divResult);

        divResult.innerHTML = textArea.length;
        document.querySelector('#id_longueur').appendChild(divResult);

        for(var i=0; i<textArea.length;i++)
        {
            if(textArea.charAt(i) == 'e')
            {
                cpt++
            }
        }
        
        divResult.innerHTML = cpt;
        document.querySelector('#id_nb_e').appendChild(divResult);
        cpt = 0

        var nbMot = 0

        for(var i=0; i<textArea.length;i++)
        {
            if(textArea.charAt(i) == ' ')
            {
                nbMot++
            }
        }
        
        divResult.innerHTML = nbMot;
        document.querySelector('#id_nb_mot').append(divResult);
        nbMot = 0

        for(var i=0; i<textArea.length;i++)
        {
            if(((textArea.charCodeAt(i) > 64 && textArea.charCodeAt(i) < 91) || (textArea.charCodeAt(i) > 96 && textArea.charCodeAt(i) < 123))
            && isLettre(textArea.charCodeAt(i)))
            {
                lettre += textArea.charCodeAt(i);
                    
                for(var j=textArea.length; i<textArea.length;i++)
                {
                    cpt++;
                }
                nbLettre += cpt;
            }
        }
        
        divResult.innerHTML = nbMot;
        document.querySelector('#id_nb_mot').append(divResult);
        nbMot = 0
}


fonction isLettre(newLettre)
{
    var lettrePresente = false;
    /*for (i in lettre) {
        if (lettre.charCodeAt(i) == newLettre)
                lettrePresente = true;
    }
    
    
    */
    if (!(newLettre in lettre))
        lettrePresente = true;
    console.log(lettrePresente);
    return lettrePresente;
}


