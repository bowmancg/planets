import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"

class GalaxyService {

    async getGalaxy(query) {
        const galaxy = await dbContext.Galaxy.find(query)
        return galaxy
    }

    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxy.findById(galaxyId)
        return galaxy
    }

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxy.create(galaxyData)
        return galaxy
    }
}

export const galaxyService = new GalaxyService()