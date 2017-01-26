function clickCalculate() {
  // Calculate weight based on planet selected by user AND
  // weight input times gravity of the planet

  var planets = [
    {planet: 'Sun', gravity: 27.9},
    {planet: 'Mercury', gravity: 0.377},
    {planet: 'Venus', gravity: 0.9032},
    {planet: 'Earth', gravity: 1},
    {planet: 'Moon', gravity: 0.1655},
    {planet: 'Mars', gravity: 0.3895},
    {planet: 'Jupiter', gravity: 2.640},
    {planet: 'Saturn', gravity: 1.139},
    {planet: 'Uranus', gravity: 0.917},
    {planet: 'Neptune', gravity: 1.148},
    {planet: 'Pluto', gravity: 0.06}
  ];

  var yourWeightvalue = document.getElementById("yourWeight").value;
  var selectPlanetvalue = document.getElementById("selectPlanet").value;
  var indexPlanet = planets.findIndex(x => x.planet === selectPlanetvalue);

  // calculate new weight
  var weight = yourWeightvalue * planets[indexPlanet].gravity;

  // concatenate string of selected planet and calculated weight
  var results = "If you were on " + selectPlanetvalue + ", you would weigh " + weight + "lbs!";

  document.getElementById("results").innerHTML = results;
}


function reverseString(text) {
    // returns the value of text parameter in reverse

    var results = "";

    for (var i = text.length-1; i >= 0; i--) {
        results = results + text[i];
    }

    document.getElementById("newtitle").innerHTML === reverseString(text);
}
