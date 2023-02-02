import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
<<<<<<< HEAD
    let adventureUrl = new URLSearchParams(search);
    let adventureIdFromUrl = adventureUrl.get("adventure");

  // Place holder for functionality to work in the Stubs
    return adventureIdFromUrl;
=======


  // Place holder for functionality to work in the Stubs
  return null;
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
<<<<<<< HEAD
  try{
    let adventureDetailsByApiCall = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)
    let adventuredesApiJsonData = await adventureDetailsByApiCall.json();
    return adventuredesApiJsonData;
  }
  catch(err){
    return null;
  }
  // Place holder for functionality to work in the Stubs
  // console.log(adventuredesApiJsonData,"data");
=======


  // Place holder for functionality to work in the Stubs
  return null;
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
<<<<<<< HEAD
  // 1. Add the details of the adventure to the HTML 
  
  let advName = document.getElementById("adventure-name");
  advName.innerHTML = adventure.name;
  let advSubtitile = document.getElementById("adventure-subtitle");
  advSubtitile.innerHTML = adventure.subtitle;
  let images = adventure.images;
  images.forEach((ele) =>{
    let photoGallery = document.getElementById("photo-gallery");
    let div = document.createElement("div");
    photoGallery.appendChild(div);
    let img = document.createElement("img");
    img.src =ele;
    img.classList.add("activity-card-image");
    div.appendChild(img);
  });
  let advContent = document.getElementById("adventure-content");
  advContent.innerHTML= adventure.content;
 }
=======
  // 1. Add the details of the adventure to the HTML DOM

}
>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
<<<<<<< HEAD
  let gallery = document.getElementById("photo-gallery");  
  gallery.innerHTML= `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div id="carouselInner" class="carousel-inner">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`
  images.forEach((ele, index) =>{
    let carouselItemDiv = document.createElement("div");
    carouselItemDiv.classList.add("carousel-item");
    let carouselInnerDiv = document.getElementById("carouselInner")
    carouselInnerDiv.append(carouselItemDiv);
    let carouselImage = document.createElement("img");
    carouselImage.src = ele;
    carouselImage.classList.add("d-block");
    carouselImage.classList.add("w-100");
    carouselImage.classList.add("activity-card-image");
    carouselImage.setAttribute("alt","...");
    carouselInnerDiv.querySelector("div").classList.add("active");
    carouselItemDiv.appendChild(carouselImage);
  })
=======

>>>>>>> d23d882f417fdd553d3142a9e1fc0cb4e8358660
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
