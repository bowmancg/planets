import { planetsService } from "../services/PlanetsService.js";
import { SettlementController } from "./SettlementController.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router

            .get('/:planetId', this.getPlanetById)
            .post('', this.createPlanet)
    }

    async getPlanetById(req, res, next) {
        try {
            const planetId = req.params.planetId
            const planets = await planetsService.getPlanetById(planetId)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const planet = await planetsService.createPlanet(planetData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}