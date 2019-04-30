import React from "react";
import { directive } from "@babel/types";

class Form extends React.Component{
    render(){
        return(

        <form onSubmit={this.props.getWeather}>
            <input className="city-input" type="text" name="city" placeholder="City..." />
            <input className="country-input" type="text" name="country" placeholder="Country..." />
            <button className="btn btn-default weatherBtn">Get Weather</button>
        </form>
        );
    }
}
export default Form;