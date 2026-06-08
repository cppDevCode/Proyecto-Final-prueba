"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categorias", [
      { nombre: "Ciencia Ficcion" },
      { nombre: "Historia" },
      { nombre: "Fantasia" },
      { nombre: "Misterio" },
      { nombre: "Romance" },
      { nombre: "Terror" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
