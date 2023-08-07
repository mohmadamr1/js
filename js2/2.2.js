function binaryArrayToNumber(array) {

    const reversedArray = array.slice().reverse();
  
    let result = 0;
    for (let i = 0; i < reversedArray.length; i++) {
      result += reversedArray[i] * Math.pow(2, i);
    }
  
    return result;
  }
  console.log(binaryArrayToNumber([0, 1, 0, 1]));