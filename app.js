import Student from "./user/Student.js";
import Faculty from "./user/Faculty.js";
import Bike from "./vehicle/Bike.js";
import Cycle from "./vehicle/Cycle.js";
import Car from "./vehicle/Car.js";
import Daily from "./pass/Daily.js";
import Yearly from "./pass/Yearly.js";
import Monthly from "./pass/Monthly.js";

document.addEventListener("DOMContentLoaded",()=>{

    const name=document.getElementById("userName")
    const contact=document.getElementById("userContact")
    const role=document.getElementById("role")
    const saveUserBtn=document.getElementById("saveUser")
    saveUserBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        const user = role.value==='student'?new Student(name.value,contact.value):new Faculty(name.value,contact.value)
        console.log(user)
        document.querySelector('.user').style.display='none'

    


    const vehicleId=document.getElementById("vehicleId")
    const vehicleType=document.getElementById("type")
    const vehicleSaveBtn=document.getElementById("savevehicle")

    vehicleSaveBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        let vehicle=null
        switch(vehicleType.value){
            case 'bike':vehicle=new Bike(vehicleId.value,user)
            break;
            case 'cycle':vehicle=new Cycle(vehicleId.value,user)
            break;
            case 'car':vehicle=new Car(vehicleId.value,user)
            break;
        }
        console.log(vehicle)
        document.querySelector('.vehicle').style.display='none'

        const dailychoice=new Daily(vehicle)
        const dailyChoiceBtn=document.createElement('INPUT')
        dailyChoiceBtn.setAttribute('type','button')
        dailyChoiceBtn.setAttribute('value','Daily'+dailychoice.price)
        dailyChoiceBtn.addEventListener('click',()=>{
            dailychoice.print()
        })
        const passChoice=document.querySelector('.pass-choice')

        const monthlychoice=new Monthly(vehicle)
        const monthlyChoiceBtn=document.createElement('INPUT')
        monthlyChoiceBtn.setAttribute('type','button')
        monthlyChoiceBtn.setAttribute('value','Monthly'+monthlychoice.price)
        monthlyChoiceBtn.addEventListener('click',()=>{
            monthlychoice.print()
        })

        const yearlychoice=new Yearly(vehicle)
        const yearlyChoiceBtn=document.createElement('INPUT')
        yearlyChoiceBtn.setAttribute('type','button')
        yearlyChoiceBtn.setAttribute('value','Yearly'+yearlychoice.price)
        yearlyChoiceBtn.addEventListener('click',()=>{
            yearlychoice.print()
        })

        
        passChoice.appendChild(dailyChoiceBtn)
        passChoice.appendChild(monthlyChoiceBtn)
        passChoice.appendChild(yearlyChoiceBtn)
    })
})
})
