const order = window.prompt('Please enter your preferred froyou flavors separated by commas')
const strArr = order.split(',')
let froyoObj = {};

function froyoStats(arr){
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i]
        if(froyoObj[elem] === undefined){
            froyoObj[elem] = 0
        }
        froyoObj[elem]++
    }
    return froyoObj
}

console.log(froyoStats(strArr))