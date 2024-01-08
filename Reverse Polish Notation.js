 // Evaluate Reverse Polish Notation
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var runner = 0;
    var stack = [];
    var operations = ["+", "-", "/", "*"];
    
    function applyOperate(operationSymbol, operand1, operand2) {
        operand1 = +operand1; // to convert the string into numbers .. works on -numbers too.
        operand2 = +operand2;
        switch(operationSymbol) {
            case "+":
               stack.push(Math.trunc(operand1 + operand2)); // imp to use Math.trunc while putting into stack;
             break;
            case "-": 
                stack.push(Math.trunc(operand1 - operand2)); 
             break;
            case "*": 
                stack.push(Math.trunc(operand1 * operand2)); 
             break;
            case "/":
                stack.push(Math.trunc(operand1 / operand2)); 
             break;
            default:
                 console.log("not found");
                
        }
        return 0;
    }
    while(runner < tokens.length) {
      if (operations.includes(tokens[runner])) {
          // operation found - pop1 operation pop0 - push to stack
          var op2 = stack.pop(); // imp first removed is second operand
          var op1 = stack.pop();
          
          applyOperate(tokens[runner], op1, op2)
      } else {
          stack.push(tokens[runner]);
      }
        runner++;
    }
    return Math.trunc(stack[0]);
};
