const pokemonContainer = document.querySelector(".gridContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://api.pokemontcg.io/v2/cards?q=id:" + id;

async function fetchPokemon() {
  //   try {
  const response = await fetch(url);
  const details = await response.json();
  const data = details.data;

  console.log(data);

  pokemonContainer.innerHTML += "";

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id);

    // if (!data[i].name || !data[i].hp || !data[i].rarity || !data[i].types || !data[i].flavorText){

    // }
    pokemonContainer.innerHTML += `                         
                            <div class="heading">
                              <h1>${data[i].name}</h1>
                            </div>
                            
                            <div class="stats">
                              <h2 class="red-text">Stats</h2>
                                <ul>
                                    <li>HP:</li>
                                    <li>${data[i].hp}</li>
                                </ul>
                                <ul>
                                    <li>Rarity:</li>
                                    <li>${data[i].rarity}</li>
                                </ul>
                                <ul>
                                    <li>Type:</li>
                                    <li>${data[i].types}</li>
                                </ul>
                                <ul>
                                    <li>About:</li>
                                    <li>${data[i].flavorText}</li>
                                </ul>
                            </div>
                            
                            <div class="card-img">
                              <img class="image-box"
                              src="${data[i].images.large}"
                              alt="${data[i].name}" />
                            </div>`;
  }

  //   function getObjectValues(object, string) {
  //     let arr = [];
  //     for (let [key, value] of Object.entries(object)) {
  //       if (key.includes(string)) {
  //         if (value) {
  //           arr.push(value);
  //         }
  //       }
  //     }
  //     return arr;
  //   }

  //   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let results = data.drinks[0];
  //       console.log(getObjectValues(results, "strIngredient"));
  //     })
  //     .catch((err) => console.error(err));

  //   });

  //   drinks.forEach(function (drink) {
  //     recipeContainer.innerHTML += `
  //                                     <a href="details.html?id=${drink.idDrink}" class="image" style="background-image: url('${drink.strDrinkThumb}')">
  //                                     <div class="info">
  //                                     <h2>${drink.strDrink}</h2>
  //                                     <p>Special ingredient:</br>
  //                                     <span class="bold_text">${drink.strIngredient1}</span></p>
  //                                     </div>
  //                                     </a>`;
  //   });

  //   recipeContainer.innerHTML = `<h1>${drink.idDrink}</h1>`;

  //   recipeContainer.innerHTML = `<h1>${details.strDrinkThumb}</h1>
  //                                 <div class="details-image"
  //                                     style="background-image: url('${details.background_image}')"></div>
  //                                 <div class="details-description">${details.strIngredient1}</div>`;
  //   } catch (error) {
  //     console.log(error);
  //     detailContainer.innerHTML = message("error", error);
  //   }
}

fetchPokemon();

// function createHtml(details) {
//   recipeContainer.innerHTML = `<h1>${details.strDrinkThumb}</h1>
//                                 <div class="details-image"
//                                     style="background-image: url('${details.background_image}')"></div>
//                                 <div class="details-description">${details.strIngredient1}</div>`;
// }
// <ul>
//   <li>Weaknesses:</li>
//   <li>${data[i].weaknesses.type}</li>
// </ul>;
//   <ul>
//     <li>Evolves from:</li>
//     <li>${data[i].evolvesFrom}</li>
//   </ul>;
