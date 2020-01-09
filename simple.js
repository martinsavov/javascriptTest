/* function solve(input){
    let a = Number(input.shift());
    let g = (input.shift());

    if(g === "m"){
        if(a >=16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if(g === "f"){
        if(a >=16){
            console.log("Ms.")
        } else {
            console.log("Miss")
        }
    }
}

solve([15, "m" ]); */

/* 
function solve(input){

    let number = Number(input.shift());

    if(number >= -100 && number <=100 && number != 0){
        console.log("Yes");
    } else {
        console.log("No");
    }

}

solve(["0"]); */
/* 
function solve(input){

    let fruitOrVegetable = input.shift();


    switch(fruitOrVegetable){
        case "banana":
            console.log("fruit");
            break
        case "apple":
            console.log("fruit");
            break;

        case "tomato":
            console.log("vegetable");
            break;
        case "cucumber":
            console.log("vegetable");
            break;

        default:
            console.log("unknown");
            break;


    }


}
solve(["appl"]);
 */
/* 
function solve(input){
    let city = input.shift();
    let sales = Number(input.shift());
    let isError = false;

    if(city === "Sofia" ){
        if(sales  >= 0 && sales <= 500){
            sales = sales * 0.05;
        } else if(sales > 500 && sales <= 1000){
            sales = sales * 0.07;
        } else if(sales > 1000 && sales <= 10000){
            sales = sales * 0.08;
    } else if(sales > 10000){
        sales = sales * 0.12;
    } else {
        isError = true;
        console.log('error');
    }  
} else if(city === "Plovdiv" ){
        if(sales  >= 0 && sales <= 500){
            sales = sales * 0.05;
        } else if(sales > 500 && sales <= 1000){
            sales = sales * 0.07;
        } else if(sales > 1000 && sales <= 10000){
            sales = sales * 0.08;
    } else if(sales > 10000){
        sales = sales * 0.12;
    } else {
        isError = true;
        console.log('error')
    }
}

if(!isError) {
        console.log(sales.toFixed(2));
    }
}


solve([ "Sofia", 600]);
 */

 console.log('test');