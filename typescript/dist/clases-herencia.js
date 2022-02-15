"use strict";
var Photoorientation;
(function (Photoorientation) {
    Photoorientation[Photoorientation["LandScape"] = 0] = "LandScape";
    Photoorientation[Photoorientation["Portrait"] = 1] = "Portrait";
    Photoorientation[Photoorientation["Square"] = 2] = "Square";
    Photoorientation[Photoorientation["Panorama"] = 3] = "Panorama";
})(Photoorientation || (Photoorientation = {}));
;
// Superclase
class Item {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    // Modificadores de clase.
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
//Extendemos de la super clase item
// Lo hacemos con la sper clase item.
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}],
            [title: ${this.title}]
            [orientation: ${this._orientation}]`;
    }
    ;
}
;
// Ejemplo de extracción de información.
const Selfie = new Picture(55, 'Being yourself in a selfie', Photoorientation.Portrait);
// Llamando la nueva instancia creada.
console.log('Nueva INSTANCIA' + Selfie);
// Llamando el getter de la instancia Selfie
console.log('Probando el get de la instancia Selfie ' + Selfie.id);
// Llamando el getter de la instancia Selfie
Selfie.id = 155;
console.log('Probando en setter de la nueva instanci Selfie ' + Selfie.id);
class Album extends Item {
    constructor(id, title, pictures) {
        super(id, title); // Constrctor de la súper clase.
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
;
const newAlbum = new Album(1, 'Personal Pictures', []);
console.log('NEW ALBUM ' + newAlbum);
module.exports = {};
