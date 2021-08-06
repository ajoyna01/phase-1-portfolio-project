const init = () => {  
  console.log("👀")
  //////// PUPPET STRINGZ
  


//() => {
//    for (let index = 0; index < 3; index++){
//    console.log(database2)
//  }}  //this is where you started writing a function to take the results of your fetch and render one image at a time
//   //IT'S NOT WORKING TO MAKE A FUNCTION INSIDE A FUNCTION
 // database2.forEach ( (indivCatPic) => { console.log(indivCatPic)
//       const putUpCatImage = document.createElement("img")
//       putUpCatImage.src = indvCatPic.url;
//       putUpCatImage.id = indvCatPic.id;
//       catBannerArray.append(putUpCatImage);
 //})

const fetchOneCatImage = (index) => {
    fetch('https://thatcopy.pw/catapi/rest/')
    .then(response => response.json())
    .then( (catImage)=>{console.log(catImage)
    ///trying tto append a new attribute to 
    //catDetails[index]['imgeUrl'] = catImage.url;

    DATABASE.push(catImage)
      const catThumbnailField = document.querySelector("#furbabies")
      const catThumbnails = document.createElement("img")
      catThumbnails.src = catImage.url
      catThumbnailField.appendChild(catThumbnails)
      catThumbnails.onclick = function () {
        
      }
  
      })
}
const DATABASE = [] 
  console.log(DATABASE)

let catDetails = []
console.log(catDetails)

fetch('http://localhost:3000/cats')
      .then(response => response.json())
      .then( (catInfoArray)=>{ console.log(catInfoArray);
        catDetails.push(catInfoArray)
        console.log(catDetails)
        const catName = document.querySelector("#cat-title")
        catName.textContent = catInfoArray[0].name
        const catInfo = document.querySelector("#more-info")
        catInfo.textContent = catInfoArray[0].description
      })
  
  //console.log(getDBCatData)
for(index = 0; index < 3; index++) {
    fetchOneCatImage(index);
    }
console.log( catDetails)
document.addEventListener("click", (event) => {console.log(event.target)})

// 1 click event for cat loves
const catLoveButton = document.querySelector("#like-button")
console.log(catLoveButton)  
loves = 0;
catLoveButton.onclick = function() {
loves += 1;
let catLoves = document.querySelector("#show-likes")
catLoves.textContent = `Loves: ${loves}`;
}
//console.log(catName)
//get cat info from db.json
const aboutCat = document.querySelector(".card-title grey-text text-darken-4")
const catForms = document.getElementById("cat-forms")
console.log(catForms)
const catBannerArray = document.querySelector("#furbabies")
console.log(catBannerArray)
const catLoves = document.querySelector("#show-likes")
console.log(catLoves)

//event listeners
let optionsToGetInvolved = document.getElementById("options")
 console.log(optionsToGetInvolved)
 optionsToGetInvolved.addEventListener("mouseenter", function(event) {
   event.target.style.color = "purple";
   setTimeout(function() {
     event.target.style.color = "";
   }, 1000);
 }, false);
let adoptDonateVolunteer = document.querySelector("#adopt")
 adoptDonateVolunteer.addEventListener("mouseleave", function(event) {
   event.target.style.color = "white";
   setTimeout(function() {
     event.target.style.color = "";
   }, 500);
 }, false);

 let donateVolunteer = document.querySelector("#donate")
 donateVolunteer.addEventListener("mouseleave", function(event) {
   event.target.style.color = "white";
   setTimeout(function() {
     event.target.style.color = "";
   }, 500);
 }, false);

 let volunteer = document.querySelector("#volunteer")
volunteer.addEventListener("mouseleave", function(event) {
   event.target.style.color = "white";
   setTimeout(function() {
     event.target.style.color = "";
   }, 500);
 }, false);
//cat card from api
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const catID = document.createElement('p');
//     const catName = document.createElement('p');
//     const catAge = document.createElement('p');
//     const catDesc = document.createElement('p'); 
//     const catLikes = document.createElement('btn');
//     const catShelter = document.createElement('p');
//}
}
document.addEventListener("DOMContentLoaded", (event) =>{ init() 
})


//this*** can live inside of the function init() to change the loading image and title through the public api fetch feature
//dont' need rn
  // const changeTheH1 = document.querySelector("h1")
    //     console.log(changeTheH1)  
    //     changeTheH1.textContent = "MEET YOUR NEW BEST FRIEND"

    // const changeLoadingImage = document.querySelector("img")
    //     console.log(changeLoadingImage)  //
    //     changeLoadingImage.src = "https://static3.depositphotos.com/1000958/117/i/600/depositphotos_1178129-stock-photo-kitten.jpg"
      