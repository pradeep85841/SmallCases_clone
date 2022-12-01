import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chart from "../../../../components/Charts/Chart.js";
import DividendCard from "../../../../components/Deposits/DividendCard";
import Orders from "../../../../components/Orders/Orders.js";
import ButtonAppBar from "../../../../components/Navbar/index.js";
import Paper from "@mui/material/Paper";
import divident_logo from "../../../../Assets/divident_logo.png";
import ItBlock from "../../../../components/Blocks/ItBlock";

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ButtonAppBar position="absolute" />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <div className="BlockOutline">
              <Grid container spacing={10}>
                <Grid item xs={6}>
                  <div className="block-details">
                    <div style={{ paddingTop: "8%", paddingLeft: "10%" }}>
                      <img
                        className="block-img"
                        src={divident_logo}
                        alt="dividendimg"
                      />
                    </div>
                    <div className="side-description">
                      <h1>Dividend Aristocrats</h1>
                      <p className="blockText-description">
                        Companies that have been consistently increasing
                        dividends. Extra goodness
                      </p>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="It-values">
                    <Grid container spacing={1}>
                      <Grid item xs={7}>
                        <div className="cagrposition">
                          <p className="statbox__cagr">3Ycagr</p>
                          <p className="statbox__per">10.43%</p>
                        </div>
                      </Grid>

                      <Grid item xs={4}>
                        <div className="statbox__vol">
                          <p>Low volatality</p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>

            <br></br>

            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <DividendCard />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <br></br>
            <div className="bottom-content">
              <h2>People Also Viewed</h2>
              <ItBlock />
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function DividendDashboard() {
  return <DashboardContent />;
}
