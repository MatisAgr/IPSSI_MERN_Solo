const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("./Controllers/userController");
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  getRecipeByUserId,
} = require("./Controllers/recipeController");
const authMiddleware = require("./Middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

router.post("/recipe", authMiddleware, createRecipe);
router.get("/recipes", authMiddleware, getRecipes);
router.get("/recipe/:id", getRecipeById);
router.put("/update/:id", updateRecipe);
router.delete("/delete/:id", deleteRecipe);
router.get("/recipes/:userId", getRecipeByUserId);

module.exports = router;