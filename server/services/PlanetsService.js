import { dbContext } from "../db/DbContext.js";

class PlanetsService {
    async getPlanetById(planetId) {
        const planets = await dbContext.Planets.find({ planetId })
        return planets
    }
}

export const planetsService = new PlanetsService()