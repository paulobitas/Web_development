function gritar()
{
    alert("AAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHH");
}

function perguntar()
{
    var nome;
    nome = prompt("Qual é o seu nome, criatura?");
    if(nome != null && nome != "" && nome != " ")
    {
        alert("Olá, "+ nome + "!");
    }
    else
    {
        alert("Olá, Criatura sem Nome!");
    }
    

}

function mudar_texto() /*ambos os métodos funcionam, mas o querySelector é mais moderno e recomendado*/
{
    var h1 = document.getElementsByTagName("h1");

    incrementar();

    if(h1[0].innerText == "Página do Caco M".trim())
    {
        alert(h1[0].innerText);
        h1[0].innerText = "Página do Pé Verde"
    }
    else
    {
        alert(h1[0].innerText);
        h1[0].innerText = "Página do Caco M"
    }

    /*var h1 = document.querySelector("h1");

    if(h1.innerText == " Página do Caco M ".trim())
    {
        alert(h1.innerText);
        document.querySelector("h1").textContent = "Página do SilverTongue";
    }
    else
    {
        alert(h1.innerText);
        document.querySelector("h1").textContent = "Página do Caco M";
    }*/    

    function incrementar()
    {
        var contador = document.getElementById("p1");
        var valor = parseInt(contador.innerText);
        valor++;
        contador.innerText= valor;
    }
    
}