import Pass from "./Pass.js";

class Daily extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price=vehicle.vehicleType === 'bike'? 10 :(vehicle.vehicleType === 'cycle'? 5 :50) 
        let timestamp= new Date()
        timestamp.setDate(timestamp.getDate()+1)
        this.expiry=timestamp
       }
}
export default Daily