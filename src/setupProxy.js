//const proxy = require("http-proxy-middleware");
import proxy from "http-proxy-middleware";
const https = require("https");

app.use(
  proxy("/api", {
    target: process.env.REACT_APP_API_URL,
    secure: true,
    changeOrigin: true,
    agent: new https.Agent({
      cert: fs.readFileSync("./cert/server_root.cert.pem"),
      key: fs.readFileSync("./cert/server_root.key.pem"),
      passphrase: "pesto",
      ca: fs.readFileSync("./cert/server.cert.pem"),
    }),
  })
);
