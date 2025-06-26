import { Navigator } from "./navigator";
import { FastRoute } from "./strategies/fastRoute";
import { ShortRoute } from "./strategies/shortRoute";
import { EcoRoute } from "./strategies/ecoRoute";

const gps = new Navigator(new FastRoute());
gps.calculateRoute();

gps.setStrategy(new ShortRoute());
gps.calculateRoute();

gps.setStrategy(new EcoRoute());
gps.calculateRoute();
