const inputTipBtn = document.querySelectorAll(".inputTipBtn");
const billInput = document.querySelector(".billInput");
const peopleInput = document.querySelector(".peopleInput");
const totalAmount = document.getElementById("totalAmount");
const totalPerson = document.getElementById("totalPerson"); 
const resetBtn = document.querySelector(".resetBtn")
const peopleError = document.querySelector(".peopleError")

let billInputValue = 0;
let peopleInputValue = 1;
let inputTipBtnValue = 0;

const getTipAmount = () =>{
    let totalTipAmount = (billInputValue * inputTipBtnValue)/peopleInputValue
    if(isNaN(totalTipAmount) || totalTipAmount === Infinity || totalTipAmount === 0){
        totalAmount.innerText = "$" + (0).toFixed(2)
        resetBtn.disabled = true
    }else{
        totalAmount.innerText = "$" + totalTipAmount.toFixed(2)
        resetBtn.disabled = false
    }
}

const getTotalAmount = () =>{
    let total = (billInputValue + (billInputValue * inputTipBtnValue))/peopleInputValue
    if(isNaN(total) || total === Infinity){
        totalPerson.innerText = "$" + (0).toFixed(2)
    }else{
        totalPerson.innerText=  "$" + total.toFixed(2)
    }
}

inputTipBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if(btn.classList.contains("inputTipBtnCustom")){
                btn.addEventListener("change", ()=>{
                    inputTipBtnValue = (parseFloat(btn.value)/100)
                    getTipAmount()
                    getTotalAmount()
                    return inputTipBtnValue
                })
            }else{
                inputTipBtn.forEach((tip)=>{
                    if(!tip.classList.contains("inputTipBtnActive")){
                        btn.classList.add("inputTipBtnActive")
                    }else{
                        tip.classList.remove("inputTipBtnActive")
                    }
                })    
                inputTipBtnValue = (parseFloat(btn.value)/100)
                getTipAmount()
                getTotalAmount()
                return inputTipBtnValue
            }
        })
    })

billInput.addEventListener("input", ()=>{
    billInputValue = (parseFloat(billInput.value))
    getTipAmount()
    getTotalAmount()
    return billInputValue
})

peopleInput.addEventListener("input", ()=>{
    peopleInputValue = parseFloat(peopleInput.value)
    getTipAmount()
    getTotalAmount()
    if(peopleInputValue === 0){
        peopleInput.classList.add("peopleInputError")
        peopleError.classList.add("peopleErrorDisplay")
    }else{
        peopleInput.classList.remove("peopleInputError")
        peopleError.classList.remove("peopleErrorDisplay")
    }
    return peopleInputValue
})

resetBtn.addEventListener("click", ()=>{
    resetBtn.disabled = true
    totalAmount.innerText = "$" + (0).toFixed(2)
    totalPerson.innerText = "$" + (0).toFixed(2)
    resetValues()

})

const resetValues = () =>{
    billInputValue = 0;
    peopleInputValue = 1;
    inputTipBtnValue = 0;
}