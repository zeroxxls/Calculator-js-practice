const sum = (a, b) =>{
    return a + b
}

const minus = (a, b) =>{
    return a - b
}

const divide = (a, b) =>{
    return a / b
}

const multiply = (a, b) =>{
    return a * b
}

const power = (a, b) =>{
    return a ** b
}

const max = (arr) =>{
    return arr.sort((a,b) =>{
        return b - a;
    })[0];
};

const min = (arr) =>{
    return arr.sort((a,b) =>{
        return a - b;
    })[0];
};

const round = (num = 1.24) =>{
    const str = `${num}`;
    const arr = str.split(".");
    for(let i = 0; i < arr[1].length; i++) {
        if(arr [1][i] < 5){
            break;
        }
        if(arr[1][i] > 5){
            arr[0] = +arr[0] + 1;
            break;
        }
        if(i === arr[1].length - 1){
            arr[0] = +arr[0] + 1;
        }
    }
    return +arr[0];
}

const floor = (num) => {
    const arr = `${num}`.split(".");
    if(arr.length === 1){
        return num;
    }
    return +arr[0];
}

const ceil = (num) => {
    const arr = `${num}`.split(".");
    if(arr.length === 1){
        return num;
    }
    return +arr[0] + 1;
}

const percent = (num, perc) =>{
    return (num / 100) * perc
}

const isOdd = (num) =>{
    return !!(num % 2);
}

const isEven = (num) =>{
    return !(num % 2);
}

const Calculator = {
    sum,
    minus,
    divide,
    multiply,
    power,
    max,
    min,
    round,
    floor,
    ceil,
    percent,
    isOdd,
    isEven,
}