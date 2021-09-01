// Your code here
// function saturdayFun(string = 'roller-skate') {
//     return `This Saturday, I want to ${string}!`
// }

// function mondayWork(string = 'go to the office') {
//     return `This Monday, I will ${string}.`
// }

// function wrapAdjective (string = '*') {
//     return function(type = 'special') {
//         return `You are ${string}${type}${string}!`
//     }
// }

// let Calculator = {
//     add(a, b) {return a + b},
//     subtract(a, b) {return a - b},
//     multiply(a, b) {return a * b},
//     divide(a, b) {return a / b}
// }
// function actionApplyer(integer, array) {
//     if (array.length === 0) {
//         return integer
//     }
//     let result = integer
//     for (let i = 0; i < array.length; i++){
//         result = array[i](result)
//         console.log(result)
//     }
//     return result //forEach & map might work
// }

function saturdayFun(action = "roller-skate"){
    return `This Saturday, I want to ${action}!`
}

const mondayWork = function(action = 'go to the office'){
    return `This Monday, I will ${action}.`
}

function wrapAdjective(visual = '*'){
    return function(adjective){
        return `You are ${visual}${adjective}${visual}!`
    }
}

const Calculator = {
    add: function() {return 1 + 3},
    subtract: function() {return 1 - 3},
    multiply: function() {return 1 * 3},
    divide: function(){return 10 / 5},
}

let actionApplyer = (integer, arrayOfFunctions) =>{
    if (arrayOfFunctions.length === 0) {
        return integer
    }
    return Calculator.add(integer)
}