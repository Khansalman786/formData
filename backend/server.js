import dotenv from "dotenv";
import express from "express";
import userRoutes from "./router/UserRouter.js"; // Make sure to include `.js` if using ES modules
import db from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
db();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
