const cardDetails = (cardName, cardHp, cardRarity, cardType, cardAbout, imgLarge) => {
  return `  

        <div class="nav">
            <a href="/"><i class="fas fa-home"></i>Home</a>
            <a href="/"><i class="fas fa-arrow-left"></i>Back</a>
        </div>

        <div class="heading">
            <h1>${cardName}</h1>
        </div>
        
        <div class="stats">
            <h2 class="red-text">Stats</h2>
            <ul>
                <li>HP:</li>
                <li>${cardHp}</li>
            
                <li>Rarity:</li>
                <li>${cardRarity}</li>
            
                <li>Type:</li>
                <li>${cardType}</li>
        
                <li>About:</li>
                <li>${cardAbout}</li>
            </ul>
        </div>
        
        <div class="card-img">
            <img class="image-box"
            src="${imgLarge}"
            alt="${cardName}" />
        </div>
        
        <div class="contact">
            <i class="fas fa-at"></i>
                <a href="contact.html">contact us</a>
        </div>`;
};
