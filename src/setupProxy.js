import proxy from "http-proxy-middleware";
module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "https://ec2-54-226-68-179.compute-1.amazonaws.com",
    })
  );
};
