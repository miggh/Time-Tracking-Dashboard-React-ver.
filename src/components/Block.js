import React, { useState } from "react";
import ellipsis from "../images/icon-ellipsis.svg";

const Block = ({ title, timeframes, selectedTimeframe }) => {
  const cssTitle = title === "Self Care" ? "self-care" : title;
  const currentTime = timeframes[selectedTimeframe].current;
  const previousTime = timeframes[selectedTimeframe].previous;

  let timeframe;
  if (selectedTimeframe === "daily") {
    timeframe = "Day";
  } else if (selectedTimeframe === "weekly") {
    timeframe = "Week";
  } else if (selectedTimeframe === "monthly") {
    timeframe = "Month";
  }

  return (
    <div className={`outer-block ${cssTitle}`}>
      <div className="inner-block">
        <div className="block-title">
          <p className="activity">{title}</p>
          <img className="icon-more" src={ellipsis} alt="more" />
        </div>
        <div className="time-block">
          <p className="current-time">{`${currentTime} ${
            currentTime > 1 ? "hrs" : "hr"
          }`}</p>
          <p className="previous-time">{`Last ${timeframe} - ${previousTime}${
            previousTime > 1 ? "hrs" : "hr"
          }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
