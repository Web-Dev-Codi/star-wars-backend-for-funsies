import mongoose from "mongoose";

const starWarsSchema = mongoose.Schema({
  name: String,
  species: String,
  homeworld: String,
  affiliation: String,
  stats: {
    forceRating: Number,
    combatSkill: Number,
    pilotingAbility: Number,
    diplomacyRating: Number,
  },
  weapons: [String],
  vehicles: ["X-wing Starfighter", "Snowspeeder"],
  isJedi: true,
  apprentices: ["Ben Solo", "Grogu"],
  master: "Obi-Wan Kenobi",
  notableAchievements: [
    "Destroyed the First Death Star",
    "Redeemed Darth Vader",
    "Restored the Jedi Order",
  ],
});

const starWarsCharacterModel = mongoose.model(
  "StarWarsCharacter",
  starWarsSchema,
);

export default starWarsCharacterModel;
