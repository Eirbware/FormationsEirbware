<?php

    function create_session($username){
        session_start();
        $_SESSION['username'] = $username;
    }


    if($_POST["pass"] != "" && $_POST["username"] != "") {

        $passfile = fopen("pass.txt", "r");
        $found = false;
        while(!feof($passfile) && !$found) {
            $auth = explode(":", fgets($passfile));
            if($auth[0] == $_POST["username"] && $auth[1] == $_POST["pass"])
                $found = true;
        }

        fclose($passfile);

        if($found){
            create_session($_POST["username"]);
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
            <input type="submit" value="submit">
        </form>
    <?php } ?>
    </body>
</html>