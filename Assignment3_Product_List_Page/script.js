const product1 = {
  dogBreed: "Corgi",
  price: 1500,
  description: "Small herding dog with high energy.",
  image:
    "https://barkalot.com/cdn/shop/articles/Welchcorgipembroke.jpg?v=1655987048",
};

const products = [
  product1,
  {
    dogBreed: "Labrador",
    price: 2000,
    description: "Large bird dog that is great with families.",
    image:
      "https://myredfoxlabs.com/wp-content/uploads/ginger-red-lab-female-768x960.webp",
  },
  {
    dogBreed: "Rottweiler",
    price: 1000,
    description: "Large dog renowned for its coloration.",
    image:
      "https://www.lovemydogz.com/wp-content/smush-webp/2021/04/rottweiler-kocka-scaled.jpg.webp",
  },
];

function displayProducts(products) {
  const container = document.createElement("div");
  container.className = "product-container";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const nameElement = document.createElement("h2");
    nameElement.textContent = product.dogBreed;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.price}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.dogBreed;
    imageElement.style.width = "200px";

    productDiv.appendChild(nameElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(imageElement);

    container.appendChild(productDiv);
  });
  document.body.appendChild(container);
}

function removeProducts() {
  const deleteProduct = document.getElementsByClassName("product-container");
  deleteProduct.item(0).remove(0);
}
