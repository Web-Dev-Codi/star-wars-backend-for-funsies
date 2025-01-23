import { Router } from "express";
import { SeedCharacters } from "../controllers/controllers.js";

const router = Router();

// GET all characters
// router.route("/").get(getAllCharacters);
// GET a single character by ID
// GET characters by species
// GET characters by affiliation
// POST create a new character
// PUT update a character by ID
// DELETE a character by ID
// GET characters with force rating above a certain threshold
// GET all Jedi characters

// Seed DB with Star Wars characters
router.post("/seed", SeedCharacters);

export default router;
