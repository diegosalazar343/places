// Business Logic for places
function Places(country, city, landmarks, time of year) {
  this.country = country;
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

Places.prototype.vacation = function() { // type vacation for combined country and city we visited
  return this.city + " " + this.country;
}

let flor = {name:"florence", timeOfYear: "Spring"};
let haw = {name: "Hawaii", timeOfYear: "Summer"};
let jun = { name: "Juneau", timeOfYear: "Winter" };
let la = { name: "Los Angeles", timeOfYear: "Winter"};
let phnx = { name: "Phoenix", timeOfYear:"Winter"};
let pdx = { name: "Portland", timeOfYear: "Spring"};
let rom = { name: "Rome", timeOfYear:"Spring"};
let sd = { name: "San Diego", timeOfYear:"Spring"};
let sfo = { name: "San Francisco", timeOfYear: "Fall"};
let sea = { name: "Seattle", timeOfYear: "Spring"};
let vanc = { name: "Vancouver", timeOfYear: "Fall"};
let vict = { name: "Victoria", timeOfYear: "Fall"};


let usa = {name: "USA", cities:[haw, jun, la, phnx, pdx, sd, sfo, sea] S};
let can = {name: "Canada", citites: [vanc, vict] };
let mex = {name: "Italy", cities: [flor, rom] };

usa.citites.forEach(function(city) {
  return ("Let's learn about" + city.name + "!");
});

Places.prototype.vacation = function (id) {
  for (let i = 0; i < this.vacation.length; i++) {
    if (this.vacation[i].id == id) {
      return this.vacation[i];
    }
  };
  return false;
}
