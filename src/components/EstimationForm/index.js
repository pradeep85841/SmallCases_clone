import React, { Component, Fragment } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
      <Fragment>
        <div className="userEstimation">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <p>{this.state.response}</p>
            <form onSubmit={this.handleSubmit}>
              <p>
                <strong>stockfolio prediction</strong>
              </p>
              <TextField
                id="outlined-multiline-flexible"
                label="stock"
                multiline
                maxRows={4}
                type="text"
                value={this.state.stock}
                required
                onChange={(e) =>
                  this.setState({ stock: e.target.value.toUpperCase() })
                }
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Invested Amount"
                multiline
                maxRows={4}
                type="text"
                value={this.state.buyPrice}
                required
                onChange={(e) => this.setState({ buyPrice: e.target.value })}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="YYYY-MM-DD"
                multiline
                maxRows={4}
                type="text"
                placeholder="YYYY-MM-DD"
                required
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                title="Enter a date in this format YYYY-MM-DD"
                value={this.state.date}
                onChange={(e) => this.setState({ date: e.target.value })}
              />
              <TextField
                id="input-with-sx"
                label="Quantity"
                variant="standard"
                type="text"
                value={this.state.quantity}
                required
                onChange={(e) => this.setState({ quantity: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
          </Box>
          {this.state.isLoading ? (
            <div>Loading ...</div>
          ) : (
            <ul>
              <li>{this.state.cagr}</li>
              <li>{this.state.volatality}</li>
              <li>{this.state.analysis.DayHigh}</li>
              <li>{this.state.analysis.DayLow}</li>
              <li>{this.state.analysis.mHigh}</li>
              <li>{this.state.analysis.mlow}</li>
              <li>{this.state.prediction}</li>
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}

export default UserEstimation;
