import router from "./routes/routes.js";
import connectDB from "./utils/db.js";
import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlware/error.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Connnected to port ${PORT}`);
});
