// Referencia: https://mzl.la/344AqkF

// dos clases principales para heredar de:

function FoodPrototype() {
    this.eat = function () {
        console.log("Eating", this.name);
    };
}
function Food(name) {
    this.name = name;
}
Food.prototype = new FoodPrototype();

function PlantPrototype() {
    this.grow = function () {
        console.log("Growing", this.name);
    };
}
function Plant(name) {
    this.name = name;
}
Plant.prototype = new PlantPrototype();

//Ahora solo necesitamos una clase que herede de ambos. La herencia se realiza mediante calling 
//la función del constructor (sin usar la nueva palabra clave) para los prototipos y los constructores de objetos. 
//Primero, el prototipo tiene que heredar de los prototipos originales.

function FoodPlantPrototype() {
    FoodPrototype.call(this);
    PlantPrototype.call(this);
    // plus a function of its own
    this.harvest = function () {
        console.log("harvest at", this.maturity); // Coseha a: Harvest at:
    };
}

//Y el constructor tiene que heredar de los constructores padres:
function FoodPlant(name, maturity) {
    Food.call(this, name);
    Plant.call(this, name);
    // plus a property of its own
    this.maturity = maturity;
}

FoodPlant.prototype = new FoodPlantPrototype();

//Ahora puedes cultivar, comer y cosechar diferentes instancias:
var fp1 = new FoodPlant('Radish', 28);
var fp2 = new FoodPlant('Corn', 90);

fp1.grow();
fp2.grow();
fp1.harvest();
fp1.eat();
fp2.harvest();
fp2.eat();
