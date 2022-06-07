"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rentalAreas",
      [
        {
          city: "Nieuwegein",
          postalCode: "3438LR",
          createdAt: new Date(),
          updatedAt: new Date(),
          houseNo: "31",
          availableStartDate: new Date(),
          availableEndDate: new Date(),
          price: 100,
          latitude: "52.050400",
          longtitude: "5.097110",
          availableSpots: 2,
          ownerId: 1,
          description: "It is available for two months from 1st of July",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG",
          streetName: "Polderhoeve",
        },
        {
          city: "Amsterdam",
          postalCode: "1025CN",
          createdAt: new Date(),
          updatedAt: new Date(),
          houseNo: "119",
          availableStartDate: new Date(),
          availableEndDate: new Date(),
          price: 98,
          latitude: "52.400970",
          longtitude: "4.941090",
          availableSpots: 1,
          ownerId: 2,
          description: "Included %21 vat. Availavle for 10 months",
          image:
            "https://img.freepik.com/free-photo/parking-lot-car-park-building-urban-areas_41043-2702.jpg?w=2000",
          streetName: "Lohuis",
        },
        {
          city: "Amsterdam",
          postalCode: "1061AH",
          createdAt: new Date(),
          updatedAt: new Date(),
          houseNo: "5",
          availableStartDate: new Date(),
          availableEndDate: new Date(),
          price: 105,
          latitude: "52.367140",
          longtitude: "4.835420",
          availableSpots: 1,
          ownerId: 1,
          description: "Included %21 vat. Available for 10 months",
          image:
            "https://amsterdamonline247.com/wp-content/uploads/2019/02/parking-places-in-amsterdam-1.jpg",
          streetName: "Karel Klinkenbergstraat",
        },
      ],
      {}
    );
    /* Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rentalAreas", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
