const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const menu = document.getElementById("menuDrop");


function adicionar(event, idDisplay, preco){
   var displayTela = document.getElementById(idDisplay)
   var i = parseInt(displayTela.innerHTML) || 0;
   var h2 = document.getElementById(preco)

   if(i < 70){
      i++;
      displayTela.innerHTML= i;
      h2.innerHTML = "<sup>$</sup>"+10*i+",00";
   }else{
   }
}

function subtrair(event, idDisplay, preco){
   var displayTela = document.getElementById(idDisplay)
   var i = parseInt(displayTela.innerHTML) || 0;
   var h2 = document.getElementById(preco)

   if(i > 1){
      i--;
      displayTela.innerHTML= i;
      h2.innerHTML = "<sup>$</sup>"+10*i+",00";
   }else{
   }
}

function abrirMneu(){
   if(menu.style.display = "none"){
      menu.style.display = "flex"
   }else{
      menu.style.display = "none"
   }
}

function fecharMenu() {
   if (menu.style.display === "flex") {
       menu.style.animation = "animasaoCloseMenu 0.2s forwards"; // Aplica a animação de fechamento
       setTimeout(() => {
           menu.style.display = "none"; // Altera a exibição após a animação
           menu.style.animation = ""; // Limpa a animação após sua conclusão
       }, 200); // Tempo de duração da animação
} else {
   menu.style.display = "flex";
}
}

function abrirProduto(event,tela){
   const telaVenda = document.getElementById(tela);

   if(telaVenda.style.display = "none")
   {
      telaVenda.style.display = "block";
   }else{
      telaVenda.style.display = "none";
   }
}

function fecharProduto(event, tela) {
   const telaVenda = document.getElementById(tela);
   if (telaVenda.style.display === "block") {
       telaVenda.style.animation = "animasaoCloseProduto 0.1s forwards";
       setTimeout(() => {
           telaVenda.style.display = "none";
           telaVenda.style.animation = "";
       }, 100);
   } else {
       telaVenda.style.display = "block";
   }
}

function like(event,likeid){
   const likeBtn = document.getElementById(likeid)

   if(likeBtn.style.color === "rgb(204, 204, 204)"){
      likeBtn.style.color =  "red"
   }else{
      likeBtn.style.color =  "#ccc"
   }
}

