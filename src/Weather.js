import React from "react";
import Form from "./Form";
import Forecast from './Forecast';

export default function Weather() {
    return (
        <div class="weather-app">
        <div class="card-body">
          <Form />

          <div class="row">
            <h1 class="display-6 city" id="city" autocomplete="off">New York</h1>
            <ul class="lead day">
              <li class="list-group-item">
                Last updated: <span id="day-time"> Sunday 23:42</span>
              </li>
              <li class="list-group-item" id="description">Broken clouds</li>
            </ul>
          </div>

          <div class="row">
            <div class="col">
              <div class="temperature">
                <div class="inline display-2">
                  <img src="https://openweathermap.org/img/wn/04d@2x.png" id="icon" alt="icon" /><span id="degree">28</span>
                </div>
                <div class="inline celsius">
                  <span id="celsius-link" class="active">°C</span> |
                  <span id="fahrenheit-link">°F</span>
                </div>
              </div>
            </div>

            <div class="col">
              <ul class="lead day">
                <li class="list-group-item" id="percipitation">Percipitation: 0%</li>
                <li class="list-group-item" id="humidity">Humidity: 49%</li>
                <li class="list-group-item" id="wind">Wind: 6.7 km/h</li>
              </ul>
            </div>
          </div>
        </div>

        <Forecast />
      </div>

    );
}