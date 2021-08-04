console.log("👀")

//////// PUPPET STRINGZ

const DATABASE = []
const puppetStrings = document.querySelector("#puppet-strings")

const fetchOneCatImage = () => {
    fetch('https://thatcopy.pw/catapi/rest/')
    .then(response => response.json())
    .then( (catImage)=>{//console.log(catImage)
    
    DATABASE.push(catImage)
            //console.log(DATABASE)

    const randomCat = document.createElement("img")
    //console.log(randomCat)
    let puppetStrings = document.querySelector("#puppet-strings")
        randomCat.src = catImage.url
        puppetStrings.append(randomCat)
    })

}
const init = () => {  
    // const changeTheH1 = document.querySelector("h1")
    //     console.log(changeTheH1)  
    //     changeTheH1.textContent = "MEET YOUR NEW BEST FRIEND"

    // const changeLoadingImage = document.querySelector("img")
    //     console.log(changeLoadingImage)  //
    //     changeLoadingImage.src = "https://static3.depositphotos.com/1000958/117/i/600/depositphotos_1178129-stock-photo-kitten.jpg"
      
       for(i = 0; i < 10; i++) {
    fetchOneCatImage()    
        }      
}
// create a cat card


catCard = () => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const catID = document.createElement('p');
    const catName = document.createElement('p');
    const catAge = document.createElement('p');
    const catDesc = document.createElement('p'); 
    const catLikes = document.createElement('btn');
    const catShelter = document.createElement('p');

    
}
document.addEventListener("DOMContentLoaded", (event) =>{ init() })
