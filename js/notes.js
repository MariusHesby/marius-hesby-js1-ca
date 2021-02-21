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

console.log("1 - Id ", id);

const url = "https://api.pokemontcg.io/v2/cards?q=id:" + id;

// FUNCTION fetchPokemon
async function fetchPokemon() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const data = details.data;

    console.log("2 - Array: ", data);

    detailsContainer.innerHTML = "";

    // LOOP: data
    for (let i = 0; i < data.length; i++) {
      console.log("3 - Weaknesses: ", data[i].weaknesses);

      //UPDATE: title of html-page
      title.innerHTML = data[i].name + " :stats";

      if (data[i].weaknesses === undefined) {
        data[i].weaknesses = noInfoOnWeaknesses;
      }

      // LOOP: data.weaknesses
      for (let j = 0; j < data[i].weaknesses.length; j++) {
        console.log("4 - [i] and [j]: ", data[i].weaknesses[j].type);

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

        //weaknesses
        if (data[i].weaknesses[j].type === undefined) {
          data[i].weaknesses[j].type = noInfoOnWeaknesses;
        }

        // if (data[i].weaknesses === undefined) {
        //   data[i].weaknesses[j].type = data[i].weaknesses[j].type;
        // }

        detailsContainer.innerHTML += `  

                            <div class="nav">
                                <a href="/"><i class="fas fa-home"></i>Home</a>
                                <a href="/"><i class="fas fa-arrow-left"></i>Back</a>
                            </div>

                            <div class="heading">
                              <h1>${data[i].name}</h1>
                            </div>
                            
                            <div class="stats">
                              <h2 class="red-text">Stats</h2>
                                <ul>
                                    <li>HP:</li>
                                    <li>${data[i].hp}</li>
                             
                                    <li>Rarity:</li>
                                    <li>${data[i].rarity}</li>
                             
                                    <li>Type:</li>
                                    <li>${data[i].types}</li>
                            
                                    <li>About:</li>
                                    <li>${data[i].flavorText}</li>

                                    <li>Weaknesses:</li>
                                    <li>${data[i].weaknesses[j].type}</li>
                                </ul>
                            </div>
                            
                            <div class="card-img">
                              <img class="image-box"
                              src="${data[i].images.large}"
                              alt="${data[i].name}" />
                            </div>
                            
                            <div class="contact">
                                <i class="fas fa-at"></i>
                                    <a href="contact.html">contact us</a>
                            </div>`;
      }
    }
  } catch (error) {
    detailsContainer.innerHTML = "";
    console.error(error);
    detailsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}

fetchPokemon();
