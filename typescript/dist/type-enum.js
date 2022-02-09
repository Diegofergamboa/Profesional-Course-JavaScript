// Orientation to photos.
var Photoorientation;
(function (Photoorientation) {
    Photoorientation[Photoorientation["LandScape"] = 0] = "LandScape";
    Photoorientation[Photoorientation["Portrait"] = 1] = "Portrait";
    Photoorientation[Photoorientation["Square"] = 2] = "Square";
    Photoorientation[Photoorientation["Panorama"] = 3] = "Panorama";
})(Photoorientation || (Photoorientation = {}));
;
const landScape = Photoorientation.LandScape;
console.log('LandScape es: ' + landScape); // Muesta el value del index.
console.log('landScape', Photoorientation[landScape]); // Muestra el Key.
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["LandScape"] = 10] = "LandScape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
;
const portrait = PictureOrientation.Portrait;
console.log('Portrait es: ' + PictureOrientation.Portrait); // Muesta el value del index.
console.log('Portrait ' + PictureOrientation[portrait]); // Muestra el Key.
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUA"] = "usa";
    Country["Chile"] = "chi";
})(Country || (Country = {}));
;
const country = Country.Colombia;
console.log('country' + country);
// Se usa para valores limitados como semanas, meses, colores primarios, países.
