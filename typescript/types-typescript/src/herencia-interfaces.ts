export {}

enum PhotoOrientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

// Herencia.

interface Entity{
    id: number;
    title: string;
}
interface Album extends Entity{
    //Copia de los atributos por el extends con el nombre de la interface.
    description: string;
}

interface Picture extends Entity{
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 152,
    title: 'Meetups',
    description: 'On this album we are saving the meetings pictures'
};

const picture: Picture = {
    id: 47,
    title: 'Family time',
    orientation: PhotoOrientation.LandScape
};

let newPicture = {} as Picture;
newPicture.id = 571;
newPicture.title = 'Moon';

console.log('album ', album);
console.log('picture ', picture);
console.log('picture ', newPicture);
