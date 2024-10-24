import Vehicle from "./Vehicle.js";

class Bike extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type='bike'
        
    }
}
export default Bike