

const catsDiv = () => document.getElementById('cats');

const cats = [
    {
    organization: "Lifelong Friends", 
    id: "1",
    name: "Moki Rose",
    age: "1",
    adoptable: "yes",
    personality: "active, playful, affectionate",
    physical: "brown tiger-striped, short-haired, stocky"
    },

    {
    organization: "Lifelong Friends", 
    id: "2",
    name: "Paco",
    age: "8",
    adoptable: "yes",
    personality: "quiet, loves people, affectionate",
    physical: "black, short-haired, tuxedo"
    },

    {
    organization: "Lifelong Friends", 
    id: "3",
    name: "Frankie",
    age: "5",
    adoptable: "yes",
    personality: "goofy, playful, active",
    physical: "brown, short-haired, striped tabby"
    },
];

const loadCats = cats => {
//     organization: "Lifelong Friends", 
//     id: "3",
//     name: "Frankie",
//     age: "5",
//     adoptable: "yes",
//     personality: "goofy, playful, active",
//     physical: "brown, short-haired, striped tabby"//what do I want to do? iterate on our cats and for every
// //cat we want to show name and photo
cats.forEach(cat => loadCats(cats))

const div = document.createElement("div");
const cat2 = document.createElement("h4");
const cat3 = document.createElement("h4");

cat1.innerText = cat.organization;

}

document.addEventListener("DOMContentLoaded", (e) => {
    loadCats();





});// <div id="header">
    //     <h1 id="banner">CatLOVE!</h1>
    //     <h2 id="subtitle">Save the Kitties! Adopt, Donate or Volunteer!</h2>
    // </div>
    // <div id="currentcats">
    //     <h2 id="adoptable">Meet the Kitties!</h2>
    // </div>
    // <div id="pictures">
    //     <h2>Available Now!</h2>
    //     <h4 id="furbabies">These furbabies are looking for a new home!</h4>
    //     <hr>
    //     <img src="http://lifelongfriends.org/moki-rose-profile.jpg" alt="Moki">
    //     <h4 id = "cat-1">Moki Rose</h4>
    //     <hr>
    //     <img src="http://lifelongfriends.org/paco-profile.jpg" alt="Paco">
    //     <h4 id = "cat-2">Paco</h4>
    //     <hr>
    //     <img src="http://lifelongfriends.org/cats/frankie-profile-2021.jpg" alt="frankie">
    //     <h4 id = "cat-3">Frankie</h4>
  //  </div>