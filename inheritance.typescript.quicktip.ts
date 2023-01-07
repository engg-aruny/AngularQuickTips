class Animal {
    age: number;
    breed: string;

    constructor(age: number, breed: string) {
        this.age = age;
        this.breed = breed;
    }

    makeSound(sound: string): void {
        console.log(sound);
    }
}

class Dog extends Animal {
    ownerName: string;
    constructor(age: number, breed: string, ownerName: string) {
        super(age, breed) // call parent constructor
        this.ownerName = ownerName
    }

    makeSound(): void {
        super.makeSound("woof woof");
    }

    getAge(): number {
        return this.age * 7;
    }
}

class Cat extends Animal {
    constructor(age: number, breed: string) {
        super(age, breed)
    }

    makeSound(): void {
        super.makeSound('meow meow');
    }
}