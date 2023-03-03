const h2 = document.querySelector('h2')
const btn1 = document.querySelector('#Boton1')
let numero = 0
btn1.addEventListener('click', function (){
    const h2 = document.querySelector('h2')
    numero +=1;
    console.log(numero)
    if(numero == 1){
        let h21 = document.createElement('h3')
        h21.innerText = "Gracias por todo el amor que me das..."
        h2.appendChild(h21)
    }
    else if(numero == 2){
         let h22 = document.createElement('h3')
        h22.innerText = "Gracias por estar siempre ahi..."
        h2.appendChild(h22)
    }
    else if(numero == 3){
        let h23 = document.createElement('h3')
        h23.innerText = "Gracias por aparecer en mi vida..."
        h2.appendChild(h23)
    }
    else if(numero == 4){
        let h24 = document.createElement('h3')
        h24.innerText = "Gracias por todo..."
        h2.appendChild(h24)
    }
    else if (numero == 5){
        let h25 = document.createElement('h3')
        h25.innerText = "Sos mi lugar seguro"
        h2.appendChild(h25)
    }
})
