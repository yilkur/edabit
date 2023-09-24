const orderedMatrix = (a, b) => {
  const matrix = []
  let num = 1

  for (let rowIdx = 0; rowIdx < a; rowIdx++) {
    const row = []
    for (let columnIdx = 0; columnIdx < b; columnIdx++) {
      row.push(num)
      num++
    }
    matrix.push(row)
  }
  return matrix
}
