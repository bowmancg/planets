import BaseController from "../utils/BaseController.js"
import { galaxyService } from "../services/GalaxyService.js"
import { planetsService } from "../services/PlanetsService.js"
import e from "express"

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
        .post('', this.createGalaxy)
        .get('', this.getGalaxy)
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

    async getGalaxyById(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const galaxy = await galaxyService.getGalaxyById(galaxyId)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const galaxy = await galaxyService.createGalaxy(galaxyData)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}