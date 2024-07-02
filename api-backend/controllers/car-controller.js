
const db = require("../models");
const config = require("../auth.js");
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Car=db.car

exports.postCar=async (req, res)=>{
    try {
        const car = await Car.create({
          category: req.body.category,
          model: req.body.model,
          number_plate: req.body.number_plate,
          current_city:req.body.current_city,
          rent_per_hr:req.body.rent_per_hr,
          rent_histor:req.body.rent_history
        });
        res.status(200).json({"message":"car added successfully","car_id":car.id})
    }
    catch(err){
        console.log(`Error posting car ${err}`)
        res.status(500).send({ message: error.message });
    }
    
}

exports.carAvailable=async(req,res)=>{

}