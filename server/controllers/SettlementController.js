import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { settlementsService } from "../services/SettlementsService.js";

export class SettlementController extends BaseController {
    constructor() {
        super('api/settlements')
        this.router

    }

    async getPlanetById(req, res, next) {
        
    }
}