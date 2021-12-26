import react from 'react';
import Auth from "./auth";
// import {whithRouter} from  'react-router-dom';
// import './App.css';

export const Applayout =(props) =>{
  return(
  <div>
  <h1> app layout </h1>
  <button onClick ={ () => {
    Auth.logout(() => {
      props.history.push("/")
    })
  }}
  >
    logout
  </button>
  </div>
  );
};
