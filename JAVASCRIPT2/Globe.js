/*
    En javascript on peut définir des "classes" (des grosses structures) de manière assez dégueu.
    Depuis ECMAScript6 on peut les définir plus proprement via le mot-clé "class", cependant leur implémentation
    reste encore assez légère...

 */

//Une classe est donc une grosse "fonction" qui dispose d'un contexte plus développé.
//On peut définir une classe de plein de manières différentes...
//Ici nous décrivons la classe par son constructeur
//On aurait aussi pu faire : (non obligation de préciser le var)
//  function Globe(div, size, x, y, color, newGlobeName){ }
var Globe = function(div, size, x, y, color) {
    //Ici on fait l'initialisation en utilisant le mot-clé this, qui est supposé qualifier
    //le contenu du contexte actuel, à savoir la fonction que nous utilisons...
    // Comme suivant ... : this.div = div

    //Petite digression ici, on veut pouvoir gérer le fait que le paramètre div puisse être juste un string
    //et non un DOMElement ... Faites le ! (un peu plus tard pitetre)

    //Continuons ...
    //On crée un attribue div qui caractérise l'objet, et qui contient notre div du document...
    this.div = div;
    //Pour pouvoir récupérer l'instance de Globe associée à une div, on ajoute un attribut
    // "object" à cette div, qui a pour valeur l'instance de Globe
    this.div.object = this;

    //N'oublions pas que nous voulons faire bouger nos petits "globes"
    //Nous utilisons donc deux attributs pour pouvoir tracer leurs positions
    this.posX = 0;
    this.posY = 0;


    //On aimerait que la div soit un petit rond ! (globe lol) du coup on va modifier les propriétés CSS
    //Pour faire en sorte que ce soit le cas ! modifiez ainsi la width, height et backgroundColor avec
    //Les valeurs données en paramètre de la classe pour créer le cercle... (attribut style d'un DOMElement)


    //Ensuite on veut qu'elle ne soit limitée dans le document à aucun contexte, on utilise donc une position
    //absolue, et enfin on la positionne en coordonnées X et Y...

    //Petits suppléments sympathiques
    this.div.style.cursor = "move";
    this.div.style.borderRadius = "50%";


    // Les méthodes de fonctions sont décrites de la même manière qu'un attribut...
    //Ainsi ces fonctions ne pourront être appellées que depuis une instance de Globe
    //Ici nous allons faire la fonction qui permettra de bouger un élément, et qui prend en paramètre
    //un événement, celui d'une souris qui bouge ...
    this.move = function(event){
        //Ici faites évoluer le mouvement en mettant à jour les attributs posX et posY
        //récupérez les coordonnées de la souris, stockées dans l'event
    };

    //Maintenant le grab ! Cette fonction sera appellée lorsque nous tenterons de dragger le globe en cliquant
    //dessus
    this.grab = function(event){
        // Evite le drag & drop par défaut
        //PreventDefault permet de stopper le processus de l'événement pour le "remplacer" par un autre
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        //Ici ce que qualifie le this est ambigu ...
        //Mettez à jour les positions de notre objet globe, en fonction des positions initiales du globe venant
        //d'être "sélectionné"

        //N'oubliez pas de dire que c'est maintenant lui qui est grabbé, en attribut statique de la classe ...

        //Gérons donc maintenant les événements
        //Nous voulons associer l'événement mousemove, à notre fonction permettant de gérer globalement le mouvement
        //utilisez donc document.addEventListener ...

        //Et le refresh pour éviter la surcharge ?
    };

    //A l'inverse du grab, quand nous lachons la souris
    this.release = function(event){
        //Ici nous réalisons l'inverse, on déréférence l'attribut statique, on supprime l'événement et
        //on arrête le refresh ...!
    };

    //Finalement nous associons les fonctions aux événements (autre manière de faire, utilisez l'attribut onmouse[event]
    // d'un DOMElement) Ainsi la div associera le mousedown au grab, et le mouseup au release

};

//Ici nous déclarons un attribut statique de la classe ... !
//Cet attribut décrire le globe entrain d'être bougé
Globe.selectedGLobe = null;
Globe.mouseMoveListener = function(event){
    //Si un globe sélectionné existe
    if(Globe.selectedGLobe){
        //ALORS ON LE BOUGE LOL (en lui transmettant l'événement)
        Globe.selectedGLobe.move(event);
    }
};

//Ici on dit que si jamais on click, ben on bouge plus de globe !
// Eviter que ça parte en nawak si on sort de la fenêtre
document.addEventListener("click", function(){Globe.selectedGLobe = null;});

//La suite pour éviter la surcharge d'événements pour le navigateur ...
Globe.refreshFrequency = 30;
Globe.refreshInterval = null;

Globe.startRefresh = function(){
    //On crée un intervalle ! On veut lancer la fonction refresh toutes les refreshFrequency !
    //Allez voir la doc hein
};
Globe.stopRefresh = function(){
    //Puis ici on stoppe l'interval
    //Allez aussi voir la doc
};

//Finalement la fonction réalisant le refresh ...
Globe.refresh = function(toRefresh){
    if(!toRefresh)
        toRefresh = Globe.selectedGLobe;

    if(toRefresh) {
        //Donc si on a un truc à refresh, on prend sa div, et on ajuste ses positions (left, top) suivant les
        //positions de l'objet Globe (posX, posY)
        //Go l'écrire
    }
};
