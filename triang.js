function classificaTriangulo(lado1, lado2, lado3) {
    if (
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || 
        lado1 + lado2 <= lado3 || 
        lado1 + lado3 <= lado2 || 
        lado2 + lado3 <= lado1
    ) {
        return "none";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "equilateral";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log(classificaTriangulo(2, 2, 2)); // Saída: "equilateral"
console.log(classificaTriangulo(10, 10, 10)); 