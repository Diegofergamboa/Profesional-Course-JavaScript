// Crear una fotografía
function exampleCreatePicture(title, date, size) {
    // title
}
;
function createPicture(title, date, size) {
    console.log('create Picture using ' + title, date, size);
}
;
// // createPicture('my Birthday', '15 de abril de 2021', '1000x1000');
//Ejemplo de si no completamos el código.
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
// Para solucionar la falta de un parámetro vamos a colocar la parte de los parámetros opcionales. Para esto se coloca el interrogante '?' para dejarlos siendo opcionales.
// ECMA =>
// Flat Array Function.
let createPic = (title, date, size) => {
    return {
        title: title,
        date: date,
        size: size,
    };
};
const picture = createPic('Platzi session', '2020-04', '100x100');
console.log('picture con ECMAScript ' + picture);
