import pageLoad from './page-load';
import './style.css';


const content = document.getElementById('content');
const body = document.getElementsByTagName('body');

pageLoad(content);

console.log('WELCOME TO OUR RESTAURANT PAGE');