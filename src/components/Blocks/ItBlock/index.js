import React from "react";
import Paper from "@mui/material/Paper";
import "./index.css";
import ItAsset from "../../../Assets/SCET_0005.png";
import { useNavigate } from "react-router-dom";

const ItBlock = () => {
  const navigate = useNavigate();

  const ItDashboard = () => {
    navigate("/itdashboard");
  };

  return (
    <>
      <Paper className="block1-it" variant="outlined" onClick={ItDashboard}>
        <div className="block1-it-container">
          <p className="text-14 card-title">
            <span className="highlited-label">Popular</span> - Viewed over 40K
            times in the last month
          </p>
          <div className="card-details">
            <img className="card-img" src={ItAsset} alt="itimg" />

            <div
              style={{
                padding: "0 5px",
                margin: " 5px ",
                marginRight: "auto",
              }}
            >
              <p className="text-14 card-description">
                Create wealth with equities, stay protected with Gold. The sweet
                spot
              </p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="statbox__title">Price</p>
                  <p className="statbox__value">₹ 250</p>
                </div>

                <div>
                  <p className="statbox__title">3Ycagr</p>
                  <p className="statbox__value">10.43%</p>
                </div>

                <div>
                  <p className="statbox__title">volatality</p>
                  <p className="statbox__value">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ItBlock;
