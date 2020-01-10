import { getFlowers } from "./FlowerProvider.js";
import FlowerList from "./FlowerList.js";
import { getRetailers } from "./RetailerProvider.js";
import RetailerList from "./RetailerList.js";
import { getDistributers } from "./DistributerProvider.js";

getFlowers()
.then(FlowerList)
getRetailers()
.then(getDistributers)
.then(RetailerList)