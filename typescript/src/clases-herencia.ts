export {}

enum Photoorientation {
    LandScape,
    Portrait,
    Square,
    Panorama,
};

// Superclase

class Item {
    protected id: number;
    protected title: string;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title
    }
    
    get id(id: number){
        return this._id
    }
    set id(id: number){
        this._id = id;
    }
    get title(title: string){
        return this._title = title
    }
    set title(title: string){
        this._title = title;
    }
}

//Extendemos de la super clase item
class Picture extends Item{ 
    private _orientation: Photoorientation;

    public constructor(
        orientation: Photoorientation )
        super(id, title;)
        
        //Modificadores de acceso.
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

