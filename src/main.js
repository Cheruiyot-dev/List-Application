class Dog {
    constructor(name) {
        this._name = name;
        this._behaviour = 0;
    }

    get name () {
        return this._name;
    }

    get behaviour() {
        return this._behaviour
    }

    incrementBehaviour () {
        this._behaviour ++;
    }
}

const puppy = new Dog("dog")
console.log(puppy.name);
// console.log(puppy._behaviour);
console.log(puppy.behaviour);
puppy.incrementBehaviour()
console.log(puppy.behaviour);
