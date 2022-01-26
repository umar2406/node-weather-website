const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=6ca07044046c62f16d0e5587e87572b0&query='+latitude+','+longitude+'&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently '+response.body.current.temperature+' fahrenheit out. There is '+ response.body.current.precip+' % chance of rain')
        }
})
}

module.exports = forecast