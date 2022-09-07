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

function getTime () {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })    
}

function getDate () {
    let options =  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options)    
}

export {KelvinToFarenheit, KelvinToCelsius, getTime, getDate}

