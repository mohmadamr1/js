function findNextSquare(sq) {
    const squareRoot = Math.sqrt(sq);
    if (Number.isInteger(squareRoot)) {

      const nextSquareRoot = Math.sqrt(sq) + 1;
      return nextSquareRoot * nextSquareRoot;
    } else {
     
      return -1;
    }
  }

  console.log(findNextSquare(114));