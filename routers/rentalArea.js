const { Router } = require("express");
const router = new Router();
const Area = require("../models").rentalArea;
const Favorites = require("../models").userFavorite;
const Booking = require("../models").booking;
const authMiddleware = require("../auth/middleware");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const { SALT_ROUNDS } = require("../config/constants");

router.get("/", async (request, response, next) => {
  try {
    const areas = await Area.findAll({
      include: [{ model: Booking }, { model: User, as: "favorites" }],
      order: [
        ["availableStartDate", "DESC"],
        ["id", "ASC"],
      ],
    });
    console.log("areas?", areas);
    response.status(200).send(areas);
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
      include: [{ model: Booking }, { model: User, as: "favorites" }],
    });
    if (!specificArea) {
      res.status(404).send(`Area with id ${req.params.id} not found`);
    } else {
      res.status(200).send(specificArea);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/newArea", authMiddleware, async (req, res, next) => {
  try {
    const {
      city,
      postalCode,
      streetName,
      houseNo,
      price,
      latitude,
      longtitude,
      availableStartDate,
      availableEndDate,
      availableSpots,
      description,
      image,
    } = req.body;
    console.log("post area", JSON.stringify(req.body));

    if (
      !city ||
      !postalCode ||
      !streetName ||
      !houseNo ||
      !price ||
      !availableEndDate ||
      !availableStartDate ||
      !availableSpots
    ) {
      res.status(400).send("Not enough information provided");
      return;
    }
    const ownerId = req.user.id;
    console.log("ownerId", ownerId);
    const newArea = await Area.create({
      city,
      postalCode,
      streetName,
      houseNo,
      price,
      latitude,
      longtitude,
      availableStartDate,
      availableEndDate,
      availableSpots,
      description,
      image,
      ownerId,
    });

    res.status(200).send(newArea);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});
router.post("/favorites", authMiddleware, async (req, res, next) => {
  try {
    const { userId, areaId } = req.body;
    console.log("userId", "areaId", userId, areaId);

    const specificFavs = await Favorites.findOne({ where: { userId, areaId } });
    const area = await Area.findByPk(parseInt(areaId));
    if (!specificFavs) {
      const favs = await Favorites.create({
        userId,
        areaId,
      });
      res.send(area);
    } else {
      const deleteFavs = await specificFavs.destroy();
      res.send(area);
    }

    // check if this combo already exists in favs

    // if it does, delete

    // if not, add.
  } catch (e) {
    next(e);
  }
});

router.post("/bookings", authMiddleware, async (req, res, next) => {
  try {
    const { tillWhen, areaId } = req.body;
    console.log("tillWhen", tillWhen);
    console.log("areaId", areaId);

    const userId = req.user.id;
    console.log("userId", userId);

    if (!tillWhen) {
      res.status(400).send("Not enough information provided");
      return;
    }
    const newBooking = await Booking.create({
      tillWhen,
      userId,
      areaId,
    });

    res.status(200).send(newBooking);
  } catch (e) {
    next(e);
  }
});

router.delete(
  "/savedAreas/:userId/delete/:areaId",
  authMiddleware,
  async (req, res, next) => {
    try {
      console.log("HERE");
      const { userId, areaId } = req.params;
      console.log("userId", "areaId", userId, areaId);

      const specificFavs = await Favorites.findOne({
        where: { userId, areaId },
      });
      const area = await Area.findByPk(parseInt(areaId));

      const deleteFavs = await specificFavs.destroy();
      res.send(area);

      // check if this combo already exists in favs

      // if it does, delete

      // if not, add.
    } catch (e) {
      next(e);
    }
  }
);

router.delete("/myArea/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id??", id);
    const areaToDelete = await Area.findByPk(id);

    if (!areaToDelete) return res.status(404).send("no area found");

    await areaToDelete.destroy();

    // look at delete status
    // should we send something?
    res.send({ message: "area deleted!" });
  } catch (e) {
    console.log(e.message);
  }
});

router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user.id;
  const areaToUpdate = await Area.findByPk(parseInt(id));
  if (!areaToUpdate.ownerId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this area" });
  }

  const {
    city,
    postalCode,
    streetName,
    houseNo,
    price,
    latitude,
    longtitude,
    availableStartDate,
    availableEndDate,
    availableSpots,
    description,
    image,
  } = req.body;

  const updatedArea = await Area.update({
    city,
    postalCode,
    streetName,
    houseNo,
    price,
    latitude,
    longtitude,
    availableStartDate,
    availableEndDate,
    availableSpots,
    description,
    image,
  });

  return res.status(200).send({ updatedArea });
});

module.exports = router;
