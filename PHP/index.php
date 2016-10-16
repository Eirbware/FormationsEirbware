<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Eirbweirb</title>

    <link rel="stylesheet" href="resources/stylesheets/style.css" type="text/css">

</head>
<body>

    <div class="wrapper">

        <?php include('include/menu.php') ?>

        <div id="main">

            <?php
                $content_dir = "include/content/";
                $scan = scandir($content_dir);

                if(isset($_GET['name']) AND isset($_GET["age"])){
                    include("include/forms.php");
                    include($content_dir . "7_formulaire.php");
                }else {
                    print_r($_GET);
                    foreach ($scan as $file) {
                        if ($file[0] != ".") {
                            include($content_dir . $file);
                        }
                    }
                }

            ?>

        </div>

        <?php include('include/footer.php'); ?>

    </div>
</body>

</html>