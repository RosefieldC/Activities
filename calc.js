function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Erro: divisão por zero não é permitida.";
            }
            return num1 / num2;
        default:
            return "Erro: operador inválido.";
    }
}