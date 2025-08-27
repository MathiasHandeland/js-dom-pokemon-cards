
const cardsContainer = document.querySelector(".cards"); // all cards go in here

function drawCards() { // create a card for each pokemon
    data.forEach(pokemon => {
       const card = document.createElement("li"); // each card is added to the container as a list item
       card.className = "card"; // assign the css class to the list item
       
        // create the title
        const title = document.createElement("h2");
        title.className = "card--title"; // assign the css class to the title
        title.textContent = pokemon.name;
        card.appendChild(title);

        // create the image
        const img = document.createElement("img");
        img.className = "card--img";
        img.src = pokemon.sprites.other["official-artwork"].front_default; // start with default image

        // Attach toggle functionality between images
        togglePokemonImage(img, pokemon);
        card.appendChild(img);

        // create the stats list
        const statsList = document.createElement("ul");
        statsList.className = "card--text";
        pokemon.stats.forEach(stat => {
            const listItem = document.createElement("li");
            listItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            statsList.appendChild(listItem);
        });
        card.appendChild(statsList);

        // section about which games the pokemon appeard in
        const gamesTitle = document.createElement("h4");
        gamesTitle.textContent = "Appeared in the following games";
        card.appendChild(gamesTitle);

        // add the list of games 
        const gamesList = document.createElement("p");
        gamesList.className = "card--games";
        const gameNames = [];
        // loop through the generations and games
        for (const gen in pokemon.sprites.versions) {
            const genGames = pokemon.sprites.versions[gen];
            for (const game in genGames) {
                gameNames.push(game); // add the game name to the array
            }
        }
        gamesList.textContent = gameNames.join(", ");
        card.appendChild(gamesList);

        // append the card to the container
        cardsContainer.appendChild(card);

    });
}

drawCards();


function togglePokemonImage(img, pokemon) {
    const images = [
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny,
        pokemon.sprites.other["official-artwork"].front_default
    ].filter(Boolean); // remove nulls

    let currentImageIndex = 0;

    img.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        img.src = images[currentImageIndex];
    });
}


