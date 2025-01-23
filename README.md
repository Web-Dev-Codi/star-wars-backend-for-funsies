I'll create a Star Wars-themed CRUD API exercise for you to build. This will help you practice building RESTful endpoints and working with MongoDB/Mongoose.

Exercise: Star Wars Character Database API

Project Overview:
Create a REST API that manages a database of Star Wars characters. Users should be able to create, read, update, and delete character information through various endpoints.

Requirements:

1. Database Structure
   Create a Character model with the following fields:

- name (String, required)
- species (String, required)
- homeworld (String, required)
- affiliation (String, required) - (e.g., "Rebel Alliance", "Galactic Empire")
- stats:
  - forceRating (Number, 0-100)
  - combatSkill (Number, 0-100)
  - pilotingAbility (Number, 0-100)
  - diplomacyRating (Number, 0-100)
- weapons (Array of Strings)
- vehicles (Array of Strings)
- isJedi (Boolean)
- apprentices (Array of Strings)
- master (String)
- notableAchievements (Array of Strings)
- createdAt (Date, auto-generated)
- updatedAt (Date, auto-generated)

2. Required Endpoints

Base URL: `/api/characters`

Create these RESTful endpoints:

- GET all characters
- GET a single character by ID
- GET characters by species
- GET characters by affiliation
- POST create a new character
- PUT update a character by ID
- DELETE a character by ID
- GET characters with force rating above a certain threshold
- GET all Jedi characters

3. Additional Features to Implement:

- Input validation for all fields
- Error handling for invalid requests
- Proper HTTP status codes for responses
- Query parameters for filtering results
- Sorting capabilities for list endpoints
- Pagination for list endpoints

4. Bonus Challenges:

- Add search functionality by character name
- Implement field selection (allow clients to specify which fields to return)
- Add authentication middleware
- Create endpoints for batch operations
- Add rate limiting
- Implement request logging

Testing Requirements:

- Test all endpoints using Postman or similar tool
- Create at least 10 different character entries
- Test all CRUD operations
- Verify error handling
- Test pagination and filtering

Example Character Data Format:

```json
{
  "name": "Luke Skywalker",
  "species": "Human",
  "homeworld": "Tatooine",
  "affiliation": "Rebel Alliance",
  "stats": {
    "forceRating": 95,
    "combatSkill": 88,
    "pilotingAbility": 92,
    "diplomacyRating": 75
  },
  "weapons": ["Lightsaber", "Blaster"],
  "vehicles": ["X-wing Starfighter", "Snowspeeder"],
  "isJedi": true,
  "apprentices": ["Ben Solo", "Grogu"],
  "master": "Obi-Wan Kenobi",
  "notableAchievements": [
    "Destroyed the First Death Star",
    "Redeemed Darth Vader"
  ]
}
```

Expected API Responses:

- Successful requests should return appropriate data and 2xx status codes
- Failed requests should return error messages and appropriate 4xx/5xx status codes
- List endpoints should support pagination with "limit" and "skip" parameters
- Responses should include total count for paginated results

Remember to:

- Set up proper folder structure (routes, controllers, models)
- Use environment variables for configuration
- Implement proper error handling middleware
- Add input validation
- Include appropriate comments
- Follow RESTful naming conventions

This exercise will help you practice MongoDB/Mongoose operations, REST API design, and backend development principles while working with a fun Star Wars theme. Good luck!
