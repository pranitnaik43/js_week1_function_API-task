var req = new XMLHttpRequest();
var countriesURL = "https://restcountries.eu/rest/v2/all";
req.open('GET',countriesURL , true);
req.send();

var result = [];
req.onload = function() {
    var countries = JSON.parse(this.response);
    countries.forEach((element,index) => {
        try{
            // console.log(element);
            var name = element.name;
            var [lat, lon] = element.latlng;

            if(lat===0 || lon==0 || lat===undefined || lon===undefined) 
                throw new Error("Coordinates not found for "+name)
            else{
                // console.log(index);
                printData(name, lat, lon);
            }
        }
        catch(e){
            console.log("Error: ",e.message);
        }
    });
}

function printData(name, lat, lon){
    var APIkey = "8ca3d212377a1d84b828cc3dcda813cf";
    var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    var req2 = new XMLHttpRequest();
    req2.open('GET',URL , true);
    req2.onerror = function () {
        console.log("Error in seding request");
    };
    req2.send();

    req2.onload = function() {
        try {
            // console.log(this.response);
            var data = JSON.parse(this.response);
            console.log("Country: "+name+"; Latitude: "+lat+"; Longitude: "+lon+"; Temperature: "+data.main.temp);
        }
        catch(e) {
            console.log("Error: ", e.message);
        }
    }
}