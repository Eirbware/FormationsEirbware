<?php
    //Pour plus tard
    session_start();

    function sayHello($nom){
        echo "Hello dear " . $nom . "<br/>";
    }

    function brpls(){
        echo("<br/>");
    }

    echo('prout');

    $foo = 1;
    $bar = 2;
    echo($foo * $bar - $foo);

    brpls();

    sayHello("prout");

//Plusieurs types de tableaux

    //Avec index
    $recette = array("carottes", "potirons", "pois chiche", "tapioca");
    //ou alors
    $recette[0] = "carottes";
    $recette[1] = "potirons";
    //ou alors
    $recette[] = "carottes"; //crée recette[0]
    $recette[] = "potirons"; //crée recette[1]

    //Utiliser print_r pour debugger
    print_r($recette);
    brpls();

    //Tableau associatif (map)
    $formation = array("nom" => "PHP", "date" => date("d"), "nombre_personnes" => -5, "horaire" => "16:30");
    //la declaration marche aussi comme ça
    $formation["nom"] = "PHP";
    $formation["date"] = date("d"); // etc ...

    print_r($formation);
    brpls();

//Pour iterer sur les tableaux
    //boucle for normale
    echo "<strong>For normal</strong>";
    brpls();
    for($i = 0;$i < sizeof($recette);$i++){
        echo $recette[$i] . "<br/>";
    }

    //boucle foreach qui fait sur tous les éléments
    echo "<strong>Foreach</strong>";
    brpls();
    foreach($formation as $elem){
        echo $elem . "<br/>";
    }

    echo "<strong>Foreach sur les clés</strong>";
    brpls();
    foreach($formation as $key => $value){

        echo "La clé [" . $key . "] a pour valeur " . $value;
        brpls();
    }

    //Voir les fonctions array_key_exists, in_array, array_search pour la recherche dans un tableau.

    brpls();
    brpls();
    brpls();
    brpls();
    if(isset($_SESSION["username"])){
        echo "On se connait ! tu es " . $_SESSION["username"] . "non ? <3";
    }
?>


