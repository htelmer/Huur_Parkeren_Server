const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const authHeader = req.headers.authorization?.split(" ");

  if (authHeader && authHeader[0] === "Bearer" && authHeader[1]) {
    try {
      const data = toData(authHeader[1]);
      console.log("data", data);

      const user = await User.findByPk(data.userId);

      req.user = user;

      next();
    } catch (e) {
      return res.status(400).send("Invalid token");
    }
  } else {
    return res.status(401).send("you must send a token in the header");
  }
}

module.exports = auth;
