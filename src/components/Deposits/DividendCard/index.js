import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./index.css";

export default function DividendCard() {
  return (
    <React.Fragment>
      <p className="deposit-title">Minimum Investment Amount</p>
      <Typography component="p" variant="h6">
        3,024
      </Typography>
      <div style={{ paddingTop: "18%" }}>
        <Button className="investbutton" variant="contained" color="success">
          Invest Now
        </Button>
      </div>
      <br></br>
      <Button className="addbutton" variant="outlined">
        Add to Watchlist
      </Button>
    </React.Fragment>
  );
}
