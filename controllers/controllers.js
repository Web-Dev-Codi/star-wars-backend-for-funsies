import characterData from "../starwars.js";
import StarWarsCharacter from "../models/starWarsCharacterModel.js";

export const getAllCharacters = async (_req, res, _next) => {
  try {
    const allCharacters = await StarWarsCharacter.find();

    res.status(200).json({
      status: "success",
      results: allCharacters.length,
      data: allCharacters,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Unable to fetch all the Star Wars Peeps",
      error: error.message,
    });
  }
};

export const getCharacterById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findCharacter = await StarWarsCharacter.findById(id);

    if (!findCharacter) {
      const error = new Error(`Could not find Character with ID ${id}`);
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      status: "success",
      results: findCharacter.length,
      data: findCharacter,
    });
  } catch (error) {
    res.send(error);
  }
};

export const getCharacterSpecies = async (req, res, _next) => {};

export const getCharacterAffiliation = async (req, res, _next) => {};

export const createSingleCharacter = async (req, res, _next) => {};

export const updateCharacterByID = async (req, res, _next) => {};

export const deleteCharacterById = async (req, res, _next) => {};

export const getHighestForceRating = async (req, res, _next) => {};

export const getAllJedi = async (req, res, _next) => {};

export const seedCharacters = async (_req, res, _next) => {
  try {
    const addSeed = characterData.map((b) => new StarWarsCharacter(b));
    await StarWarsCharacter.insertMany(addSeed);

    res.status(200).send({ message: "Characters Seeded to DB Bro", addSeed });
  } catch (error) {
    res.status(500).json({ error: "Light Saber Hit, You are not worthy" });
  }
};
