import { dbContext } from "../db/DbContext.js";

class PlanetsService {
    async getPlanetById(planetId) {
        console.log("getPlanetById: planetId:", planetId)
        const planets = await dbContext.Planet.find({ planetId })
        return planets
    }

    async createPlanet(planetData) {
        const planet = await dbContext.Planet.create(planetData)
        return planet
    }
}

export const planetsService = new PlanetsService()