const User = require("./models").user;
const RentalArea = require("./models").rentalArea;
const Booking = require("./models").booking;

const getUser = async () => {
  try {
    const user = await User.findByPk(2, {
      include: [
        { model: RentalArea, as: "favorites" },
        { model: RentalArea, as: "owner" },
        { model: Booking, include: [RentalArea] },
      ],
    });
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

getUser();
