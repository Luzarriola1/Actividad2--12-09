let url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let characters = data.results;
    crearCard(characters);
  });

const container = document.getElementById("container");

function crearCard(data) {
  let cardsHTML = "";

  for (let i = 0; i < data.length; i++) {
    let character = data[i];

    cardsHTML += `
      <div class="caja">
        
        <p>Nombre: ${character.name}</p>
        <img src="${character.image}" alt="${character.name}" width="100" height="100">
        
      </div>
    `;
  }

  container.innerHTML = cardsHTML;
}