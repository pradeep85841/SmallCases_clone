import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function ButtonAppBar(props) {
  const { handleLoginBtn, handleSignupBtn, handleAgentloginBtn } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="logo"
            src="https://api.logo.com/api/v2/images?format=webp&logo=logo_ee064ed8-ed27-49b4-ae6c-e00e028abca8&width=2000&height=1500&quality=100&margins=500&fit=contain&u=1665659629"
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stockfolio
          </Typography>

          <div
            style={{
              display: "flex",
            }}
          >
            <Button onClick={handleSignupBtn} color="inherit" font="bold">
              Sign Up
            </Button>

            <Button onClick={handleLoginBtn} color="inherit">
              Login
            </Button>

            <Button onClick={handleAgentloginBtn} color="inherit">
              Agent
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
