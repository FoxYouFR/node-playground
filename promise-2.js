const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    address = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDiWr0Jdo5W035KxUqCPIIN7SMZrWRkRsQ`,
      json: true
    }, (error, response, body) => {
      if(error){
        reject('Unable to connect to Google servers.');
      }else if(body.status === 'ZERO_RESULTS'){
        reject('Unable to find that address.');
      }else if(body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }else{
        reject('Something went wrong, please try again.');
      }
    });
  });
};

geocodeAddress('1661 Le Pâquier').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
