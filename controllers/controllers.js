import characterData from "./starwars.js";

export const SeedCharacters = async (req, res, next) => {
  try {
    const addSeed = characterData.map((b) => new starWarsCharacter(b));
    await Blog.insertMany(addSeed);

    res.send({ message: "Blogs added to database", addAllBlogs });
  } catch (error) {
    res.status(500).json({ error: "Blogs NOT added to DB dude" });
  }
};
