import { dbContext } from "../db/DbContext.js";
import { galaxiesService } from "./GalaxiesService.js";

class PlanetsService {
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }


}

export const planetsService = new PlanetsService()