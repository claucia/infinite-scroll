const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// Unsplash API
const count = 10;
const apiKey = "bnXr2Vw8MBrfhWQsEuFOZfVdUzUYxHBcbeiTmaTCBZY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    //Create <a> to link to Unsplah
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_black",
    });
    //Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Put <img> inside <a>, then put both inside imagContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //Catch Error Here
  }
}

//Check to see if scrolling near botton of page, Load More Photos
window.addEventListener("scroll", () => {
  console.log("scrolled");
});
//On Load
getPhotos();
