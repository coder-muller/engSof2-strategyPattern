class Navigator {
    constructor(private routeType: string) { }

    calculateRoute(): void {
        if (this.routeType === "fast") {
            console.log("Calculating the fastest route on the main road...");
        } else if (this.routeType === "short") {
            console.log("Calculating the shortest route within the city...");
        } else if (this.routeType === "eco") {
            console.log("Calculating the route with the least fuel consumption...");
        } else {
            console.log("Unknown route type.");
        }
    }
}

const gps1 = new Navigator("fast");
gps1.calculateRoute();

const gps2 = new Navigator("short");
gps2.calculateRoute();

const gps3 = new Navigator("eco");
gps3.calculateRoute();
