import { cardComponent } from "../components/cardComponents.js";
import { products } from "../data/products.js";
console.log(products);

let renderArea = document.querySelector("#card-area");
products.map((product) => {
  renderArea.innerHTML += cardComponent(product);
});
