function calculateMatrixSum(matrix: number[][]) {
  return matrix.reduce(
    (sum, subMatrix) =>
      sum + subMatrix.reduce((sum, number) => sum + number, 0),
    0
  );
}