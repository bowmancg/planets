import { planetsService } from "../services/PlanetsService.js";
import { SettlementController } from "./SettlementController.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
        .get('/:planetId/planets', this.getPlanetById)
    }

    async getPlanetById(req, res, next) {
        try {
            const planetId = req.params.planetId
            const planets = await planetsService.getPlanetById(planetId)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
}