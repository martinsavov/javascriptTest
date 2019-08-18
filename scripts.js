/*Arrays!
function restaurantTip(moneySpent){
    var percentage;
    

    if(moneySpent <= 50){
        percentage = 0.2;
    } else if(moneySpent >= 50 && moneySpent <= 200){
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return moneySpent * percentage;
}

console.log(restaurantTip(20));

var bills = [255, 50, 268];
var tips = [restaurantTip(bills[0]),
            restaurantTip(bills[1]),
            restaurantTip(bills[2])];

var totalAmout = [bills[0] + tips[0],
                    bills[1]+ tips[1],
                    bills[2] + tips[2]];
                    console.log(tips);
                    console.log(totalAmout);
Arrays
*/

//Objects 


// var BMW = {

// hp: 150,
// model: "X3",
// torque: 200,
// variant: "family",
// style: ["black", "tinted windows", 155 + " bhp"]

// }
// BMW.model = "X5";


// console.log(BMW);
// console.log(BMW.style.length);

/* Practice 
function work(hp,torque,brand){

    var myCar = hp + "" + torque + brand;
    return myCar;
}

console.log(work(20,30,"mercedez"));




var opel = { 
    year: 1990,
    model: "zafira", 
    hp: 120,
    torque: 100,
    style: ["family saloon", "nice"],
    calculaRealHp: function(){
        this.realHp = this.hp - 20;
    }

}
opel.calculaRealHp();
console.log(opel);

*/



// var myAge = {

// currentYear: 2019,
// yearOfBirth:1990,

// calculateAge: function(){
//    this.age = this.currentYear - this.yearOfBirth;
//     }  
// }
// myAge.calculateAge();
// console.log(myAge);

/* 
var john = {

    firstName: 'John',
    mass: 92,
    height: 1.95,
    calcJohnBmi: function() {
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
}

var mike = {
    firstName: 'Mike',
    mass: 78,
    height: 1.69,

    calcMikeBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.mikeMass;
    }
}

john.calcJohnBmi();
mike.calcMikeBmi();
console.log(john, mike);
 */

/* LOOPS
 var BMW = ["X5", 115, "Family Saloon", "other"];

 for (var i = BMW.length - 1; i >= 0; i--){

    if(typeof BMW[i] !== "string"){
        continue;
    }
    console.log(BMW[i]);

 }
 */

function tipCalculator(bills) {
    var tip;
    if (bills < 50) {
        tip = bills * 0.2;
    } else if (bills > 50 && bills <= 200) {
        tip = bills * 0.15;

    } else {
        tip = bills * 0.1;
    }

    return tip;

}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
var totalAmount = [(bill[0] + tips[0]), (bill[1] + tips[1]), (bill[2] + tips[2])];
console.log(totalAmount, tips);