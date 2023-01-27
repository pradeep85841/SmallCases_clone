const https = require("https");

app.use(
  proxy("/api", {
    target: process.env.REACT_APP_BACKEND_URL,
    secure: true,
    changeOrigin: true,
    agent: new https.Agent({
      cert: fs.readFileSync("./ssl/server.crt"),
      key: fs.readFileSync("./ssl/server.key"),
    }),
  })
);
