import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlware/error.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  `Connnected to port ${PORT}`;
});
