deck = new Array(52);
cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`, `T`];
cardSuit = [`images/clubs.svg`, `images/spades.svg`, `images/diamonds.svg`, `images/hearts.svg`];
cardPerson = [`images/jack.svg`, `images/queen.svg`, `images/king.svg`];
variable = "";

for(i = 0, j = 0, k = -1; i < deck.length; i++) {
    if(i > 0 && i % 4 === 0){
        j++;
        k = 0;
    } else {
        k++;
    }

    if(j > 8 && j <= 11) {
        variable = `<img class="person" src="${cardPerson[+(j) - 9]}" alt="person">`;
    } else if(j > 11) {
        variable = `<img class="person" src="${cardSuit[k]}" alt="person">`;
    }

    deck[i] = (`<div class="card">
                    <div class="info">${cardRank[j]}<img src="${cardSuit[k]}" alt="suit"></div>
                    ${variable}
                    <div class="info">${cardRank[j]}<img src="${cardSuit[k]}" alt="suit"></div>
                </div>`);
}

document.write(`<div class="wrapper">${deck.join("")}</div>`);