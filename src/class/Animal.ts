abstract class Animal {
  private name: string;
  protected abstract speed: number;
  protected abstract legs: number;

  constructor(name: string) {
    this.name = name;
  }

  abstract callSound(): void;

  run(): void {
    console.log("Running with speed " + this.speed + " km/h");
  }

  getLegs(): void {
    console.log(this.name + " has " + this.legs + " legs.");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  speed: number = 5;
  legs: number = 4;
  callSound(): void {
    console.log("Mew mew mew");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  speed: number = 10;
  legs: number = 4;
  callSound(): void {
    console.log("Go go go");
  }
}

class Chicken extends Animal {
  constructor(name: string) {
    super(name);
  }
  speed: number = 2;
  legs: number = 2;
  callSound(): void {
    console.log("O o o");
  }
}

export { Dog, Cat, Chicken };
