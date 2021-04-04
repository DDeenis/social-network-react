import reportWebVitals from './reportWebVitals';

import  { state, actions } from "./redux/state";
import renderAll from './render';

renderAll(state, actions)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
