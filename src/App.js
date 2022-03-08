import "./App.css";
import Search from "./Search";
import GitHub from "./GitHub";

function App() {
  return (
    <div className="container">
      <div className="block-1">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/803/original/narrowSky.jpg?1646756226"
          id="banner-image"
          alt="cloudy sky"
        />
      </div>

      <Search />

      {/*Forecast*/}
      <div id="forecast"></div>
      <br />
      <GitHub />
    </div>
  );
}

export default App;
