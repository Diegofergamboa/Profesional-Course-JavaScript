// Orientation to photos.

enum Photoorientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

const landScape: Photoorientation = Photoorientation.LandScape;
console.log('LandScape es: ' +landScape); // Muesta el value del index.
console.log('landScape', Photoorientation[landScape]); // Muestra el Key.

enum PictureOrientation {
    LandScape = 10,
    Portrait,
    Square,
    Panorama,
};

const portrait: PictureOrientation = PictureOrientation.Portrait;
console.log('Portrait es: ' +PictureOrientation.Portrait); // Muesta el value del index.
console.log('Portrait ' + PictureOrientation[portrait]); // Muestra el Key.

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUA = 'usa',
    Chile = 'chi',
};

const country: Country = Country.Colombia;
console.log('country' + country);

// Se usa para valores limitados como semanas, meses, colores primarios, países.