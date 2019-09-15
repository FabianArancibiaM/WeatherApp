import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import {api_weather} from './../../constants/api_url';


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Santiago, Chile',
            data: null,
        };
        this.handleUpdateClick();
    }

        
    
    handleUpdateClick =() => {
        fetch(api_weather).then(
            response => { return response.json() }
        ).then(data =>{
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })
        });
    }
    render(){
        const {city, data} = this.state;
        return (<div>
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} />}
        </div>);
    }
}


export default WeatherLocation;