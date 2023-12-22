const express = require("express");

const router = express.Router();


/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/user/:id", userControllers.read);

// Route to add a new item
router.post("/user", userControllers.add);


// Route to modify an item
router.put("/user/:id", userControllers.edit);


// Route to delete an item
router.delete("/user/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
