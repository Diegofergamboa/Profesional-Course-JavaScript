// type object.

let user: object; // Variable de tipo subfijo o explicito de tipo object.

user = {
    id: 1,
    username: 'Diego',
    firstName: 'Fernando',
    isPro: true,
};

// console.log('user', user.isPro);

// NO se puede acceder a valores específicos de las propiedades del object como lo son user.id, user.username, etc.
// Esto es por la diferencia entre Object y object.

// Object vs object /Clase de JS vs Clase de TS.

const myObject = { // Significa que TS está considerando el objeto de tipo object de JS
    id: 1,
    username: 'Diego',
    firstName: 'Fernando',
    isPro: true,
};

const isInstance = myObject instanceof Object;
// console.log(isInstance); // Clase Object de JS.
console.log(myObject.username);
// Se usaria object y no Object, cuando no se requiere mutabilidad en el data structure.