// import { User, Album, Picture, PhotoOrientation } from './photo-app';

import { Album } from "./album";
import { PhotoOrientation } from "./photo-app";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'diegofergamboa', 'Diego', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.LandScape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);