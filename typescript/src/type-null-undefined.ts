let nullVariable: null; // Postfija
nullVariable = null;
nullVariable = 'hola'; // nunca se podrá generar otra variable a esta que sea distinto de null

let otherVariable = null; // Por lo que no se deja de manera explicita el tipo del dato se va a dejar colocar otro tipo de valor.
otherVariable = 'test';

//Undefined 
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'string';


let otherUndefinedVariable = undefined; // Esto se da porque como no está postfijo el tipo de variable que tenemos, podemos asignarle distintos tipos de valores.
otherUndefinedVariable = 1 ; // 1

// Es decir null y undefined pueden usarse como subtipos, tipos y valores de variables.

// Es decir undefined y null son subtipos o ramas de any.

// Null y undefined como subtipos.
// strictNullChecks - consiste en agregar un check para verificar las asignaciones de las variables. nos permite ver los errores que tenemos en las variables.
let albumName: string;
albumName: undefined;
albumName: null;
