"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["LandScape"] = 0] = "LandScape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
const album = {
    id: 152,
    title: 'Meetups',
    description: 'On this album we are saving the meetings pictures'
};
const picture = {
    id: 47,
    title: 'Family time',
    orientation: PhotoOrientation.LandScape
};
let newPicture = {};
newPicture.id = 571;
newPicture.title = 'Moon';
console.log('album ', album);
console.log('picture ', picture);
console.log('picture ', newPicture);
