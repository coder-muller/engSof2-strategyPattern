import { StrategyRoute } from "./strategyRoute";

export class ShortRoute implements StrategyRoute {
    calculate(): void {
        console.log("Calculating the shortest route within the city...");
    }
}
