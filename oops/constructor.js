class pen {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice = () => {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

let p1 = new pen("BALL","red","100");
p1.showPrice()