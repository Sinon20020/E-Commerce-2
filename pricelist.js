function openItem(card){
    document.getElementById("item-modal-container").style.display = "block";

    const item = card.querySelector(".item-name")?.textContent;
    const imgSrc = card.querySelector(".item-img")?.src;
    const price = card.querySelector(".item-price")?.textContent;
    const status = card.querySelector(".item-status")?.textContent;

    document.querySelector(".target-name").textContent = item || "no name";
    document.querySelector(".target-img").src = imgSrc || "no image";
    document.querySelector(".target-price").textContent = price || "no price";
    document.querySelector(".target-status").textContent = status || "no status";
}

function closeItem(){
    document.getElementById("item-modal-container").style.display = "none";
}

function swap(){
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2");

    const link = img1.src;
    img1.src = img2.src;
    img2.src = link; 
}

function addCart() {
    const imgsource = document.querySelector(".target-img")?.src;
    const name = document.querySelector(".target-name")?.textContent;
    const presyo = document.querySelector(".target-price")?.textContent;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img src="${imgsource}" class="cart-img">
        <div class="cart-details">
            <p class="cart-name">${name}</p>
            <p class="cart-price">${presyo}</p>
        </div>
    `;
    document.getElementById("cart-items").appendChild(cartItem);

    alert("Successfully Added to your Cart Kupal!");
}
