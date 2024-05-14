//botão de remcover produtos
const removeBtn = document.getElementsByClassName("remove-product");
for(var i = 0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove();
        updateTotal();
    });
}
//fim botão para remover produtos

//atualizar o total do carrinho
function updateTotal(){
    let totalValorCarrinho = 0;
    const totalCart = document.getElementsByClassName("carrinho-produtos");
    for(var i = 0; i<totalCart.length; i++){
        const productPrice = totalCart[i].getElementsByClassName("product-price")[0].innerHTML.replace("R$", "").replace(",", ".");
        
        totalValorCarrinho += productPrice *1;
    }
    totalValorCarrinho = totalValorCarrinho.toFixed(2);
    totalValorCarrinho = totalValorCarrinho.replace(".", ",");
    const totalPrice = document.querySelector(".total-carrinho span").innerHTML = "R$" + totalValorCarrinho
}
// console.log(totalValorCarrinho)

//fim atualizar o total do carrinho

//adicionar produto ao carrinho
const buttonAddCart = document.getElementsByClassName("adicionar-carrinho");
for(var i = 0; i < buttonAddCart.length; i++){
    buttonAddCart[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event){
    const button = event.target
    const productInfos = button.parentElement.parentElement;
    const productImg = productInfos.getElementsByClassName("img-produto")[0].src
    const productTitle = productInfos.getElementsByClassName("product-name")[0].innerHTML
    const productPriceSpan = productInfos.getElementsByClassName("preco")[0].innerHTML

    let newProductCart = document.createElement("ul")
    newProductCart.classList.add("carrinho-produtos")

    newProductCart.innerHTML = 
    `
    <li class="identificasao-produto">
        <img src="${productImg}" alt="${productTitle}" class="product-img">
        <h1 class="product-title">${productTitle}</h1>
    </li>
    <li class="identificasao-produto">
        <span class="product-price">${productPriceSpan}</span>
    </li>
    <li class="identificasao-produto">
        <button class="remove-product">remover</button>
    </li>
    `

    const tableCart = document.getElementById("menuDrop");
    tableCart.append(newProductCart)

}
//fim adicionar produto ao carrinho