<?php

    session_start();

    if(isset($_SESSION["username"])){
        header("Location: index.php");

    } else if(isset($_COOKIE["username"])){
        $_SESSION["username"] = $_COOKIE["username"];
        header("Location: index.php");

    } else if(isset($_POST) && $_POST["pass"] != "" && $_POST["username"] != "") {

        $passfile = fopen("pass.txt", "r");
        $found = false;
        while(!feof($passfile) && !$found) {
            $auth = str_replace("\n", "", explode(":", fgets($passfile)));
            if($auth[0] == $_POST["username"] && $auth[1] == $_POST["pass"])
                $found = true;
        }

        fclose($passfile);

        if($found){
            $_SESSION["username"] = $_POST["username"];

            if(isset($_POST["remember"]))
                setcookie("username", $_POST["username"], 2147483647);
            header("Refresh: 3; url=index.php");
            echo 'Vous allez être redirigé dans 3 secondes ...';
            $mdp = false;
        }else{
            echo "Mauvais mot de passe ...";
        }
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>potdemasse</title>
    </head>
    <body>
    <?php if(!isset($mdp)){ ?>
        <form action="mdp.php" method="post">
            <label for="username">Nom d'utilisateur : </label><input type="text" name="username" id="username" placeholder="votre pseudo">
            <label for="pass">Mot de passe : </label><input type="password" name="pass" id="pass" placeholder="votre mdp">
            <input type="submit" value="submit"><br/>
            <label for="remember">Se souvenir de moi </label><input type="checkbox" id="remember" name="remember">
        </form>
    <?php } ?>
    </body>
</html>