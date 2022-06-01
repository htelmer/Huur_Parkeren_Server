const { Router } = require("express");
const router = new Router();
const Area = require("../models").rentalArea;
const rentedArea = require("../models").rentedArea;
const areaOwner = require("../models").areaOwner;
const authMiddleware = require("../auth/middleware");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const { SALT_ROUNDS } = require("../config/constants");

router.get("/", async (request, response, next) => {
  try {
    const areas = await Area.findAll({
      include: [{ model: rentedArea }],
    });
    response.send(areas);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const specificArea = await Area.findByPk(parseInt(id), {
      include: [{ model: rentedArea }],
    });
    if (!specificArea) {
      res.status(404).send(`Area with id ${req.params.id} not found`);
    } else {
      res.send(specificArea);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
