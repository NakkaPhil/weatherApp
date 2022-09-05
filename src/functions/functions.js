const kelvinUnit = 273.15

//Unit conversion
function KelvinToFarenheit(KUnit) {
    let tempF = Math.round((( KUnit - 273.15) * 9/5 )+ 32)
    return tempF
}

function KelvinToCelsius(KUnit) {
    let tempC = Math.round(((KUnit) - kelvinUnit))
    return tempC
}

export {KelvinToFarenheit, KelvinToCelsius}

