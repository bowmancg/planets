import BaseController from "../utils/BaseController.js"
import { milkyWayService } from "../services/MilkyWayService.js"
import { planetsService } from "../services/PlanetsService.js"

export class MilkyWayController extends BaseController {
    constructor() {
        super('api/milkyWay')
        this.router
        
    }

}