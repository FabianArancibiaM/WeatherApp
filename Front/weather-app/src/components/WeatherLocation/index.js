import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props
        this.state ={
            city,
            data: null,
        };
        this.handleUpdateClick();
    }
    
    handleUpdateClick =() => {
        const api_weather = getUrlWeatherByCity(this.state.city);
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
        console.log(data)
        return (<div>
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} />}
        </div>);
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
};
export default WeatherLocation;