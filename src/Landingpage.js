import react from "react";
import auth from "./auth";
export const Landingpage = (props) => {
return (
    <div>
   <h1>Landing page</h1> 
    <button
     onClick={() =>{
          auth.login(() => {
            props.history.push("/app");
          })
        }
    }>login</button>
    
    </div>
)
}