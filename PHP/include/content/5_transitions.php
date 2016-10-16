<section id="transitions" class="section">
    <div class="container">
        <h2>Les transitions CSS</h2>
        <p>C'est dommage de faire tout ça sans pouvoir faire de zolis petits effets à la con, d'où les transitions.</p>
        <p>On peut faire des transitions avec à peu près n'importe quoi ...</p>
        <div class="transition-container">
            <p>Avec l'attribut hover (quand vous passez par dessus)</p>
            <div class="square"></div>
            <p>Ou l'attribut active (quand vous faites un clic gardé dessus)</p>
            <div class="trans-text">
                <span>Et jouer sur un peu toutes les propriétés CSS</span>
            </div>
            <p>Le léger problème c'est que l'on en peut pas gérer d'éléments sur lesquels cliquer. Techniquement on doit faire du Javascript pour ça. Mais en faisant des petits tricks on arrive à des résultats sympathiques ...</p>
            <input type="checkbox" id="toggle">
            <label for="toggle">FAIS LE</label> (en vrai clic pas ça bug un peu même si ça fait l'effet demandé)
            <div id="trick"></div>
            <p>Mais sinon c'est chiant du coup parce qu'il faut gérer la compatibilité entre Webkit (Safari, Chrome, Opera) et Mozilla (firefox). On vomit sur IE hein, parce que c'est IE.</p>
        </div>

    </div>
</section>