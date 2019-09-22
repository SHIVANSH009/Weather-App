const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hpYjc2NTY3IiwiYSI6ImNrMHIwM2p5ZjAwZHQzY21qdHl3NTMxdTYifQ.9QdfhbBEpgMS6wbYeOhmLw'

    request({ url ,json : true},(error,{ body })=>{
        if(error){
            callback('Unable to connect!',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location!',undefined)
        }
        else{
            callback(undefined,{
                latitude : body.features[0].center[1],
                longitutde : body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode