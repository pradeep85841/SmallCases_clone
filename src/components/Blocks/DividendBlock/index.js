import React from "react";
import Button from "@mui/material/Button";
import "./index.css";
import divident_logo from "../../../Assets/divident_logo.png";

const DividendBlockCard = () => {
  return (
    <>
      <div className="block1-it">
        <div className="block1-it-container">
          <p className="text-14 card-title">
            <span className="highlited-label">Popular</span> - Viewed over 25K
            times in the last month
          </p>
          <div className="card-details">
            <img className="card-img" src={divident_logo} alt="dividentimg" />

            <div style={{ padding: "0 5px", margin: " 5px " }}>
              <Button variant="contained">DIVIDEND</Button>
              <p className="text-14 card-description">
                Create wealth with equities, stay protected with Gold. The sweet
                spot
              </p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="statbox__title">Price</p>
                  <p className="statbox__value">₹ 420</p>
                </div>

                <div>
                  <p className="statbox__title">3Ycagr</p>
                  <p className="statbox__value">82.52%</p>
                </div>

                <div>
                  <p className="statbox__title">volatality</p>
                  <p className="statbox__value">High</p>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DividendBlockCard;
