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

function like(event, likeid){
   const likeBtn = document.getElementById(likeid);
   const likeFeedback = document.getElementById("feedback");
   
   // Verifica se o botão foi "curtido"
   const isLiked = (likeBtn.dataset.liked === "true");

   if(!isLiked){
      likeBtn.dataset.liked = "true"; // Marca o botão como "curtido"
      
      likeBtn.style.color = "red"; // Muda a cor do botão para vermelho
      
      likeFeedback.innerHTML = "Like adicionado!";
      likeFeedback.style.display = "block";
      likeFeedback.style.background = "#f75454";
      
      setTimeout(() => {
         likeFeedback.style.display = "none";
     }, 3000);
   }
   else{
      likeBtn.dataset.liked = "false"; // Marca o botão como "não curtido"
      
      likeBtn.style.color = "#ccc"; // Muda a cor do botão de volta para a cor padrão
      
      likeFeedback.innerHTML = "Que pena, você não gostou?";
      likeFeedback.style.display = "block";
      likeFeedback.style.background = "#a8a2a2";
      
      setTimeout(() => {
         likeFeedback.style.display = "none";
     }, 3000);
   }
}

document.getElementById("searchInput").addEventListener("input", function () {
   const searchValue = this.value.toLowerCase().trim();
   const searchKeywords = searchValue.split(/\s+/).map(keyword => normalizeString(keyword));
   const productItems = document.querySelectorAll(".produtosDescrisao ul li");

   productItems.forEach(item => {
       const productName = normalizeString(item.querySelector("h3").textContent.toLowerCase());
       const matches = searchKeywords.every(keyword => productName.includes(keyword));

       if (matches) {
           item.style.display = "flex";
       }else {
           item.style.display = "none";
       }
   });
});

function normalizeString(str) {
   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}






// carrinho



