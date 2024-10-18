const product1 = {
  dogBreed: "Corgi",
  price: 1500,
  description: "High energy small herding dog",
  image:
    "https://www.dailypaws.com/thmb/hr2f0QpU6Bywd8iWj44wGmkfltM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pembroke-welsh-corgi-on-stairs-1163785112-2000-142d1a9393dd450d9ef59cd6b65ce15c.jpg",
};

const products = [
  product1,
  {
    dogBreed: "Labrador",
    price: 2000,
    description: "Loyal large breed dog with low energy",
    image:
      "https://myredfoxlabs.com/wp-content/uploads/ginger-red-lab-female-768x960.webp",
  },
  {
    dogBreed: "Rottweiler",
    price: 1000,
    description: "Large dog that is great with kids",
    image:
      "https://www.lovemydogz.com/wp-content/smush-webp/2021/04/rottweiler-kocka-scaled.jpg.webp",
  },
];
function displayProducts(products) {
  const container = document.createElement("div");
  container.className = "product-container";
}
