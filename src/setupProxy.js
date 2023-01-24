//const proxy = require("http-proxy-middleware");
//import proxy from "http-proxy-middleware";
const https = require("https");

app.use(
  proxy("/api", {
    target: "54.226.68.179:5000",
    secure: true,
    changeOrigin: true,
    agent: new https.Agent({
      cert: fs.readFileSync("./ssl/server.crt"),
      key: fs.readFileSync("./ssl/server.key"),
    }),
  })
);
