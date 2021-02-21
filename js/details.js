const detailsContainer = document.querySelector(".detailsContainer");
const loaderContainer = document.querySelector(".loaderContainer");
const title = document.querySelector("title");

const noInfoOnHp = "No info about the strength of this pokémon";
const noInfoOnRarity = "No info about rarity of this pokémon";
const noInfoOnTypes = "No info about what type of pokémon this is";
const noInfoOnFlavorText = "No info about this pokémon at the moment";
const noInfoOnWeaknesses = "No info on weaknesses";
const noInfoOnName = "Unable to fetch name";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// CL //
console.log("1 - Id ", id);

const url = "https://api.pokemontcg.io/v2/cards?q=id:" + id;

// FUNCTION fetchPokemon
async function fetchPokemon() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const data = details.data;

    // CL //
    console.log("2 - Array: ", data);

    detailsContainer.innerHTML = "";

    // LOOP: data
    for (let i = 0; i < data.length; i++) {
      console.log("3 - Weaknesses: ", data[i].weaknesses);

      //UPDATE details page title
      title.innerHTML = data[i].name + " :stats";

      //name
      if (data[i].name === undefined) {
        data[i].name = noInfoOnName;
      }
      //hp
      if (data[i].hp === undefined) {
        data[i].hp = noInfoOnHp;
      }
      //rarity
      if (data[i].rarity === undefined) {
        data[i].rarity = noInfoOnRarity;
      }
      //types
      if (data[i].types === undefined) {
        data[i].types = noInfoOnTypes;
      }
      //about
      if (data[i].flavorText === undefined) {
        data[i].flavorText = noInfoOnFlavorText;
      }

      const cardName = data[i].name;
      const cardHp = data[i].hp;
      const cardRarity = data[i].rarity;
      const cardType = data[i].types;
      const cardAbout = data[i].flavorText;
      const imgLarge = data[i].images.large;

      detailsContainer.innerHTML += cardDetails(cardName, cardHp, cardRarity, cardType, cardAbout, imgLarge);
    }
  } catch (error) {
    detailsContainer.innerHTML = "";
    console.error(error);
    detailsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}

fetchPokemon();
