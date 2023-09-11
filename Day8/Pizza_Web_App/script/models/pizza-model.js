// DATA Modelling
export default class Pizza {
  constructor(id, name, price, url, desc, isAddedInCart) {
    // this-keyword
    // hold the current calling object refernce
    this.id = id;
    this.name = name;
    this.price = price;
    this.url = url;
    this.desc = desc;
    this.isAddedInCart = false;
  }
}
