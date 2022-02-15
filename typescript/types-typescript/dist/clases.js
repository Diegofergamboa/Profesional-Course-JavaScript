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
class Picture {
    constructor(id, title, orientation) {
        this.id = id,
            this.title = title;
        this.orientation = orientation;
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
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'platzi session', Photoorientation.Square);
album.addPicture(picture);
// Accediendo a los mienbros publicos.
// Al cambiar aquí se van a cambiar los diferentes valores debido a que son clases públicas, esto permite que se cambien los valores originales.
picture.id = 100;
picture.title = 'new title';
album.title = 'Personal Activities';
