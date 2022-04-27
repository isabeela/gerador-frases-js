var frases = [
'“Eu nunca olho para trás, querida. Isso distrai do agora”',
'“Um verdadeiro herói não é medido pelo tamanho de sua força, mas pela força de seu coração”',
'“As coisas que me fazem diferente são as coisas que me fazem ser eu”',
'“Em cada trabalho que deve ser feito, há um elemento de diversão”',
'“Ao infinito e além”',
'“Não deixe ninguém definir seus limites por causa de onde você veio. Seu único limite é sua alma”',
'“Ohana significa família. Família significa que ninguém fica para trás ou é esquecido”',
'"Continue a nadar, continue a nadar"',
'“Nós temos muitas coisas em comum, a mesma terra, o mesmo ar, o mesmo céu. Talvez se começássemos a olhar para as coisas que temos em comum invés de diferente… Bom, quem sabe?”',
'“Estou pronto! Estou pronto! Estou pronto!”',
'“Você nunca é velho demais para ser jovem”'
]

function novaFrase() {


    var aleatorio = Math.floor(Math.random()*(frases.length));
    document.querySelector("#frase").innerHTML=frases[aleatorio];

    if (frases[aleatorio] == frases[0]) {
        document.querySelector("#imagem").style.background = "url('images/edna-modas.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Edna Modas";
        document.querySelector("#local").innerHTML="Os incríveis";
    } 

    else if (frases[aleatorio] == frases[1]) {
        document.querySelector('#imagem').style.background = "url('images/zeus-hercules.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Zeus";
        document.querySelector("#local").innerHTML="Hércules";
    }

    else if (frases[aleatorio] == frases[2]) {
        document.querySelector('#imagem').style.background = "url('images/pooh.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Pooh";
        document.querySelector("#local").innerHTML="O ursinho Pooh";
    }

    else if (frases[aleatorio] == frases[3]) {
        document.querySelector('#imagem').style.background = "url('images/mary-poppins.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Mary Poppins";
        document.querySelector("#local").innerHTML="Mary Poppins";
    }

    else if (frases[aleatorio] == frases[4]) {
        document.querySelector('#imagem').style.background = "url('images/buzz.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Buzz Lightyear";
        document.querySelector("#local").innerHTML="Toy Story";
    }
    else if (frases[aleatorio] == frases[5]) {
        document.querySelector('#imagem').style.background = "url('images/chef-g.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Chef G";
        document.querySelector("#local").innerHTML="Ratatouille";
    }
    else if (frases[aleatorio] == frases[6]) {
        document.querySelector('#imagem').style.background = "url('images/stitch.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Stitch";
        document.querySelector("#local").innerHTML="Lilo & Stitch";
    }
    else if (frases[aleatorio] == frases[7]) {
        document.querySelector('#imagem').style.background = "url('images/dory.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Dory";
        document.querySelector("#local").innerHTML="Procurando Nemo";
    }
    else if (frases[aleatorio] == frases[8]) {
        document.querySelector('#imagem').style.background = "url('images/meowth.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Meowth";
        document.querySelector("#local").innerHTML="Pokémon";
    }
    else if (frases[aleatorio] == frases[9]) {
        document.querySelector('#imagem').style.background = "url('images/bob-esponja.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Bob Esponja";
        document.querySelector("#local").innerHTML="Bob Esponja Calça Quadrada";
    }
    else  {
        document.querySelector('#imagem').style.background = "url('images/branca-de-neve.png')";
        document.querySelector("#imagem").style.backgroundRepeat = "no-repeat";
        document.querySelector("#imagem").style.backgroundPosition = "center";
        document.querySelector("#autor").innerHTML="Branca de Neve";
        document.querySelector("#local").innerHTML="Branca de Neve e os sete anões";
    }
  
    





}