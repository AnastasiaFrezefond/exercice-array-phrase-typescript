// créer une variable phrase : 
// Je découvre typescript et la transpilation en JS 

// créer un fichier tsconfig.json > tsc --init 

// Créer une fonction qui va permettre de retourner les 4 premiers mots de la phrase 
// et les afficher dans la console 

const phrase = "je découvre typescript et la transpilation en javascript";

// RAPPEL Méthode : Array. split()
// La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur 
// pour fournir un tableau de sous-chaînes.

const tableau =  phrase.split(" ");

//console.log(tableau);
const resultat = [];
// afficher uniquement les 4 premiers mots de la phrase
for(let i = 0 ; i < 4 ; i++){
    resultat.push(tableau[i]);
}

// RAPPEL Méthode : Array. join() >> Convertit un tableau en chaîne de caractères composée de tous les éléments du tableau 
// séparés par la chaîne sep. L'opération inverse qui consiste à transformer une chaîne en tableau est réalisée avec split() 
// sur la chaîne de caractères.

console.log(resultat.join(" "));
// tsc 04-exo.ts && node 04-exo.js

function decouperPhrase(phrase , nbMot){
    const tableau =  phrase.split(" ");
    const resultat = [];
    // afficher uniquement les 4 premiers mots de la phrase
    for(let i = 0 ; i < nbMot ; i++){
        resultat.push(tableau[i]);
    }
    return resultat.join(" ");
}
const boutPhrase = decouperPhrase(phrase , 3);

console.log(boutPhrase);


// Traduire votre fichier typescript en version 3 de JS 
// tsc --target es3 04-exo.ts 

// Traduire votre fichier typescript en version 6 de JS 
// tsc --target es6 04-exo.ts 