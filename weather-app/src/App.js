import React from "react";
import "./App.css";
import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Photo from "./components/Photo";
import Trip from "./components/Trip";
import Options from "./components/Options";

const WEATHER_API_KEY = "868916a5721bf84f1dcb02af34406f66";
const PIXABAY_API_KEY = "15673499-99eb954ced86f46b0b3b423b4";
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    state: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    photo: undefined,
    start: undefined,
    end: undefined,
    isSubmitted: false,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;
    const pixabay_api_call = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${city}&image_type=photo&category=travel`
    );
    const weather_api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const geonames_api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=kangtan1`
    );
    const pixabayData = await pixabay_api_call.json();
    const weatherData = await weather_api_call.json();
    const geonameData = await geonames_api_call.json();

    if (city && country && start && end) {
      this.setState({
        temperature: `${weatherData.main.temp} Celsius`,
        city: weatherData.name,
        state: geonameData.geonames[0].adminCode1,
        country: weatherData.sys.country,
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        photo: pixabayData.hits[0].webformatURL,
        start: start,
        end: end,
        isSubmitted: true,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        state: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        photo: undefined,
        error: "Please enter the values."
      });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="title-container">
          <Titles />
          <Form getWeather={this.getWeather} />
        </div>

        <div className="main-container">
          <div className="left-container">
            <Photo photo={this.state.photo} />
          </div>
          <div className="right-container">
            {" "}
            <Trip
              city={this.state.city}
              state={this.state.state}
              country={this.state.country}
              start={this.state.start}
              end={this.state.end}
            />
            {this.state.isSubmitted && (
              <Options useLocalState={this.useLocalState} />
            )}
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
