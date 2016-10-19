<!-- Le menu -->


<section id="header">
    <header>
                <span class="image">
                    <img  src="resources/images/avatar.jpg" alt="prout">
                </span>

        <h1>Un titre</h1>
        <p>C'est un long texte introductif qui ne sert probablement à rien</p>
        <p><?php echo "Bonjour " . $_SESSION["username"] . "! " ?></p>
        <button><a style="text-decoration: none;" href="logout.php">Deconnexion</a></button>
    </header>

    <nav class="nav">
        <ul>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#listes">Les listes</a></li>
            <li><a href="#tableau">Les tableaux</a></li>
            <li><a href="#texte">Le formattage HTML</a></li>
            <li><a href="#transitions">Les transitions</a></li>
        </ul>
    </nav>
</section>