import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import ReactDOM from 'react-dom/client';
import RouterPages from './Routes/RouterPages';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App/> */}
   
//     <Home/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterPages/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
