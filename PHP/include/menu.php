<!-- Le menu -->


<section id="header">
    <header>
                <span class="image">
                    <img  src="resources/images/avatar.jpg" alt="prout">
                </span>

        <h1>Un titre</h1>
        <p>C'est un long texte introductif qui ne sert probablement à rien</p>
    </header>

    <nav class="nav">
        <ul>
            <?php if(isset($_GET["name"]) AND isset($_GET["age"])){ ?>
            <li><a href="#rien">Rien</a></li>
            <?php }else{ ?>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#listes">Les listes</a></li>
            <li><a href="#tableau">Les tableaux</a></li>
            <li><a href="#texte">Le formattage HTML</a></li>
            <li><a href="#transitions">Les transitions</a></li>
            <?php } ?>

            <li><a href="#form">Les formulaires avec PHP</a></li>
        </ul>
    </nav>
</section>