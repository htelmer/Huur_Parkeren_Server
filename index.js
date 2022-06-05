const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const jsonParser = express.json();
const authRouter = require("./routers/auth");
const rentalArea = require("./routers/rentalArea");
const favoriteRouter = require("./routers/favorite");
const authMiddleWare = require("./Auth/middleware");
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(jsonParser);
app.use(corsMiddleWare());
app.use("/auth", authRouter);
app.use("/area", rentalArea);
app.use("/favorite", favoriteRouter);
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});
const PORT = 4000;
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
