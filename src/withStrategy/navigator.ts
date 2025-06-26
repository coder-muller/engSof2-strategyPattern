import { StrategyRoute } from "./strategies/strategyRoute";

export class Navigator {
    constructor(private strategy: StrategyRoute) { }

    setStrategy(strategy: StrategyRoute): void {
        this.strategy = strategy;
    }

    calculateRoute(): void {
        this.strategy.calculate();
    }
}
