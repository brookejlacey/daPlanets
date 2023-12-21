import { galaxiesService } from "../services/GalaxiesService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { Logger } from "../utils/Logger.js";

// function middleware?

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxies)
    }

    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            const galaxy = await galaxiesService.createGalaxy(galaxyData)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async
}