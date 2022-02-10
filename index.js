const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
// const ip = '97.108.234.174';

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(ip, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } 
//   console.log('It worked! Returned coordinates:' , data)
// })

// fetchISSFlyOverTimes({ latitude: '43.9982', longitude: '-79.4625' }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   } 
//   console.log('It worked! Returned flyover times:' , passTimes)
// })

nextISSTimesForMyLocation((error, passTimes) => {
  if(error) {
    return console.log("It didn't work!", error);
  }
  convertPassTimes(passTimes);
})

const convertPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}