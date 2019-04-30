
import React from 'react';
import { directive } from '@babel/types';
import Titles from '../src/components/Titles'
import Form from '../src/components/Form'
import Weather from '../src/components/Weather'
import "./App.css"

const API_KEY ="e1c38b5e12594066805d89123bed27be";
class App extends React.Component{
  state={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'', 
    error:'',
    type:'',
  }

  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
    const data = await api_call.json();

    
      if(data.cod=='404'){
        this.setState({error:data.message})
      }
      else{
        if(city && country){
          this.setState({
            temperature:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:'',
            type:"celsius",
          });
        }else{
          this.setState({
            temperature:'',
            city:'',
            country:'',
            humidity:'',
            description:'',
            error:'Please type City or Country',
          });
        }
      }
    }
    onTempTypeChange=()=>{
      
      let type = this.state.type;
      let celsius = '';
      let fahrenheit = '';

      if(this.state.type=="fahrenheit"){
        fahrenheit=this.state.temperature;
        celsius = parseFloat((fahrenheit-32)*5/9).toFixed(2);

        this.setState({temperature:celsius})
        this.setState({type:"celsius"})
      }else{
        celsius=this.state.temperature;
        fahrenheit = parseFloat((celsius*9/5)+32).toFixed(2);
      
        this.setState({temperature:fahrenheit})
        this.setState({type:"fahrenheit"})
      }

    }

 
     

  render(){
    return(
      <div className="wrapper">
        <div className="row container">
          <div className="col-md-5 title-page">
            <Titles/>
          </div>
          <div className="col-md-7 form-page">
            <Form getWeather={this.getWeather} />
            <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            onTempTypeChange={this.onTempTypeChange}/>
          </div>
        </div>
      </div>
    );
  }
};
export default App;


    