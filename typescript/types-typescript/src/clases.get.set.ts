export {}

enum Photoorientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

// Controlar el acceso a cada uno de los miembros.

class Picture {
    private _id: number;
    private _title: string;
    private _orientation: Photoorientation;

    public constructor(
        id: number,
        title: string,
        orientation: Photoorientation )
        {
            this._id = id,
            this._title = title;
            this._orientation = orientation;
        }
        //Modificadores de acceso.
        get id(){
            return this._id
        }
        set id(id: number){
            this._id = id;
        }
        get title(){
            return this._title
        }
        set title(orientation: string){
            this._title = this.title;
        }
        get orientation(){
            return this._orientation
        }
        set orientation(orientation: Photoorientation){
            this._orientation = orientation;
        }
    
        public toString() {
            return `[id: ${this.id}],
                    [title: ${this.title}],
                    [orientation: ${this.orientation}],
            `
        }
}



class Album {
    private id: number;
    private title: string;
    private pictures: Picture[];

    public constructor(
        id: number,
        title: string
    ) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
};

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'platzi session', Photoorientation.Square)
album.addPicture(picture);


// Accediendo a los mienbros publicos.
// Al cambiar aquí se van a cambiar los diferentes valores debido a que son clases públicas, esto permite que se cambien los valores originales.

picture.id = 100; //Accediendo a través de los métodos de get y set.
picture.title = 'new title'; //Accediendo a través de los métodos de get y set.


// A partir de la 3.8 de ts, hemos podido tener métodos privados en nuestor código, lo cuál es excelente para poder darle más poder

