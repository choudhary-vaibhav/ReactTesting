// index.js is a Bridge File 

import App, {Y } from "./App";
import ReactDOM from 'react-dom';
// Connect App Component with index.html
console.log(Y.a, Y.b, Y.c);
ReactDOM.render(<App/>, 
document.getElementById('root'));