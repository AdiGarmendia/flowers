import { useRetailers } from "./RetailerProvider.js"
import Retailer from "./Retailer.js"
import { useDistributers } from "./DistributerProvider.js"


const contentTarget = document.querySelector(".retailers")
export const RetailerList = () => {
  const retailers = useRetailers()
  const distributers = useDistributers()

  const render = () => {
    contentTarget.innerHTML = retailers.map(retailer => {
      const foundDistributer = distributers.find(distributer => distributer.id === retailer.distributorId)
      const html = Retailer(retailer, foundDistributer)

            return html
        }).join("")
    }
    render()
  }
  export default RetailerList