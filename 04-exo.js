var phrase = "je découvre typescript et la transpilation en javascript";
var tableau = phrase.split(" ");
var resultat = [];
for (var i = 0; i < 4; i++) {
    resultat.push(tableau[i]);
}
console.log(resultat.join(" "));
function decouperPhrase(phrase, nbMot) {
    var tableau = phrase.split(" ");
    var resultat = [];
    for (var i = 0; i < nbMot; i++) {
        resultat.push(tableau[i]);
    }
    return resultat.join(" ");
}
var boutPhrase = decouperPhrase(phrase, 3);
console.log(boutPhrase);