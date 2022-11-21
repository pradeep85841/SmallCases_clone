import React, { Component, Fragment } from "react";
import TextField from "@mui/material/TextField";
//import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./index.css";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

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
        <Fragment>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <p>{this.state.response}</p>

            <form onSubmit={this.handleSubmit}>
              <Box
                display="grid"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <p>
                  <strong>stockfolio prediction</strong>
                </p>
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
              </Box>
              <Divider textAlign="left">
                <button type="submit">Submit</button>
              </Divider>
            </form>
            {this.state.isLoading ? (
              <div>Loading ...</div>
            ) : (
              <List component="nav" aria-label="mailbox folders">
                <ListItem>
                  <ListItemText primary={this.state.cagr} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.volatality} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.DayHigh} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.DayLow} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.mHigh} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.mlow} />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText primary={this.state.prediction} />
                </ListItem>
                <Divider />
              </List>
            )}
          </Box>
        </Fragment>
      </div>
    );
  }
}

export default UserEstimation;

/*  <ul>
<li>{this.state.cagr}</li>
<li>{this.state.volatality}</li>
<li>{this.state.analysis.DayHigh}</li>
<li>{this.state.analysis.DayLow}</li>
<li>{this.state.analysis.mHigh}</li>
<li>{this.state.analysis.mlow}</li>
<li>{this.state.prediction}</li>
</ul>*/
