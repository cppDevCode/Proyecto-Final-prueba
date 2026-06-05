"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categorias", [
      { nombre: "Ciencia Ficcion", createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Historia", createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Fantasia", createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Misterio", createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Romance", createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Terror", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
