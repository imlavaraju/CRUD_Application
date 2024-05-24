const Employee = require("../models/Employee");
const Auth = require("../models/auth");

const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    console.log("post error");
    res.status(500).json({ message: "server error" });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.log("there error");
    return res.status(500).json({ messsage: "server error" });
  }
};

const singleEmployee = async (req, res) => {
  try {
    const getsingleEmployee = await Employee.findById(req.params.id);
    if (!getsingleEmployee) {
      return res.status(500).json({ message: "not found" });
    }
    res.status(200).json(getsingleEmployee);
  } catch (error) {
    res.status(500).json({ mesage: "sever error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const myemployee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
      city,
    });
    if (!myemployee) {
      return res.status(404).json({ message: "employee not found" });
    }
    res.status(200).json(myemployee);
  } catch (err) {
    res.status(505).json({ message: "server error vachindi" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ messge: "delete error" });
  }
};

const createAuth = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    const auth = new Auth({
      name,
      email,
      password,
      confirmpassword,
    });
    await auth.save();
    res.status(201).json(auth);
  } catch (err) {
    console.log("post error");
    res.status(500).json({ message: "server error" });
  }
};

const getAuth = async (req, res) => {
  try {
    const auth = await Auth.find();
    res.status(200).send(auth);
  } catch (err) {
    res.status(500).json({ message: "server Error while geting authors" });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  createAuth,
  getAuth,
  singleEmployee,
  updateEmployee,
  deleteEmployee,
};
