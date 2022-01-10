import { home } from "../../lib/models/home.js";
import { mobile } from '../../lib/models/mobile.js';
import { validateDevice } from '../../lib/others/utils.js';
// all data
let view = {};
let model = {};

let dispositivo = validateDevice();


if(dispositivo !== null) {
    mobile(view, model);
} else {
    home(view, model);
}

