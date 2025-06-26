import { StrategyRoute } from "./strategyRoute";

export class FastRoute implements StrategyRoute {
    calculate(): void {
        console.log("Calculating the fastest route on the main road...");
    }
}
