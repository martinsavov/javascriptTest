/* function solve(){
let num = 1;
    
    while(num <=10){
        if(num % 2 === 0){
        console.log(num);
        }
     num++;
    }
}
solve(); 
 */

/*  function solve(input){

    let line = input.shift();

    while(line !== "end"){
        let num = Number(line);
        console.log(num);
        line = input.shift();
    }
 }

 solve(["-12","105","2131","5","end"]); */
/* 

function solve(input){

    let usr = input.shift();
    let pass = input.shift();

    let test = input.shift();
    while(pass !== test){
        test = input.shift();
    }
    console.log(`welcome user ${usr}`)
} 

solve([
"ms",
1,
2,
3,
4,
5,
1,
"ms"
]); */

/* 
function solve(input){

    let num = Number(input.shift());
    let k = 1;

    while(k <= num){
        console.log(k);
        k = 2 * k + 1;
    }
}
solve([
    31
]); 

 */
/* 
 function solve(input){
    let n = Number(input.shift());

    let counter = 0;
    let balance = 0.0;
    while(counter < n){
        let amount = Number(input.shift());
        if(amount < 0){
            console.log('Invalid op!');
            break;
        }
        balance+=amount;
        console.log(`Increase: ${amount.toFixed(2)} `);
        counter++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
 }
 solve([
    3,
    5.51,
    69.42,
    100
 ]); */

/* 
function solve(input){

    let n = input.shift();
    let counter = 0;
    let balance = 0.0;

    while(counter < n){
    let amount = input.shift();
    
    balance += amount;
    console.log(amount);
    counter++;
    }
    console.log(balance);
}
solve([
    5,
    120,
    45.55,
    150
]);
 */


/* 
 function solve(input){

    let n = input.shift();
    let max = 100;
    let counter = 0;

    while(counter < n){
        let num = input.shift();
        if(max > num){
            max = num;
        }
        counter++;
    }
    console.log(max);

 }
 solve([
     3,
     10,
     20,
     30

 ]);
  */








  