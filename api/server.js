// api/server.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Harus di luar folder api/
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);

// ✅ Export as Vercel serverless function
module.exports = (req, res) => {
  server(req, res);
};
