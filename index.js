// Add your functions here

function map(sourceArray, callback) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        result.push(callback(element))
    }
    return result
}

function reduce(sourceArray, callback, startingPoint) {
    let total = !!startingPoint ? startingPoint : sourceArray[0]
    for (let i = !!startingPoint ? 0 : 1; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total)
    }
    return total
}