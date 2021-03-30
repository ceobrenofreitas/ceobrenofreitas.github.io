


function iniciar(){
    frontPage.remove();
    
    document.getElementById("btnMenuAbrir").style.display = "block";
    document.getElementById("btnMenuAbrir").style.visibility = "visible";
    document.querySelector(".game").style.visibility = "visible";
}

function createMenu(titulo, descricao){
    var frontPage = document.createElement("div");
    frontPage.setAttribute("id", "frontPage");
    frontPage.classList.add("frontPage");

    var divBox = document.createElement("div");
    divBox.classList.add("box");

    var h1 = document.createElement("h1");
    h1.innerHTML = titulo;

    var p = document.createElement("p");
    p.innerHTML = descricao;

    var button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = "Iniciar";
    button.addEventListener("click", iniciar);
    
    document.querySelector("#conteudo").appendChild(frontPage);
    frontPage.appendChild(divBox);
    divBox.appendChild(h1);
    divBox.appendChild(p);
    divBox.appendChild(button);

    

}

createMenu(
    "Osiris Game", 
    
    `
        ImersãoDEV - Alura
        <br><br>
        Osíris é o deus do julgamento, da vegetação e do além.
        <br><br>
        Seu trabalho é julgar os mortos.
        <br><br>
        Ele precisa pesar o coração do morto,
        e comparar o peso do coração ao de uma pena.
        <br><br>
        Esse processo é conhecido como "psicostasia" e acontecia
        na sala das duas verdades, no Egito antigo.
        <br><br>
        Osíris precisa de um sucessor, agora...
        <br><br>
        Sua missão é definir o destino de cada coração.
        <br><br>
        Então julgue bem o peso dos corações na balança.
        <br><br>
        Tente encontrar o peso ideal do coração.
        <br><br>
        Como? <br><br>
        Bom, se o coração tiver o peso igual ao da pena o dono do coração passa para outra vida,
        caso contrário ele fica preso a sua antiga vida.
        <br><br>
        Lembrando que: Você não sabe o peso da pena, até que julgue o peso do coração antes.
        <br><br>
        Agora, você terá que julgar os corações.
        <br><br>
        Sua responsabilidade é acertar o peso ideal do coração com o peso da pena.
        <br><br>
        Isso irá fazer o morto passar para a outra vida.
        <br><br>
        Agora chega de conversa. 
        <br><br>
        Vamos começar?
        <br><br><br><br>
    `,
);

function openMenu(){
    document.getElementById("menuContent").style.visibility = "visible";
    document.getElementById("menuContent").style.transition = "all .15s linear";
    document.getElementById("menuContent").style.transform = "scale(.9)";
    document.getElementById("btnMenuAbrir").style.visibility = "hidden";
}

function closeMenu(){
    document.getElementById("menuContent").style.visibility = "hidden";
    document.getElementById("menuContent").style.transition = "all .15s linear";
    document.getElementById("menuContent").style.transform = "scale(0)";
    document.getElementById("btnMenuAbrir").style.visibility = "visible";

}

function reset(){
    window.location.reload();
}