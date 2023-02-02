import config from "../conf/index.js";

async function init() {
<<<<<<< HEAD
    //Fetches list of all cities along with their images and description
  console.log("From init ()");
  console.log(`${config.backendEndpoint}/cities`);

  let cities = await fetchCities();
  console.log(cities);
  
=======
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
<<<<<<< HEAD
  
=======
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
<<<<<<< HEAD
    try{
      let fetchingCitiesApi = await fetch(`${config.backendEndpoint}/cities`);
      let citiesData = await fetchingCitiesApi.json();
      return citiesData;
    }
    catch(err){
      return null;
    }
    
  }
=======

}
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

<<<<<<< HEAD
    let colDiv =document.createElement("div");
    colDiv.classList.add("col-sm-6");
    colDiv.classList.add("col-md-3");
    colDiv.classList.add("flex-card");

    document.getElementById("data").appendChild(colDiv);

    let tileDiv = document.createElement("div");
    tileDiv.classList.add("card");
    tileDiv.classList.add("custom-card");   
    colDiv.appendChild(tileDiv);
  
    let tileLink = document.createElement("a");
    tileLink.id = id;
    tileLink.classList.add("tile");
    tileLink.href= "pages/adventures/?city="+id;
    tileDiv.appendChild(tileLink);
    
    let imageTag = document.createElement("img");
    imageTag.src=image;
    tileLink.appendChild(imageTag);

    let tileTextDiv = document.createElement("div");
    tileTextDiv.classList.add("tile-text");
    tileLink.appendChild(tileTextDiv);

    let h2 = document.createElement("h2");
    h2.innerHTML= city;
    tileTextDiv.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.innerHTML= description;
    tileTextDiv.appendChild(h3);
  
    


}

export { init, fetchCities, addCityToDOM };

=======
}

export { init, fetchCities, addCityToDOM };
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
