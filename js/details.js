const detailsContainer = document.querySelector(".detailsContainer");
const loaderContainer = document.querySelector(".loaderContainer");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://api.pokemontcg.io/v2/cards?q=id:" + id;

async function fetchPokemon() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const data = details.data;

    console.log(data);

    detailsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);

      //change title of html-page
      title.innerHTML = data[i].name + " :stats";

      const noInfoOnHp = "No info about the strength of this pokémon";
      const noInfoOnRarity = "No info about rarity of this pokémon";
      const noInfoOnTypes = "No info about what type of pokémon this is";
      const noInfoOnFlavorText = "No info about this pokémon at the moment";

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
  } catch (error) {
    detailsContainer.innerHTML = "";
    console.error(error);
    detailsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}

fetchPokemon();
