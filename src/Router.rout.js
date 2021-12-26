import react from "react";
import { Route ,Redirect} from "react-router-dom";
import auth from "./auth";
export const Router = ({component: Component , ...rest}) => {
    return(
<Route 
 {...rest}
  render={props => {
        if(auth.isAuthenticated()) {

       return <Component {...props} />;
    }
   else {
   return(
    <Redirect
     to ={{
       
           pathname: "./",
           state: {
               from: props.location
           }
       }} 
   />
  )
}
}}
    />
    );
};