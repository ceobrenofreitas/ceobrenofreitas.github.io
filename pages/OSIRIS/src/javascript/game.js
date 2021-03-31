
var pesoDaPena = 3;
var tentativas = 3;



function jogar(){
    if(tentativas > 0){

        var pesoDoCoracao = document.getElementById("coracao").value;
        var peso = parseInt(pesoDoCoracao);

        alert("♥️ Peso do coração: " + peso);
                
        if (peso < 0 || peso > 10){
            alert("🤔 Humm... Esse peso não existe. Tente de 0 a 10.");
            alert("Tentativas restantes: " + tentativas);
        } else if(pesoDaPena == peso){
            alert("😃 Parabéns você acertou!");
            tentativas = 0;
        } else if (peso > pesoDaPena){
            alert("😕 O coração é muito pesado! Tente um peso menor. 👇");
            tentativas--;
        } else if (peso < pesoDaPena){
            alert("😕 O coração é muito leve! Tente um peso maior. ☝️");
            tentativas--;
        }

        alert("💬 Tentativas restantes: " + tentativas);

    } else{
        alert("Suas tentativas acabaram 😿 Número de tentativas: " + tentativas);
    }
}
/*

if(tentativas == 0){
    alert("Você esgotou sua chance. Agora o morto não poderá passar para outra vida.");
    break;
} else if(peso == pesoDaPena){
    alert("Parabéns! Realmente o peso da pena é: " + pesoDaPena);
    break;
}
*/





