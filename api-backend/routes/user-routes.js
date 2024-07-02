const { authJwt } = require("../middleware");
const controller = require("../controllers/user-controller.js");
const carController=require("../controllers/car-controller.js");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/test/all", controller.allAccess);
  
    app.get(
      "/api/test/user",
      [authJwt.verifyToken],
      controller.userBoard
    );

    app.post(
      "/api/test/postcar",
      [authJwt.verifyToken,authJwt.isAdmin],
      carController.postCar
    );

    app.get('/api/test/getcars',carController.getCars)
  };