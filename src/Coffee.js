const coffeeCost = (coffeeArr) => {
    return coffeeArr.reduce((total, count) => {
        return total + count*1.25;
    }, 0);
}

console.log(coffeeCost([1, 2, 3, 4, 5]));