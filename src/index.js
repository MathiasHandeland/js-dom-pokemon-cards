
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
        img.src = pokemon.sprites.other["official-artwork"].front_default;
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

        // append the card to the container
        cardsContainer.appendChild(card);
    });
}

drawCards();
