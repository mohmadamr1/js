function basicOp(operation, num1, num2) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

console.log(basicOp("-", 5, 2));
