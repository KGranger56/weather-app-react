import React from "react";
import "./GitHub.css";

export default function GitHub() {
  return (
    <div className="github">
      This project was coded by{" "}
      <a
        href="https://gallant-blackwell-d5a495.netlify.app/"
        target="_blank"
        className="kelly-link"
        rel="noreferrer"
      >
        {"Kelly Granger"}
      </a>
      , is open-sourced on{" "}
      <a
        href="https://github.com/KGranger56/weather-app-react"
        target="_blank"
        id="github-link"
        rel="noreferrer"
      >
        {"Github"}
      </a>
      , and hosted on{" "}
      <a
        href="https://app.netlify.com/"
        target="_blank"
        className="netlify-link"
        rel="noreferrer"
      >
        {"Netlify"}
      </a>
    </div>
  );
}
