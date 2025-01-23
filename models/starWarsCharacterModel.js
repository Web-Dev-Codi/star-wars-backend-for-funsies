import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  forceRating: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  combatSkill: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  pilotingAbility: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  diplomacyRating: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    species: {
      type: String,
      required: true,
    },
    homeworld: {
      type: String,
      required: true,
    },
    affiliation: {
      type: String,
      required: true,
    },
    stats: {
      type: StatsSchema,
      required: true,
    },
    weapons: [String],
    vehicles: [String],
    isJedi: {
      type: Boolean,
      default: false,
    },
    apprentices: [String],
    master: {
      type: String,
      default: "",
    },
    notableAchievements: [String],
  },
  {
    timestamps: true,
  },
);

const StarWarsCharacter = mongoose.model("StarWarsCharacter", CharacterSchema);

export default StarWarsCharacter;
