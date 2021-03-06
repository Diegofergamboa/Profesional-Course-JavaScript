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
function showPicture(picture) {
    console.log(`[title: ${picture.title}, 
                date: ${picture.date}, 
                orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test title',
    date: '2020-10',
    orientation: PhotoOrientation.LandScape,
};
showPicture(myPic);
showPicture({
    title: 'Test title',
    date: 'april-2020',
    orientation: PhotoOrientation.Portrait,
    // extraPropertie: 'test propertie', // Error 
});
function generatePicture(config) {
    const pic = { title: '', date: '' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Tipical photo' });
console.log('picture', picture);
;
let userLecture;
userLecture = { id: 152, username: 'diegofergamboa', isPro: true };
console.log('userLecture' + userLecture);
