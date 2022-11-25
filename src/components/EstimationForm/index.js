import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class UserEstimation extends Component {
  state = {
    response: "",
    stock: "",
    buyPrice: "",
    date: "",
    quantity: "",
    cagr: "",
    analysis: "",
    volatality: "",
    isLoading: false,
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/estimate");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const response = await fetch("/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock: this.state.stock,
        buyPrice: this.state.buyPrice,
        date: this.state.date,
        quantity: this.state.quantity,
      }),
    });
    const body = await response.json();

    this.setState({ cagr: body.cagr });
    this.setState({ analysis: body.analysis });
    this.setState({ volatality: body.volatality });
    this.setState({ prediction: body.prediction });
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <div className="userEstimation">
        <div className="FormHeading">
          <h1 className="FormTitle"> Stockfolio special</h1>
          <h2 className="MainHeading">
            {" "}
            All you need to build your research business{" "}
          </h2>
          <p className="SideHeading">
            Business-in-a-box solution with all functionalities for you to
            start, run and grow your curated portfolio business.
          </p>
        </div>

        <p>{this.state.response}</p>
        <Paper elevation={2} className="Elivatedpaper">
          <Paper variant="outline" className="Outlinepaper">
            <form onSubmit={this.handleSubmit}>
              <div className="FormFields">
                <TextField
                  id="outlined-textarea"
                  label="stock"
                  multiline
                  type="text"
                  value={this.state.stock}
                  required
                  onChange={(e) =>
                    this.setState({ stock: e.target.value.toUpperCase() })
                  }
                />
                <TextField
                  id="outlined-textarea"
                  label="Invested Amount"
                  multiline
                  type="text"
                  value={this.state.buyPrice}
                  required
                  onChange={(e) => this.setState({ buyPrice: e.target.value })}
                />
                <TextField
                  id="outlined-textarea"
                  label="YYYY-MM-DD"
                  multiline
                  type="text"
                  placeholder="YYYY-MM-DD"
                  required
                  pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                  title="Enter a date in this format YYYY-MM-DD"
                  value={this.state.date}
                  onChange={(e) => this.setState({ date: e.target.value })}
                />
                <TextField
                  id="outlined-textarea"
                  label="Quantity"
                  multiline
                  type="text"
                  value={this.state.quantity}
                  required
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                />
              </div>
              <br></br>
              <Divider textAlign="left">
                <Button variant="outlined" disableElevation type="submit">
                  Estimate
                </Button>
              </Divider>
              <br></br>
            </form>
            {this.state.isLoading ? (
              <div>Loading ...</div>
            ) : (
              <div className="ResponseDisplay">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>CAGR: {this.state.cagr}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>volatality: {this.state.volatality}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      DayHigh: {this.state.analysis.DayHigh}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      DayLow: {this.state.analysis.DayLow}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>mHigh: {this.state.analysis.mHigh}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>mlow: {this.state.mlow}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>prediction: {this.state.prediction}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
          </Paper>
        </Paper>
      </div>
    );
  }
}

export default UserEstimation;
