import { cardComponent } from "../components/cardComponents.js";
import { products } from "../data/products.js";
console.log(products);

let renderArea = document.querySelector("#card-area");
const BASE_URL = "http://127.0.0.1:5501/data/products.json";
fetch(BASE_URL).then((res)=> res.json()).then((data)=> {
  data.map((products)=>{
    renderArea.innerHTML += cardComponent(products)
  })
});
