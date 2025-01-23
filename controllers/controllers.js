import characterData from "../starwars.js";
import StarWarsCharacter from "../models/starWarsCharacterModel.js";

export const SeedCharacters = async (req, res, next) => {
  try {
    const addSeed = characterData.map((b) => new StarWarsCharacter(b));
    await StarWarsCharacter.insertMany(addSeed);

    res.status(200).send({ message: "Characters Seeded to DB Bro", addSeed });
  } catch (error) {
    res.status(500).json({ error: "Light Saber Hit, You are not worthy" });
  }
};
