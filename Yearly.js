import Pass from "./Pass.js";

class Yearly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price=vehicle.vehicleType === 'bike'?1000:(vehicle.vehicleType === 'cycle'?500:5000)
        let timestamp=new Date()
        timestamp.setFullYear(timestamp.getFullYear()+1)
        this.expiry=timestamp
    }
}
export default Yearly