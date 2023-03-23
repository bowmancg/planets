import BaseController from "../utils/BaseController.js"
import { galaxyService } from "../services/GalaxyService.js"
import { planetsService } from "../services/PlanetsService.js"

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
        
    }

    async getGalaxy(req, res, next) {
        try {
            const query = req.query
            const galaxy = await galaxyService.getGalaxy(query)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}