function  quiz(){
    var questao1 = document.getElementById("PP1").checked;
    var questao2 = document.getElementById("P2O2").checked;
    var questao3 = document.getElementById("P3O4").checked;
    var questao4 = document.getElementById("P404").checked;
    
    let button = document.querySelector(".btn")
    
    
    pontos = 0

    if (questao1){
        pontos += 2
    }
    if (questao2){
        pontos += 2
    }
    if (questao3){
        pontos += 2
    }
    if (questao4){
        pontos += 2
    }
    
    if (pontos < 2.8){
        document.getElementById("resultado_texto").innerHTML = "Que pena, você obteve " + pontos + " pontos";
        document.getElementById("imagem").src="../quiz/triste.jpg";
    }
    else if (pontos <6.4) {
        document.getElementById("resultado_texto").innerHTML ="Éééé, mais ou menos, você obteve " + pontos + " pontos";
        document.getElementById("imagem").src="../quiz/mais.gif";
    }
    else {
        document.getElementById("resultado_texto").innerHTML = "Voce é o cara!, você obteve " + pontos + " pontos";
        document.getElementById("imagem").src="../quiz/feliz.jpeg";
    }
    if (document.querySelector(".btn").value === ""){
        button.disabled = true;
    }
    document.getElementById("tentar novamente").innerHTML = "Para tentar novamente, recarregue a página."
   


}