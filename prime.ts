function prime(n: number) {
    if (n <= 1) return `${n} is not prime!`;
    if (n === 2 || n === 3) return `${n} is prime!`;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % 2 === 0) return `${n} is not prime!`;
    }
    return `${n} is prime!`;
}
