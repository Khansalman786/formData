import { Router } from "express";
import User from "../model/userSchema.js";

const router = Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.json(users); // Send the users as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

router.post("/user", async (req, res) => {
  const { Name, Country, Gender, Address, Password } = req.body;
  const user = new User({ Name, Country, Gender, Address, Password });
  try {
    const newUser = await user.save(); // Save the new user to the database
    res.status(201).json(newUser); // Send the created user as a JSON response
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser); // Send the updated user as a JSON response
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});



router.delete("/user/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {

            return res.status(404).json({ message: "User not found" });
        }   
        res.json({ message: "User deleted" }); // Send a success message
    } catch (error) {

        res.status(500).json({ message: error.message }); // Handle errors
    }
});

export default router;
