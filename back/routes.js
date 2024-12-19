const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("./Controllers/userController");


const {
  createAnnounce,
  getAllAnnounces,
  getAnnounceById,
  updateAnnounce,
  deleteAnnounce,
} = require("./Controllers/announceController");

const authMiddleware = require("./Middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

router.post("/create", authMiddleware, createAnnounce);
router.get("/announces", getAllAnnounces);
router.get("/announce/:id", getAnnounceById);
router.put("/announce/:id", authMiddleware, updateAnnounce);
router.delete("/announce/:id", authMiddleware, deleteAnnounce);

module.exports = router;