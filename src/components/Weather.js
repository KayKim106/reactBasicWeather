import React from "react";
import { directive } from "@babel/types";

class Weather extends React.Component{
    render(){
        return(

        <div className="weather-wrapper">
            <div className="row weather-container">
                <div className="col-md-10">
                    <ul>
                        <li>
                            {this.props.country && this.props.city && <p>Location : {this.props.city} , {this.props.country}</p>}
                        </li>
                        <li>
                            {this.props.temperature && <p>Temperature : {this.props.temperature} </p>}
                        </li>
                        <li>
                            {this.props.humidity && <p> Humidity : {this.props.humidity}</p>}
                        </li>
                        <li>
                            {this.props.description && <p>Description : {this.props.description}</p>}
                        </li>
                        <li>
                            {this.props.error && <p>{this.props.error}</p>}
                        </li>
                    </ul>
                  
                  {this.props.temperature && 
                    <div>
                        <button className="btn weatherBtn pull-right" onClick={this.props.onTempTypeChange.bind(this)} value={this.props.type}>Change Type</button>
                    </div>
                  }
                
                </div>
            </div>
           
        </div>
        );
    }
}
export default Weather;