//for loop
function factorialize(num) {
    if (num === 0 || num === 1) return 1

    for (var i = num - 1; i >= 1; i--) {
        num *= i
    }
    return num
}

//while loop
function factorialize(num) {
    let result = num

    if (num === 0 || num === 1) return 1

    while (num > 1) {
        num--
        result *= num
    }
    return result
}

//recurscion
function factorialize(num) {
    if (num < 0) return -1
    else if (num === 1) return 1
    else {
        return num * factorialize(num - 1)
    }
}
