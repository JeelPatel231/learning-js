import { Clock } from "./convertToClass.ts";

class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  private created: number;

  constructor(name: string) {
    super(name)
    this.name = name;
    this.created = Date.now();
  }
}

// Extended Clock Class 
class ExtendedClock extends Clock {

  precision: number;

  constructor({ template, precision }) {
    super({ template })
    this.precision = precision ?? 1000;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  };

}

const exClock = new ExtendedClock({ template: "h:m:s", precision: 10 })
exClock.start()
