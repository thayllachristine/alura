const pat = document.querySelectorAll(`.patient`)

for (let i = 0; i < pat.length; i++) {
    let patient = pat[i]

    const weigth = patient.querySelector(`.patient__weight`).textContent
    const heigth = patient.querySelector(`.patient__heigth`).textContent
    const showIMC = patient.querySelector(`.patient__imc`)

    let weigthValid = true
    let heigthValid = true

    if (weigth <= 0 || weigth >= 1000) {
        console.log(`Peso inválido!`)
        weigthValid = false
        showIMC.textContent = `Peso inválido!`
        patient.classList.add(`patient__invalid`)
    } else if (heigth <= 0 || heigth >= 3.00) {
        console.log(`Altura inválida!`)
        heigthValid = false
        showIMC.textContent = `Altura inválida!`
        patient.classList.add(`patient__invalid`)
    }

    if (weigthValid && heigthValid) {
        let calcIMC = weigth / (heigth * heigth)
        calcIMC = calcIMC.toFixed(2)
        showIMC.textContent = calcIMC
    }
}