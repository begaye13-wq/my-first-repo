//task 1 and 2
const person = {
    name: "Jane Doe",
    age: 30,
    hobby: "dancing"};
    //task 3
    console.log(person);
    console.log(person["hobby"]);
    person.age = 31;
    person.city = "Denver";
    console.log(person);
    console.log("name" in person);
    console.log("country" in person);
    console.log(person.hasOwnProperty("age"));
    //task 4
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    //task 5
    const personRef = person;
    personRef.age = 32;
    console.log(person.age);
    //task 6
    person.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
    person.greet();
    //task 7
    const animal = {species: "generic", CanFly: false};
    const bird = Object.create(animal);
    bird.species = "bird";
    bird.CanFly = true;
    console.log(bird.species);
    console.log(bird.CanFly);
    console.log(bird.hasOwnProperty("canFly"));
    animal.hasFeathers = true;
    console.log(bird.hasOwnProperty("hasFeathers"));
   //task 8
    Object.defineProperty(person, "Nickname", {
        value: "Jane the Great",
        writable: false,
        enumerable: true,
        configurable: false 

    });
    console.log(person.Nickname);
    person.Nickname = "Jane the Great"
    console.log(person.Nickname);