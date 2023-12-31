function tribonacci(signature, n) {
    for (let i = 3; i < n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
    return signature.slice(0, n);
}

const startingSignature = [0, 2, 1];
const n = 8; 

console.log(tribonacci(startingSignature, n));