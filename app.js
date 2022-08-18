URL = "https://rickandmortyapi.com/api/character?page=1"
var page = 1
fetch (URL)
.then(response => response.json())
.then(data => makeCards(data.results));
function makeCards(charactersArray){
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ""
  charactersArray.forEach((character,index) => {
    cardContainer.innerHTML = cardContainer.innerHTML + 
    `
    <div id="character-card-${character.id}" class="col-sm-5 card-space card-border mt-5 text-center">
        <button data-target="#mymodal-${index}" class="button-open">
          <h2 class="card-names">${character.name}</h2> <br>
          <img class="card-images" src="${character.image}" alt="">
          <p id="status"><strong>Status:</strong>${character.status}</p>
          <p><strong>Location:</strong>${character.location.name}</p>
        </button>
        <div class="mymodal" id="mymodal-${index}">
          <div class="modal-header">
              <div class="title">${character.name}</div>
              <button data-close-button class="close-button">&times;</button>
          </div>
      <div class="modal-body text-center">
          <img src="${character.image}" alt="">
         <p class="pplace"><strong> Origin</strong>:${character.origin.name}</p>

         <p class="pplace"><strong> Status</strong>:${character.status}</p>
         <p class="pplace"><strong> Location</strong>:${character.location.name}</p>
         <p class="pplace"><strong> Gender</strong>: ${character.gender}</p>
         <button id="showbut" onclick="showMore()">Show more</button>
         <div id="more" style="display:none;">
         <p class="pplace"><strong> Species</strong>:${character.species}</p>
         <p class="pplace"><strong> Type</strong>:${character.type}</p>
         <p class="pplace"><strong> Status</strong>:${character.created}</p>
         </div>
      </div>
  </div>      
      </div>
    `
    })
    const openModalButtons = document.getElementsByClassName('button-open')
    const closeModalButtons = document.getElementsByClassName('close-button')
  
    const overlay= document.getElementById('overlay')
    Array.from(openModalButtons).forEach(button =>{
      button.addEventListener('click',()=> {
          const modal = document.querySelector(button.dataset.target)
          openModal(modal)
      })
    })
    Array.from(closeModalButtons).forEach(button => {
      button.addEventListener('click',()=> {
          const modal = button.closest('.mymodal')
          closeModal(modal)
      })
    })
}

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.mymodal.active')
  modals.forEach(modal => {
      closeModal(modal)
  })
})
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


document.getElementById('next').addEventListener('click',nextPage)

 function nextPage(){
  var url = "https://rickandmortyapi.com/api/character?page="
  page++;
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
 }
document.getElementById('prev').addEventListener('click',prevPage)

function prevPage(){
  if(page === 1){
  }else{
  var url = "https://rickandmortyapi.com/api/character?page="
  page--;
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  }
}

function showMore(){
document.getElementById('more').removeAttribute('style')
document.getElementById('showbut').style.display="none";
}

document.getElementById('dead').onchange = function showdead(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&status=dead")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('dead').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('alive').onchange = function showAlive(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&status=alive")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('alive').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('unknown').onchange = function showUnknown(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&status=unknown")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('unknown').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('female').onchange = function showFemale(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&gender=female")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('female').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('male').onchange = function showMale(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&gender=male")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('male').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('genderless').onchange = function showGenderless(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&gender=genderless")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('genderless').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
document.getElementById('human').onchange = function showHuman(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&species=human")
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('human').onchange = function clear(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  location.reload()
  }
}
function searchBar(){
var searchName = document.getElementById('search').value
var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page+"&name="+searchName)
  .then(response => response.json())
  .then(data => makeCards(data.results));
}
function clearAll(){
  var url = "https://rickandmortyapi.com/api/character?page="
  fetch(url+page)
  .then(response => response.json())
  .then(data => makeCards(data.results));
  document.getElementById('search').value = ""
}
