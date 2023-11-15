'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'book',
      [
        {
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          author: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          publisher: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          year: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          pages: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          image: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('book', null, {})
  },
};
