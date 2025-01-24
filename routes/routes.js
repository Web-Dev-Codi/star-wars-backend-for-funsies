import { Router } from "express";
import {
  seedCharacters,
  getAllCharacters,
  getCharacterById,
  getCharacterSpecies,
  getCharacterAffiliation,
  createSingleCharacter,
  updateCharacterByID,
  deleteCharacterById,
  getHighestForceRating,
  getAllJedi,
} from "../controllers/controllers.js";

const router = Router();

// GET all characters

router.route("/").get(getAllCharacters);

// GET a single character by ID

router.route("/:id").get(getCharacterById);

// GET characters by species

router.route("/species/:species").get(getCharacterSpecies);

// GET characters by affiliation

router.route("/affiliation/:affiliation").get(getCharacterAffiliation);

// POST create a new character

router.route("/").post(createSingleCharacter);

// PUT update a character by ID

router.route("/:id").put(updateCharacterByID);

// DELETE a character by ID

router.route("/:id").delete(deleteCharacterById);

// GET characters with force rating above a certain threshold

router.route("/force/:force").get(getHighestForceRating);

// GET all Jedi characters

router.route("/jedi").get(getAllJedi);

// Seed DB with Star Wars characters
router.route("seed").post(seedCharacters);

export default router;
