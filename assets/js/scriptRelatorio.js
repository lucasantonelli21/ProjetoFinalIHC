import {aeroporto} from './scriptCadastroAviao'

let show = document.getElementById('resultado')
let registroPesquisado = document.getElementById('registerNumber')
let buttonSearch = document.getElementById('search')


buttonSearch.addEventListener('click',function(e){
    e.preventDefault()
    for(let i=0;i<aeroporto.length;i++)
    {
        if(registroPesquisado==aeroporto.registerNumber)
        {
            show.innerHTML = aeroporto.registerNumber
        }
        else{
            alert("O número "+registroPesquisado+" não foi cadastrado.")
        }
    }
    window.location("index.html")

})
