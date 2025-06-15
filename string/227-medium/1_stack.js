// this is stack approach to solve the problem

function calculate(s) {
    const stack = [];
    let currentNumber = 0;
    let operation = '+';

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        console.log(`This is current character ${currentChar}`);
        
        // Build multi-digit numbers
        if (!isNaN(currentChar) && currentChar !== ' ') {
            currentNumber = currentNumber * 10 + parseInt(currentChar);
            console.log(`Building number: ${currentNumber}`);
        }

        // When we hit an operator or end of the string
        let nan = isNaN(currentChar);
        console.log(`this is nan value for ${currentChar} : ${nan}`);
        
        if ((nan && currentChar !== ' ') || i === s.length - 1) {
            console.log(`Operator: '${operation}', Current Number: ${currentNumber}`);
            if (operation === '+') {
                stack.push(currentNumber);
                console.log(`Pushed +${currentNumber}, Stack: [${stack}]`);
            } else if (operation === '-') {
                stack.push(-currentNumber);
                console.log(`Pushed -${currentNumber}, Stack: [${stack}]`);
            } else if (operation === '*') {
                const top = stack.pop();
                const result = top * currentNumber;
                stack.push(result);
                console.log(`Multiplied: ${top} * ${currentNumber} = ${result}, Stack: [${stack}]`);
            } else if (operation === '/') {
                const top = stack.pop();
                const result = Math.trunc(top / currentNumber); // Truncate toward zero
                stack.push(result);
                console.log(`Divided: ${top} / ${currentNumber} = ${result}, Stack: [${stack}]`);
            }
            operation = currentChar;
            console.log(`operation value : ${operation}`);
            
            currentNumber = 0;
        }
    }

    // Final result: sum of stack values
    const result = stack.reduce((sum, num) => sum + num, 0);
    console.log(`Final Stack: [${stack}]`);
    console.log(`Result: ${result}`);
    return result;
}

console.log(calculate("3+2*2")); 
