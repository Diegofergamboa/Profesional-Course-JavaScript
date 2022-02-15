"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Photoorientation;
(function (Photoorientation) {
    Photoorientation[Photoorientation["LandScape"] = 0] = "LandScape";
    Photoorientation[Photoorientation["Portrait"] = 1] = "Portrait";
    Photoorientation[Photoorientation["Square"] = 2] = "Square";
    Photoorientation[Photoorientation["Panorama"] = 3] = "Panorama";
})(Photoorientation || (Photoorientation = {}));
;
// Controlar el acceso a cada uno de los miembros.
class Picture {
    constructor(id, title, orientation) {
        this._id = id,
            this._title = title;
        this._orientation = orientation;
    }
    //Modificadores de acceso.
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(orientation) {
        this._title = this.title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}],
                    [title: ${this.title}],
                    [orientation: ${this.orientation}],
            `;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
;
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'platzi session', Photoorientation.Square);
album.addPicture(picture);
// Accediendo a los mienbros publicos.
// Al cambiar aquí se van a cambiar los diferentes valores debido a que son clases públicas, esto permite que se cambien los valores originales.
picture.id = 100; //Accediendo a través de los métodos de get y set.
picture.title = 'new title'; //Accediendo a través de los métodos de get y set.
// A partir de la 3.8 de ts, hemos podido tener métodos privados en nuestor código, lo cuál es excelente para poder darle más poder
