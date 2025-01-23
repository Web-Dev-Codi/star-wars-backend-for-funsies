import characterData from "../starwars.js";
import StarWarsCharacter from "../models/starWarsCharacterModel.js";

export const getAllCharacters = async (req, res, next) => {
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

export const seedCharacters = async (req, res, next) => {
  try {
    const addSeed = characterData.map((b) => new StarWarsCharacter(b));
    await StarWarsCharacter.insertMany(addSeed);

    res.status(200).send({ message: "Characters Seeded to DB Bro", addSeed });
  } catch (error) {
    res.status(500).json({ error: "Light Saber Hit, You are not worthy" });
  }
};
