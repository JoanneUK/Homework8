//write a calculator app and then a test for this app

module.exports = function(num1, num2, op){
    switch(op){
        case 'add':
            return num1 + num2
            break;
        case 'minus':
            return num1 - num2;
            break;
        case 'mult':
            return num1 * num2;
            break;
        case 'div':
            return num1 / num2;
            break;
    }
}