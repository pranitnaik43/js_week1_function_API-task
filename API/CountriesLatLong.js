var req = new XMLHttpRequest();
var countriesURL = "https://restcountries.eu/rest/v2/all";
req.open('GET',countriesURL , true);
// req.setRequestHeader( 'Access-Control-Allow-Origin', '*');
// req.withCredentials = false;
req.send();

var result = [];
req.onload = function() {
    var countries = JSON.parse(this.response);
    countries.forEach(element => {
        // console.log("count", element.name);
        
        country = element.name;
        console.log("a",country);
        country = country.split('(')[0];
        // console.log("b",country);
        country = country.trim();
        country = country.split(",").join("");
        country = country.split(" ").join("+");
        // console.log("c",country);
        req.open('GET',"http://api.openweathermap.org/data/2.5/weather?q="+country+"&appid=8ca3d212377a1d84b828cc3dcda813cf" , false);
        req.send();
        req.onload = function() {
            var data = JSON.parse(this.response);
            // console.log("a", element.name, data);
            result.push(
                {
                    country: element.name,
                    lat: data.coord.lat,
                    long: data.coord.lon,
                    temperature: data.main.temp
                }
            );
            // console.log(result);
        }
    });
    console.log(result);

}

