if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready()
}

function ready(){
    const removeBtn = document.getElementsByClassName("remove-product")
    for(var i = 0; i<removeBtn.length; i++){
        removeBtn[i].addEventListener("click", remuveProduct);
    }

    const buttonAddCart = document.getElementsByClassName("adicionar-carrinho");
    for(var i = 0; i < buttonAddCart.length; i++){
        buttonAddCart[i].addEventListener("click", addProductToCart)
    }
}

//botão de remcover produtos
//fim botão para remover produtos

//atualizar o total do carrinho

// console.log(totalValorCarrinho)

//fim atualizar o total do carrinho

//adicionar produto ao carrinho

function addProductToCart(event){
    const button = event.target
    const productInfos = button.parentElement.parentElement;
    const productImg = productInfos.getElementsByClassName("img-produto")[0].src
    const productTitle = productInfos.getElementsByClassName("product-name")[0].innerHTML
    const productPriceSpan = productInfos.getElementsByClassName("preco")[0].innerHTML

    const productCartNmae = document.getElementsByClassName("product-title")
    for(var i = 0; i < productCartNmae.length; i++){
        if(productCartNmae[i].innerHTML === productTitle){
            const avisoCarrinho = document.getElementById("checagem-carrinho")
            avisoCarrinho.style.display = "block"
            avisoCarrinho.innerHTML = "Este produto já esta no carrinho"
            setTimeout(() => {
                avisoCarrinho.style.display = "none";
                avisoCarrinho.style.animation = "";
            }, 3000);
            return
        }
    }

    const addCarrinho = document.getElementById("add-carrinho")
    addCarrinho.style.display = "block"
    addCarrinho.innerHTML = "Produto adicionado ao carrinho"
    setTimeout(() => {
        addCarrinho.style.display = "none";
        addCarrinho.style.animation = "";
    }, 3000);

    let newProductCart = document.createElement("ul")
    newProductCart.classList.add("carrinho-produtos")

    newProductCart.innerHTML = 
    `
        <li class="identificasao-produto">
            <img src="${productImg}" alt="${productTitle}" class="product-img">
            <div class="infos-produto">
                <h2 class="product-title">${productTitle}</h2>
                <span class="product-price">${productPriceSpan}</span>
            <div>
        </li>
        <li class="identificasao-produto">
            <button class="remove-product" onclick="remuveProduct(event)">remover</button>
        </li>
    `
    
    const tableCart = document.getElementById("menuDrop");
    tableCart.append(newProductCart)

    updateTotal()
}


function remuveProduct(event){
    event.target.parentElement.parentElement.remove()
    updateTotal()
}
//fim adicionar produto ao carrinho

function updateTotal(){
    let totalValorCarrinho = 0;
    const totalCart = document.getElementsByClassName("carrinho-produtos");
    for(var i = 0; i<totalCart.length; i++){
        const productPrice = totalCart[i].getElementsByClassName("product-price")[0].innerHTML.replace("R$", "").replace(",", ".");
        
        totalValorCarrinho += productPrice;
    }
    totalValorCarrinho = totalValorCarrinho.toFixed(2);
    totalValorCarrinho = totalValorCarrinho.replace(".", ",");
    const totalPrice = document.querySelector(".total-carrinho span").innerHTML = "R$" + totalValorCarrinho
}