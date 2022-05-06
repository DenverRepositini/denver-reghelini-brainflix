import './Main.scss'
import data from '../../Data/video-details.json'


let today = new Date(data[0].timestamp);

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

