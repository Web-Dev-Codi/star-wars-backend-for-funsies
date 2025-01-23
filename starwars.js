const characterData = [
  {
    name: "Luke Skywalker",
    species: "Human",
    homeworld: "Tatooine",
    affiliation: "Rebel Alliance",
    stats: {
      forceRating: 95,
      combatSkill: 88,
      pilotingAbility: 92,
      diplomacyRating: 75,
    },
    weapons: ["Lightsaber", "Blaster"],
    vehicles: ["X-wing Starfighter", "Snowspeeder"],
    isJedi: true,
    apprentices: ["Ben Solo", "Grogu"],
    master: "Obi-Wan Kenobi",
    notableAchievements: [
      "Destroyed the First Death Star",
      "Redeemed Darth Vader",
      "Restored the Jedi Order",
    ],
  },
  {
    name: "Darth Vader",
    species: "Human",
    homeworld: "Tatooine",
    affiliation: "Galactic Empire",
    stats: {
      forceRating: 98,
      combatSkill: 95,
      pilotingAbility: 90,
      diplomacyRating: 40,
    },
    weapons: ["Lightsaber", "Force Choke"],
    vehicles: ["TIE Advanced x1", "Lambda-class Shuttle"],
    isJedi: false,
    apprentices: ["Starkiller"],
    master: "Darth Sidious",
    notableAchievements: [
      "Led the Great Jedi Purge",
      "Established Imperial Military",
      "Survived transformation into cyborg",
    ],
  },
  {
    name: "Yoda",
    species: "Unknown",
    homeworld: "Unknown",
    affiliation: "Jedi Order",
    stats: {
      forceRating: 100,
      combatSkill: 90,
      pilotingAbility: 70,
      diplomacyRating: 95,
    },
    weapons: ["Lightsaber", "Force Powers"],
    vehicles: [],
    isJedi: true,
    apprentices: ["Count Dooku", "Luke Skywalker", "Many others"],
    master: "N'Kata Del Gormo",
    notableAchievements: [
      "Grand Master of the Jedi Order",
      "Trained Jedi for over 800 years",
      "Preserved the Jedi teachings",
    ],
  },
  {
    name: "Han Solo",
    species: "Human",
    homeworld: "Corellia",
    affiliation: "Rebel Alliance",
    stats: {
      forceRating: 0,
      combatSkill: 85,
      pilotingAbility: 95,
      diplomacyRating: 60,
    },
    weapons: ["DL-44 Heavy Blaster Pistol"],
    vehicles: ["Millennium Falcon"],
    isJedi: false,
    apprentices: [],
    master: "",
    notableAchievements: [
      "Kessel Run in less than 12 parsecs",
      "Helped destroy both Death Stars",
      "General of the Rebel Alliance",
    ],
  },
  {
    name: "Leia Organa",
    species: "Human",
    homeworld: "Alderaan",
    affiliation: "Rebel Alliance",
    stats: {
      forceRating: 75,
      combatSkill: 80,
      pilotingAbility: 75,
      diplomacyRating: 95,
    },
    weapons: ["Blaster Pistol", "Force Powers"],
    vehicles: ["Tantive IV"],
    isJedi: true,
    apprentices: [],
    master: "Luke Skywalker",
    notableAchievements: [
      "Led the Rebel Alliance",
      "Princess of Alderaan",
      "Founder of the Resistance",
    ],
  },
  {
    name: "Obi-Wan Kenobi",
    species: "Human",
    homeworld: "Stewjon",
    affiliation: "Jedi Order",
    stats: {
      forceRating: 90,
      combatSkill: 92,
      pilotingAbility: 80,
      diplomacyRating: 85,
    },
    weapons: ["Lightsaber"],
    vehicles: ["Jedi Starfighter", "Boga"],
    isJedi: true,
    apprentices: ["Anakin Skywalker", "Luke Skywalker"],
    master: "Qui-Gon Jinn",
    notableAchievements: [
      "Defeated Darth Maul",
      "Survived Order 66",
      "Trained Luke Skywalker",
    ],
  },
  {
    name: "Chewbacca",
    species: "Wookiee",
    homeworld: "Kashyyyk",
    affiliation: "Rebel Alliance",
    stats: {
      forceRating: 0,
      combatSkill: 90,
      pilotingAbility: 85,
      diplomacyRating: 40,
    },
    weapons: ["Bowcaster"],
    vehicles: ["Millennium Falcon"],
    isJedi: false,
    apprentices: [],
    master: "",
    notableAchievements: [
      "Fought in the Clone Wars",
      "Co-pilot of the Millennium Falcon",
      "Helped destroy the Death Star",
    ],
  },
  {
    name: "Rey",
    species: "Human",
    homeworld: "Jakku",
    affiliation: "Resistance",
    stats: {
      forceRating: 95,
      combatSkill: 88,
      pilotingAbility: 85,
      diplomacyRating: 70,
    },
    weapons: ["Lightsaber", "Staff", "Force Powers"],
    vehicles: ["Millennium Falcon"],
    isJedi: true,
    apprentices: [],
    master: "Luke Skywalker",
    notableAchievements: [
      "Defeated Kylo Ren",
      "Discovered Luke Skywalker",
      "Restored Balance to the Force",
    ],
  },
  {
    name: "Kylo Ren",
    species: "Human",
    homeworld: "Chandrila",
    affiliation: "First Order",
    stats: {
      forceRating: 88,
      combatSkill: 85,
      pilotingAbility: 80,
      diplomacyRating: 45,
    },
    weapons: ["Crossguard Lightsaber", "Force Powers"],
    vehicles: ["TIE Silencer"],
    isJedi: false,
    apprentices: [],
    master: "Supreme Leader Snoke",
    notableAchievements: [
      "Master of the Knights of Ren",
      "Supreme Leader of the First Order",
      "Destroyed Luke's Jedi Temple",
    ],
  },
  {
    name: "Mace Windu",
    species: "Human",
    homeworld: "Haruun Kal",
    affiliation: "Jedi Order",
    stats: {
      forceRating: 92,
      combatSkill: 95,
      pilotingAbility: 75,
      diplomacyRating: 80,
    },
    weapons: ["Purple Lightsaber"],
    vehicles: ["Jedi Starfighter"],
    isJedi: true,
    apprentices: ["Depa Billaba", "Echuu Shen-Jon"],
    master: "Cyslin Myr",
    notableAchievements: [
      "Created Vaapad lightsaber form",
      "Member of the Jedi Council",
      "Defeated Darth Sidious in combat",
    ],
  },
];

export default characterData;