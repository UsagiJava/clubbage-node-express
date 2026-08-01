# API Documentation

This project provides a simple REST API to get data about boxers, circuits, and players.

## Base URL
`http://localhost:3000/api`

---

## Endpoints

### Boxers
* `GET /animations` - Get a list of all boxer animation data.
* `GET /animations/:boxer` - Get animation details for one specific boxer by their name or ID.
* `PUT /animations/:boxer` - Put animation details update for one specific boxer by their name or ID.
* `POST /animations/:boxer` - Post animation details for one specific boxer by the passed name.

### Circuits
* `GET /circuits` - Get a list of all available circuits.
* `GET /circuits/:circuit` - Get specific details for one circuit by its name or ID.
* `PUT /circuits/:circuit` - Put circuit details update for one specific circuit by their name or ID.
* `POST /circuits/:circuit` - Post circuit details for one specific circuit by the passed name.

### Players
* `GET /players` - Get a list of all registered players.
* `GET /players/:playerId` - Get profile and stats for one player using their unique player ID.
* `PUT /players/:playerId` - Put profile details update for one specific player by their name unique player ID.

---

## Response Format
All endpoints return data in **JSON** format. If a resource is not found, the API returns a `404 Not Found` error.
