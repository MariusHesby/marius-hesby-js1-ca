const resultsContainer = document.querySelector(".results");
const cardsContainer = document.querySelector(".cardsContainer");

const url = "https://api.pokemontcg.io/v2/cards/";

async function fetchPokemons() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results.data;
    console.log(data);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      if (i === 10) {
        break;
      }

      resultsContainer.innerHTML += `

                              <a href="details.html?id=${data[i].id}" class="image"
                              style="background-image: url('${data[i].images.small}'";>
                                <div class="info">
                                  <h2>${data[i].name}</h2>
                                    <p>Artist: <span class="bold_text">${data[i].artist}</span></p>
                                </div>
                              </a>`;
    }
  } catch (error) {
    cardsContainer.innerHTML = "";
    console.error(error);
    cardsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}

fetchPokemons();
