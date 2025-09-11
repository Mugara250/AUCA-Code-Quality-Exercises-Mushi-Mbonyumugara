function mult(...numbers: number[]) {
  return numbers.reduce((product, number) => product * number, 1);
}
