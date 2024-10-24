import Vehicle from "./Vehicle.js";

class Car extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type='car'
        
    }
}
export default Car