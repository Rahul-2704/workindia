module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("cars", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      number_plate: {
        type: Sequelize.STRING
      },
      current_city: {
        type: Sequelize.STRING
      },
      rent_per_hr:{
        type:Sequelize.INTEGER
      },
      rent_history:{
        type: Sequelize.JSON,
        defaultValue: [],

      }
      
      
    });
  
    return Car;
  };