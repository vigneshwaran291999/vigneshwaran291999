import React, { Component } from 'react';
import Weather from './Weather';
import Form from './form';
const api_key='f9705a2547d1d608126321113ec93908'
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          city:'',
          temp:'',
          max_temp:'',
          min_temp:'',
          desc:'',
          id:'',
          icon:'',
          error:false,
     
      }
    //   this.getWeather()

      this.weatherIcon={
        Thunderstorm:'fas fa-bolt',
        drizzel:'fas fa-cloud-rain',
        rain:'fas fa-cloud-showers-heavy',
        snow:'fas fa-snowflake',
        atmospheare:'fas fa-smog',
        clear:'fas fa-sun',
        clouds:'fas fa-cloud-sun',
      }
    }
             /* methods */
    getWeatherIcon(rangeId){
        switch(true){
         
            case rangeId>=200&&rangeId<=232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeId>=300&&rangeId<=321:
                this.setState({icon:this.weatherIcon.drizzel});
                break;
            case rangeId>=500&&rangeId<=531:
                this.setState({icon:this.weatherIcon.rain});
                break;
            case rangeId>=600&&rangeId<=622:
                this.setState({icon:this.weatherIcon.snow});
                break;
            case rangeId>=701&&rangeId<=781:
                this.setState({icon:this.weatherIcon.atmospheare});
                break;
            case rangeId===800:
                this.setState({icon:this.weatherIcon.clear});
                break;
        
            case rangeId>=801&&rangeId<=804:
                this.setState({icon:this.weatherIcon.clouds});
                break;
                default : this.setState({icon:this.weatherIcon.clouds});
        
        }
    }

            

    toCelcius=(temp)=>{
        return(
            Math.floor(temp)
        )
    }
   
    getWeather=async(e)=>{
        e.preventDefault();
        
        const city=e.target.elements.city.value
        if(city){
        const call_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        const response= await call_api.json()
        console.log(response)
        this.setState({
              city:response.name,
              temp:this.toCelcius(response.main.temp),
              max_temp:this.toCelcius(response.main.temp_max),
              min_temp:this.toCelcius(response.main.temp_min),
              desc:response.weather[0].main,
              id:response.weather[0].id,
              error:false
        })
        this.getWeatherIcon(this.state.id)
    }else{
        this.setState({error:true})
    }
    }
    

         
    
  render() {
    return (<div className='container-md  mx-auto  mt-3' >
          <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city} temp={this.state.temp} 
        min_temp={this.state.min_temp} max_temp={this.state.max_temp} 
        desc={this.state.desc} id={this.state.id}  icon={this.state.icon}/>
      
    </div>)
  }
}

export default App;

