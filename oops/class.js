class demo {
    x;
    demoMethod = () => {
        console.log("Hello World");
        console.log(this.x);
    }
}
// Creating an instance of a class called demo
let a1 = new demo();
a1.x = "Karthik";
a1.demoMethod();