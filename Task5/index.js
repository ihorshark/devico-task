class Worker {
  #name;
  #surname;
  #rate;
  #days;
  #salary;

  constructor(_name, _surname, _rate, _days) {
    this.#name = _name;
    this.#surname = _surname;
    this.#rate = _rate;
    this.#days = _days;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get rate() {
    return this.#rate;
  }

  set rate(_rate) {
    this.#rate = _rate;
  }

  get days() {
    return this.#days;
  }

  set days(_days) {
    this.#days = _days;
  }

  getSalary() {
    this.#salary = this.#rate * this.#days;
    return this.#salary;
  }
}

const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.rate); //outputs 10
console.log(worker.days); //outputs 31
console.log(worker.getSalary()); //outputs 310 - what equal 10*31

worker.rate = 20; // let's increase rate
worker.days = 10; // let's decrease days
console.log(worker.getSalary()); //outputs 200 - what equal 20*10
