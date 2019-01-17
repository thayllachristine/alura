const patient = document.querySelector(`#patientPaulo`)
const weigth = patient.querySelector(`.patient__weight`).textContent
const heigth = patient.querySelector(`.patient__heigth`).textContent
const showIMC = patient.querySelector(`.patient__imc`)

let weigthValid = true
let heigthValid = true

if (weigth <= 0 || weigth >= 1000) {
    console.log(`Peso inválido!`)
    weigthValid = false
    showIMC.textContent = `Peso inválido!`
} else if (heigth <= 0 || heigth >= 3.00) {
    console.log(`Altura inválida!`)
    heigthValid = false
    showIMC.textContent = `Altura inválida!`
}

if (weigthValid && heigthValid) {
    let calcIMC = weigth / (heigth * heigth)
    showIMC.textContent = calcIMC
}