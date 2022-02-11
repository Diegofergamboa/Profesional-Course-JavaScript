// función para mostrar una fotografía.
export {}

enum PhotoOrientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

// Interfaz para mejorar el contrato que tenemos.
interface Picture { // palabra reservada interfaz
    title: string, 
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                date: ${picture.date}, 
                orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test title' ,
    date: '2020-10' ,
    orientation: PhotoOrientation.LandScape,
};

showPicture(myPic);
showPicture({
    title: 'Test title',
    date: 'april-2020',
    orientation: PhotoOrientation.Portrait,
    // extraPropertie: 'test propertie', // Error 
});


interface PictureConfig { // Se agrega '?' para opcionales.
    title?: string,
    date?: string,
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig){
    const pic = {title: '', date: ''}
    if(config.title) {pic.title = config.title;}
    if(config.date) {pic.date = config.date;}
    return pic;
}

let picture = generatePicture({});
console.log('picture' , picture);
picture = generatePicture({title: 'Tipical photo'});
console.log('picture' , picture);

// Propiedad readonly para que el valor sea de solo lectura, es decir inmutables.

// Interfaz: Usuario.

interface User {
    readonly id: number, // Con esta propiedad podemos determinar que la propiedad del objeto es de solo lectura.
    username: string,
    isPro: boolean,
};

let userLecture: User;
userLecture = {id: 152, username: 'diegofergamboa', isPro: true};
console.log('userLecture' + userLecture);


