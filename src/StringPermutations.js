function possiblePermutations(n) {
    if (n === 1) return 1;
    return n * possiblePermutations(n - 1);
}

console.log(possiblePermutations("applsse".length));