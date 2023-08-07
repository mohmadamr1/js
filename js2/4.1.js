function fibonacci(n) {
    const fibonacciArray = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    return fibonacciArray;
}
const n = 10;
console.log(fibonacci(n));