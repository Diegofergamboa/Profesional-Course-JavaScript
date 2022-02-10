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