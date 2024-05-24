const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const Employee = require("../models/Employee");

// get, put/patch ,post , delete

router.post("/add-emp", employeeController.createEmployee);
router.get("/allemployees", employeeController.getEmployee);
router.get("/employee/byemp/:id", employeeController.singleEmployee);
router.put("/update/:id", employeeController.updateEmployee);
router.post("/signup", employeeController.createAuth);
router.post("/employee/remove/:id", employeeController.deleteEmployee);
router.get("/login", employeeController.getAuth);
module.exports = router;
