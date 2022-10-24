class Aviao{
    constructor(registerNumber,model,seatsQntd,specialSeats){
        this.registerNumber=registerNumber
        this.model=model
        this.seatsQntd=seatsQntd
        this.specialSeats=specialSeats
    }

}
let aeroporto = []
function register(){
    let obj = new Aviao(1,"modelo",12,1) 
    aeroporto.push(obj)
    console.log(aeroporto)
}

register()