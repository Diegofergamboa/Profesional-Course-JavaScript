export {}
Photoorientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

class Picture {
    id: number,
    title: string,
    orientation: Photoorientation;

    constructor(
        id: number,
        title: string,
        orientation: Photoorientation )
        {
            this.id = id;
            this.title: title;
            this.orientation: orientation;
        }
    
        toString() {
            return `[id: ${this.id}],
                    [title: ${this.title}],
                    [orientation: ${this.orientation}],
            `
        }
}



class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(
        id: number,
        title: string
    ) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'platzi session', Photoorientation.Square)
album.addPicture(picture);
