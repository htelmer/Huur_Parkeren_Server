const { Router } = require("express");
const router = new Router();
const Area = require("../models").rentalArea;
const Favorites = require("../models").userFavorite;
const Booking = require("../models").booking;
const authMiddleware = require("../auth/middleware");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const { SALT_ROUNDS } = require("../config/constants");

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = parseInt(req.params.id);
    console.log("id??", id);
    const favToRemove = await Favorites.findByPk(parseInt(id));
    console.log("favtoremove", favToRemove);
    if (!favToRemove) return res.status(404).send("no favs found");

    const removeFavs = await favToRemove.destroy();
    console.log("removeFavs", removeFavs);

    // look at delete status
    // should we send something?
    res.status(200).send(removeFavs, { message: "favs deleted!" });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
