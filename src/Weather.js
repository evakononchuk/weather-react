import React from "react";

export default function Weather() {
    return (
        <div>
        <form id="city-form">
            <div class="row">
              <div class="col search">
                <input
                  type="text"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-search"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  id="search"
                  value="Search"
                  class="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <input src="./backspace.svg" type="image" id="backspace" alt='backspace' />
          </div>
    );
}