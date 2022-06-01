const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../Auth/jwt");
const router = Router();
const authMiddleware = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");
const Area = require("../models").rentalArea;
const rentedArea = require("../models").rentedArea;
const areaOwner = require("../models").areaOwner;

router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send("Missing parameters!");
    }
    const securedPassword = bcrypt.hashSync(password, SALT_ROUNDS);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: securedPassword,
      phone,
    });
    delete newUser.dataValues["password"];
    const token = toJWT({ userId: newUser.id });
    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Misses email or password");
    }
    const user = await User.findOne({
      where: { email: email },
      include: [{ model: rentedArea }, { model: areaOwner, include: [Area] }],
    });
    if (!user) return res.status(400).send("Wrong credentials");
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      const token = toJWT({ userId: user.id });
      res.status(200).send({
        message: "You are logged in!!",
        token,
        user: user.dataValues,
      });
    } else {
      return res.status(400).send({ message: "Wrong credentials" });
    }
  } catch (error) {
    next(error);
  }
});
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
