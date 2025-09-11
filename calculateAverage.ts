function calculateAverage(numbers: number[]) {
    let sum = numbers.reduce((sum, item) => sum + item, 0);
    return sum / numbers.length;
}
