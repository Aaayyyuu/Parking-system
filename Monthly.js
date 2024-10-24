import Pass from "./Pass.js"

class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price=vehicle.vehicleType === 'bike'?100 :(vehicle.vehicleType === 'cycle'?50:500)
        let timestamp=new Date()
        timestamp.setMonth(timestamp.getMonth()+1)
        this.expiry=timestamp
    }
}
export default Monthly