let inputRegisterNumber = document.getElementById('registerNumber')
let inputModel = document.getElementById('model')
let inputQntdAssentos = document.getElementById('seats')
let inputSpecialSeats = document.getElementById('specialSeats')
let buttonElement = document.getElementById('button-rg')


class Aviao{
    constructor(registerNumber,model,seatsQntd,specialSeats){
        this.registerNumber=registerNumber
        this.model=model
        this.seatsQntd=seatsQntd
        this.specialSeats=specialSeats
    }

}

let aeroporto=[]
export{aeroporto}

function register(){
    let obj = new Aviao(inputRegisterNumber,inputModel,inputQntdAssentos,inputSpecialSeats) 
    aeroporto.push(obj)
    window.location = "index.html"
}



