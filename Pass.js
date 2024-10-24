class Pass{
    constructor(vehicle){
        this.id=`pass-${(new Date()).getTime()}`
        this.vehicle=vehicle
    }
    print(e){
        let ticket=`
            <h2>Pass</h2>
            <div>
                <label >Name</label>
                <label>${this.vehicle.owner.name}</label>
            </div>
            <div>
                <label>Vehicle Id</label>
                <label>${this.vehicle.id}</label>
            </div>
            <div>
                <label>Expiry</label>
                <label>${this.expiry}</label>
            </div>
        `
        document.querySelector('.ticket').innerHTML=ticket

    }
}
export default Pass