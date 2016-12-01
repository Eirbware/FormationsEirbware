//Ici on va manipuler le DOM !
//C'EST QUOI LE DOM ? => Document Object Model
//En gros (et gras) on va modifier/mettre à jour les éléments de la page HTML
//=> c'est le côté web dynamique crée par javascript

//Le document HTML est modélisé par la variable document.
//La fenêtre en tant que telle l'est par la variable globale window
//On peut récupérer des éléments du DOM de plein de manières différentes :
var menu = document.getElementById("menu");
var lists = document.getElementsByTagName("ul");
var elements = document.getElementsByClassName("element");
//Mais on peut aussi rechercher des elements en faisant une requete comme en CSS !
elements = document.querySelector("#menu ul .element");     //Ne retourne que le premier trouvé
elements = document.querySelectorAll("#menu ul .element");  //Retourne un tableau contenant tous les elements trouvés
//Puis ensuite on peut récuperer tout plein d'informations ...
// menu.className, menu.classList, menu.hasAttribute(name), menu.classList.add('nouvelle class'), menu.classList.toggle('') ...
//Nous allons ajouter une balise <p> à la div d'ID "exemple"
/*var exemple = document.getElementById("exemple");
exemple.innerHTML += "<p> Je viens d'ajouter du texte directement dans le HTML de cette div !</p>";*/
//Avec innerHTML, on modifie directement le contenu "html" de l'élément
//innerText (et la version textContent) est exactement pareil (il n'est qu'en écriture) sauf qu'il renvoie le texte sans balisage


//Petit exercice : changez le contenu de la première et la dernière <li> de la liste "liste" (en ce que vous voulez). Pour accéder à ces éléments,
//chargez la liste et utilise les attributs firstChild et lastChild.



//Maintenant changez tous les <li> de la liste, en itérant sur le tableau obtenu avec l'attribut childNodes


//Une manière propre de créer tout ceci est de créer à la base un noeud, de le paramétrer puis de l'ajouter à qui l'on veut :
/*var newLi = document.createElement('li');
newLi.setAttribute('class', 'element'); //On peut modifier un attribut avec setAttribute(name, value)
newLi.id = "nouvelleLi"; //Ou simplement avec l'opérateur d'affectation
newLi.style.backgroundColor = "red"; //On peut même (et surtout lol) modifier les propriétés CSS !!
newLi.style.color = "green";
//Puis l'on crée son texte interne. On utilise createTextNode() qui crée un noeud purement textuel.
var text = document.createTextNode("Je suis une nouvelle Li !");
//Puis on l'ajoute à notre li
newLi.appendChild(text);
//Finalement on ajoute la li à notre liste
document.querySelector("#menu ul").appendChild(newLi);*/
//On peut ainsi accéder à tous les noeuds qui l'entourent : nextSibling, previousSibling pour les noeuds suivants et avant dans l'arborescence (frères),
//parentNode pour le noeud parent, et childNodes pour les noeuds enfants, firstChild, lastChild ...
//Par ailleurs, la fonction insertBefore(nodeAAjouter, nodeApres)

//Avec la méthode cloneNode(), dupliquez le dernier noeud de la liste que nous venons d'ajouter (celui un peu funky).
//Modifiez le comme vous voulez (non obligatoire), puis remplacez le premier noeud de la liste en question avec celui ci,
//a l'aide de la fonction [parent].replaceChild([le premier noeud], [votre noeud cloné])




//VOILA VOILA grosso merdo c'est l'ensemble des choses les plus importantes/intéressantes pour cette partie ...!
