import React from 'react';
import ReactDOM from 'react-dom';
import { Landingpage } from './Landingpage';
import {Applayout} from './Applayout'; 
import {
  BrowserRouter,
  Route,
  Switch 
} from "react-router-dom";
import './index.css';
import {Router} from './Router.rout';

function App(){
  return(
    <div className="App">
      {/* <h1>this main page</h1> */}
      <Switch>
         <Route exact  path= "/" component={Landingpage} />

         <Router exact path="/app" component={Applayout} />

       <Route path ="" component={() => "404 NOT FOUND"} />
       </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
rootElement
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

