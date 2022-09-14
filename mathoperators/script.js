
Number.prototype.add = function (a){
    return this + a
}

Number.prototype.subtract = function (a){
    return this - a
}

Number.prototype.divide = function (a){
    return this/a
}

Number.prototype.multiplay = function (a){
    return this*a
}



const result = (5).add(3).subtract(4).divide(2).multiplay(10)

console.log(result);