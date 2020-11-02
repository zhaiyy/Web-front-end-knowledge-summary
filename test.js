function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
};

function newFactory() {
    let obj = {}
    let params = [...arguments]
    let parentObj = params[0]
    obj.__proto__ = parentObj.prototype
    parentObj.apply(obj, params.slice(1))
    return obj
}

var person = objectFactory(Otaku, 'Kevin', '18')
var person1 = newFactory(Otaku, 'Kevin1', '19')

console.log(person.name, person1.name) // Kevin
console.log(person.habit, person1.habit) // Games
console.log(person.strength, person1.strength) // 60

person.sayYourName(); // I am Kevin
person1.sayYourName(); // I am Kevin