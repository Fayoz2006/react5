import React from "react";
import "./../../CSS/production/Exchange.css";

const Exchange = () => {
  return (
    <div className="screen-exchange">
      <h1>Exchange</h1>
      <div className="currency">
        <div className="item">
          <p>From</p>
          <div>
            <select className="choose-valuet">
              <option value="RUB">RUB</option>
            </select>
            <form>
              <input type="text" />
              <span>RUB</span>
            </form>
          </div>
        </div>
        <div className="item">
          <p>To</p>
          <div>
            <select className="choose-valuet">
              <option value="RUB">RUB</option>
            </select>
            <form>
              <input type="text" />
              <span>RUB</span>
            </form>
          </div>
        </div>
      </div>
      <div className="result">
        <div>
          <b>100</b>
          <b>RUB</b>
        </div>
        <div className="arrow"></div>
        <div>
          <b>200</b>
          <b>RUB</b>
        </div>
      </div>
      <button className="exchange">Exchange</button>
    </div>
  );
};

export default Exchange;
