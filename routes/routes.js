import { Router } from "express";

const router = Router();

// GET all characters
router.get("/", getallCharacters);
// GET a single character by ID
// GET characters by species
// GET characters by affiliation
// POST create a new character
// PUT update a character by ID
// DELETE a character by ID
// GET characters with force rating above a certain threshold
// GET all Jedi characters
