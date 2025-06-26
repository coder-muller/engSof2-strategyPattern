import { StrategyRoute } from "./strategyRoute";

export class EcoRoute implements StrategyRoute {
    calculate(): void {
        console.log("Calculating the route with the least fuel consumption...");
    }
}
