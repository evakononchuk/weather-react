import React from "react";
import Form from "./Form";

export default function Weather() {
    return (
        <div class="weather-app">
        <div class="card-body">
          <Form />

          <div class="row">
            <h1 class="display-6 city" id="city" autocomplete="off"></h1>
            <ul class="lead day">
              <li class="list-group-item">
                Last updated: <span id="day-time"></span>
              </li>
              <li class="list-group-item" id="description"></li>
            </ul>
          </div>

          <div class="row">
            <div class="col">
              <div class="temperature">
                <div class="inline display-2">
                  <img src="" id="icon" /><span id="degree"></span>
                </div>
                <div class="inline celsius">
                  <a href="" id="celsius-link" class="active">°C</a> |
                  <a href="" id="fahrenheit-link">°F</a>
                </div>
              </div>
            </div>

            <div class="col">
              <ul class="lead day">
                <li class="list-group-item" id="percipitation"></li>
                <li class="list-group-item" id="humidity"></li>
                <li class="list-group-item" id="wind"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}