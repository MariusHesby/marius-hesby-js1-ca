const drinksContainer = document.querySelector(".results");

// const CORS_URL = "https://noroffcors.herokuapp.com/";
const API_URL = "https://api.pokemontcg.io/v2/cards/";
// const URL = CORS_URL + API_URL;

// const options = {
//   headers: {
//     userkey: "ea7f2f3455a5c3f5f114acb609328c19",
//   },
// };

async function getPokemon() {
  try {
    const response = await fetch(API_URL);
    const results = await response.json();
    const data = results.data;
    console.log(data);

    drinksContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].id);

      if (i === 8) {
        break;
      }

      drinksContainer.innerHTML += `
                                <a href="details.html?id=${data[i].id}" class="image" style = "background-image: url('${data[i].images.small}'";>
                                <div class="info">
                                <h2>${data[i].name}</h2>
                                  <p>Artist:
                                    <span class="bold_text">"${data[i].artist}"</span>
                                  </p>
                                </div>
                                </a>`;
    }
  } catch (error) {
    console.log(error);
    drinksContainer.innerHTML = message("error", error);
  }
}
getPokemon();
