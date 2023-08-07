function remainingPassengers(busStops) {
    let totalPassengers = 0;
    
    for (let i = 0; i < busStops.length; i++) {
        totalPassengers += busStops[i][0]; 
        totalPassengers -= busStops[i][1];
    }
    
    return totalPassengers;
}

const busStops = [[10, 0], [3, 5], [5, 8]];
console.log(remainingPassengers(busStops));
