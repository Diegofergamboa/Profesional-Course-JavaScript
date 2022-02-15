export {}

enum Photoorientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

class Picture {
    #id: number;
    #title: string;
    #orientation: Photoorientation;

    public constructor(
        id: number,
        title: string,
        orientation: Photoorientation )
        {
            this.#id = id,
            this.#title = title;
            this.#orientation = orientation;
        }
    
        public toString() {
            return `[id: ${this.#id}],
                    [title: ${this.#title}],
                    [orientation: ${this.#orientation}],
            `
        }
}



class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(
        id: number,
        title: string
    ) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'platzi session', Photoorientation.Square)
album.addPicture(picture);


// Accediendo a los mienbros publicos.
// Al cambiar aquí se van a cambiar los diferentes valores debido a que son clases públicas, esto permite que se cambien los valores originales.


