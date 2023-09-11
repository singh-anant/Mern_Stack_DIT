import { pizzaOperations } from "../services/pizza-operation.js";

async function printPizzas() {
  const allPizzas = await pizzaOperations();
  const div = document.getElementById("pizza-output");
  for (const pizza of allPizzas) {
    const card = createCard(pizza);
    console.log(card);
    div.appendChild(card);
  }

  console.log("All Pizzas", allPizzas);
}

printPizzas();

function createCard(pizza) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card col-3";
  cardDiv.style.width = "18rem";
  const img = document.createElement("img");
  img.src = pizza.url;
  img.className = "card-img-top";
  cardDiv.appendChild(img);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardDiv.appendChild(cardBody);
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = pizza.name;
  cardBody.appendChild(h5);
  const pTag = document.createElement("p");
  pTag.className = "card-text";
  pTag.innerText = pizza.desc;
  cardBody.appendChild(pTag);
  const button = document.createElement("button");
  button.setAttribute("pizza-id", pizza.id);
  button.className = "btn btn-primary";
  button.innerText = "Add To Card";
  // Add to cart and function binding
  button.addEventListener("click", addToCart);
  cardBody.appendChild(button);
  return cardDiv;

  // We have to create dynamic html
  /*  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

function addToCart() {
  // we will get the current object
  console.log(this);
}

function printBasket() {
  const basketDiv = document.getElementById("basket");
  pizzaOperations.filter((pizza) => pizza.isAddedInCart);
  const pizzasInCart=pizzaOperations.pizzas.
}
