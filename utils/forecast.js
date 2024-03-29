const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/ae79dc4fce1aad22d22615d14af883d2/'+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url , json : true},(error,{ data})=>{

        if(error){
            callback('Unable to connect to services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
