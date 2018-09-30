module.exports = function solveSudoku(matrix) {
  function declare(row,col) {
    let result = [];
    let block = {
        row: Math.floor(row/3)*3,
        col: Math.floor(col/3)*3,
    };

    for (let i = 0; i < 9; i++) {
        result.push([matrix[row][i], matrix[i][col], matrix[block.row + i % 3][block.col + Math.floor(i / 3)]])
    }
    return result;
}

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          let declarations = declare(row, col);
            for (let declaration of declarations) {
                matrix[row][col] = declaration;
                solveSudoku(matrix);
            }  
        }
    }
}
return matrix;
}
