function creatediv(attrname, attrvalue, idname, idvalue){
    var div = document.createElement("div");
    div.setAttribute(attrname, attrvalue);
    div.setAttribute(idname, idvalue);
    return div;
}

var container = creatediv("class", "container", "id", "container");
document.body.append(container);
var head = document.createElement("h1");
head.setAttribute("class", "text-center");
head.setAttribute("id","title")
head.innerHTML = "Rest Countries"
var row = creatediv("class", "row", "id", "row");
container.append(head, row);



var api = fetch("https://restcountries.com/v2/all");
api.then((country)=>country.json()).then((country2)=>{
    for(let i = 0; i<country2.length; i++){
        
        
        
        

        var col = creatediv("class", "col-lg-4 col-sm-12", "id", "col1")
        row.append(col);

        //checking the latlng data is in array format

        let lan = country2[i].latlng instanceof Array && country2[i].latlng[0];
        let lng = country2[i].latlng instanceof Array && country2[i].latlng[1];

        col.innerHTML = `<div class="card" style="width: 18rem;">
        <h5 class = "card-header" style = "font-size: 20px">${country2[i].name}</h5>
        <img src="${country2[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">Capital: ${country2[i].capital}</h6>
          <h6 class="card-title">Region: ${country2[i].region}</h6>
          <h6 class="card-title">Country Code: ${country2[i].numericCode}</h6>
          <h6>Lat: ${lan}</h6>
          <h6>Lng: ${lng}</h6>
          <button type = "button" class ="btn btn-primary" onclick ="weather(${lan}, ${lng} )">Click for Weather</button>
          </div>
          </div>
          `
          

      //weather(country2[i].latlng[0],country2[i].latlng[1])
    }  

})


async function weather(lat, lon){
  var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f9724923bba774c554f137c2c125543c&units=metric`)
  var result = await data.json();
 
  alert(`
        The Current Weather of ${result.name}  
        Max_temp: ${result.main.temp_max}
        Min_temp: ${result.main.temp_min}
        Weather:  ${ result.weather[0].main}
        `)
        console.log(result);
}





