import React, { useState } from "react";
import data from "../data.json";
import Block from "./Block";

const Dashboard = () => {
  const [timeframe, setTimeFrame] = useState("weekly");

  const setDaily = () => {
    setTimeFrame("daily");
  };

  const setMonthly = () => {
    setTimeFrame("monthly");
  };

  const setWeekly = () => {
    setTimeFrame("weekly");
  };

  const blocks = data.map(({ title, timeframes }) => {
    return (
      <Block
        key={title}
        title={title}
        timeframes={timeframes}
        selectedTimeframe={timeframe}
      />
    );
  });
  return (
    <main className="main">
      <div className="user-block">
        <div className="user">
          <img
            alt="user image"
            className="user-img"
            src={require("../images/image-jeremy.png")}
          />
          <div>
            <p className="text">Report for</p>
            <h1 className="user-name">Jeremy Robson</h1>
          </div>
        </div>
        <div className="btns-block">
          <button
            className={`${timeframe === "daily" ? "selected" : ""} btn`}
            onClick={setDaily}
          >
            Daily
          </button>
          <button
            className={`${timeframe === "weekly" ? "selected" : ""} btn`}
            onClick={setWeekly}
          >
            Weekly
          </button>
          <button
            className={`${timeframe === "monthly" ? "selected" : ""} btn`}
            onClick={setMonthly}
          >
            Monthly
          </button>
        </div>
      </div>
      {blocks}
    </main>
  );
};

export default Dashboard;
