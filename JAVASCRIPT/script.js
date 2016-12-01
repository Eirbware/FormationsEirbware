//Ici votre script est exécuté !

//On déclare une variable avec "var"
/*var a = 5;
var b, c;
Console.log(a);*/


//Ranger dans b 5 et calculer le résultat de (a*b)/(a-b) dans c, puis l'afficher dans la console !
//c = ?;
//Console.log("b : " + b + " c : " + c);


//Une variable peut être tout et n'importe quoi (niveau type)
//a = "Salut !";
//et on peut connaitre son type avec typeof (qui renvoie une string)
//Console.log(typeof a);
// etc ...


//A l'aide de la fonction prompt(String message) : String answer, demander à l'utilisateur son nom ?
// ...
//Console.log(nom);


//Maintenant demandez lui son age, puis à l'aide de la fonction parseInt(String value) : int value, transformez la
//string recuperee en entier
/*var age;
Console.log(typeof age);*/


//Les conditions & boucles se gèrent de la même manière que dans beaucoup des autres langages de programmation
/*if(age > 18){
    alert("Vous êtes majeur !");
}else{
    alert("Vous êtes mineur !");
}*/

//Faites donc un for, puis un while qui affichent 5 fois une phrase de votre choix avec console.log() ! exactement
//comme en C ...


//Pour ce qui est des tableaux, là aussi ce n'est pas très compliqué ...
//Par exemple une string est un tableau !
/*var str = "Ceci est un tableau";
Console.log(str.length);*/
//Accessoirement on a plein de fonctions sympathiques de manipulation des données, comme par exemple :
/*Console.log(str.toUpperCase());*/
//On peut déclarer un tableau de deux façons :
/*var tableau = [];
tableau = new Array();
tableau = [1, 2, 3];
tableau = new Array(1, 2, 3);*/
//En vrai, personne n'utilise new array()
//Créez une string composée des noms de vos voisins (ou des noms random, on s'en fout), séparés par ':', comme par exemple :
//"Robert:Richard:André:Jean-michel"
//Utilisez sur cette string la fonction split() en lui donnant en argument le petit ':' qui sépare tous les noms. Que vous
//renvoie split ?

//On itère très simplement sur un tableau comme suivant :
/*var array = [1, 2, 3, 4, 5, 6];
for(var i = 0;i < array.length;i++){
    Console.log(array[i]);
}*/


//MAINTENANT LE GROS TRUC TROP BIEN (genre vraiment)
//En javascript on peut faire des objets un peu comme des maps : des associations clé => valeur, par exemple :
/*var moi = {
    prenom: "oublié",
    charisme: 0,
    taille: "pas grand (c'est relatif)",
    tailleVetements: 'S',
    humour: 0
};
Console.log(moi.prenom + " " + moi.taille);*/
//On peut ainsi simplement dans ces accolades { } déclarer des objets à la volée, quand on veut où on veut ...!


//Pour les fonctions, on les déclare avec le mot clé function, on précise dans les parenthèses les noms des arguments,
//puis si on veut retourner une valeur on utilise return puis la valeur. EH OUI, AUCUN TYPAGE, C'EST SAFE HEIN.
//Comme par exemple :
/*
function rien(untruc){
    if(untruc == "rien"){
        return "un truc dans rien";
    }else{
        return "rien dans un truc";
    }
}

Console.log(rien("rien"));
*/

//Maintenant créez une fonction qui suivant une personne en paramètre, qui est un objet (nom, age, taille), affiche
//ses caractéristiques à l'écran (alert()), et retourne un nouvel objet contenant son nom en majuscules et son age en string !
