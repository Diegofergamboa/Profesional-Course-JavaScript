// never cuando existe un ciclo infinito, un error y demás para nuestro script
//Tipo never: 
function handleError(code, message) {
    // Process of the code.
    // Generate a message.
    throw new Error(`
        ${message}. Code: ${code}
    `);
}
try {
    handleError(404, 'No found'); // Esto para que nunca retorne un error.
}
catch (_a) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum
}
sumNumbers(10);
// Ciclo infinito.
