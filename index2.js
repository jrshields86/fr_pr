const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macAndCheeze: 14,
    soupAndSalad: 16
};

for(let key in dinner){
    //console.log(key)
    //console.log(dinner[key])
}
//console.log(Object.keys(dinner))
//console.log(Object.values(dinner))

const prices = Object.values(dinner);
let totalCost = 0;

for(let i = 0; i < prices.length; i++){
    totalCost += prices[i]
}
console.log(totalCost)