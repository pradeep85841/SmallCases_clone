import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./index.css";

export default function ItCard() {
  const content = useSelector((state) => state.IT);
  const dispatch = useDispatch();

  function getData() {
    return (dispatch) => {
      const payload = {
        method: "POST",
        body: JSON.stringify({ blockName: "itcatalogue" }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      fetch("/blockEstimate", payload)
        .then((res) => res.json())
        .then((json) => {
          let result = JSON.parse(JSON.stringify(json));
          dispatch({
            type: "ITBLOCK_DATA",
            data: result.result,
          });
        });
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {content.data.map((item, index) => (
        <>
          <p className="deposit-title">Minimum Investment Amount</p>
          <Typography component="p" variant="h6">
            ₹ {item.blockTotalPrice}
          </Typography>
        </>
      ))}

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
