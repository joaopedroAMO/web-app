const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const menu = document.getElementById("menuDrop");
const telaVenda = document.getElementById("telaVenda");


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

function fecharMenu(){
   if(menu.style.display = "flex"){
      menu.style.display = "none"
   }else{
      menu.style.display = "flex"
   }
}

function abrirProduto(){
   if(telaVenda.style.display = "none")
   {
      telaVenda.style.display = "block";
   }else{
      telaVenda.style.display = "none";
   }
}

function fecharProduto(){
   if(telaVenda.style.display = "block")
   {
      telaVenda.style.display = "none";
   }else{
      telaVenda.style.display = "block";
   }
}