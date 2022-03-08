import "./App.css";
import Search from "./Search";
import GitHub from "./GitHub";

function App() {
  return (
    <div className="container">
      <div className="block-1">
        <img src="images/narrowSky.jpg" id="banner-image" alt="cloudy sky" />
      </div>

      <Search />

      <div className="block-3">
        <div className="box-1">
          <h1 id="city">Work</h1>
        </div>
        <div className="box-2" id="current-description">
          Clear Sky
        </div>
      </div>

      <div className="block-4">
        <div className="box-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Clear"
            id="current-emoji"
          />
        </div>
        <div className="box-2">
          <strong id="current-temp">50</strong>
          <a href="/" id="fahrenheit-link" className="active">
            °F
          </a>
        </div>
        <div className="box-3">
          <ul>
            <li>
              High: <span id="current-high">15</span>
            </li>
            <li>
              Low: <span id="current-low">10</span>
            </li>
          </ul>
        </div>
        <div className="box-4">
          <ul>
            <li>
              Humidity: <span id="current-humidity">15</span>%
            </li>
            <li>
              Wind: <span id="current-wind">10</span> mph
            </li>
          </ul>
        </div>
      </div>

      {/*Forecast*/}
      <div id="forecast"></div>
      <GitHub />
    </div>
  );
}

export default App;
