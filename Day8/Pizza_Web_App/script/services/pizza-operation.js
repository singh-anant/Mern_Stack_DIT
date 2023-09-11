import makeNetworkCall from "./api-client.js";
import { URL } from "../utils/config.js";
import Pizza from "../models/pizza-model.js";

export const pizzaOperations = {
  pizzas: [],
  searchPizza(pizzaId) {
    const pizzaObject = this.find((pizzaId) => (pizzaId = pizzaId));
    pizzaObject.isAddedInCart = true;
  },
  async getPizzas() {
    // API Client(Object(Pizza))
    // Data Map to Model
    // return Model;
    const data = await makeNetworkCall(URL);
    const pizzaJSON = data["Vegetarian"];
    const pizzas = pizzaJSON.map((singlePizza) => {
      const pizzaObject = new Pizza(
        singlePizza.id,
        singlePizza.name,
        singlePizza.price,
        singlePizza.assets.product_details_page[0].url,
        singlePizza.menu_description
      );
      return pizzaObject;
    });
    return pizzas;
  },
};

/* export async function getPizzas() {
  // API Client(Object(Pizza))
  // Data Map to Model
  // return Model;
  const data = await makeNetworkCall(URL);
  const pizzaJSON = data["Vegetarian"];
  const pizzas = pizzaJSON.map((singlePizza) => {
    const pizzaObject = new Pizza(
      singlePizza.id,
      singlePizza.name,
      singlePizza.price,
      singlePizza.assets.product_details_page[0].url,
      singlePizza.menu_description
    );
    return pizzaObject;
  });
  return pizzas;
}
 */
