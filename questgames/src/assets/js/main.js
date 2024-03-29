'use strict';
const filter = document.querySelector('.landing-filter__games');
const filtersButtons = filter.children;
let selectedFilter = getSelectedFilter(filtersButtons);
const gameCardsWrapper = document.querySelector('.game-cards');
const gameCards = document.querySelectorAll('.game-tile');

function getSelectedFilter(filters) {
    for (const key of filters) {
        if (key.classList.contains('landing-filter__button_active')) {
            return key;
        }
    }
}

function filterCards(filter) {
    if (filter === 'all') {
        return gameCards;
    }
    const cardArray = Array.from(gameCards);
    const resultFiltered = cardArray.filter((el) => el.dataset.filter === filter);
    return resultFiltered;
}

filter.addEventListener('click', (event) => {
    const filterClicked = event.target.dataset.filter;
    if (filterClicked === selectedFilter.dataset.filter) {
        return;
    }

    for (const key of filtersButtons) {
        key.classList.remove('landing-filter__button_active');
    }
    const activeButton = document.querySelector(`[data-filter=${filterClicked}]`);
    activeButton.classList.add('landing-filter__button_active');
    selectedFilter = getSelectedFilter(filtersButtons);

    const filteredTiles = filterCards(filterClicked);
    gameCardsWrapper.innerHTML = '';
    if (filteredTiles.length > 0) {
        filteredTiles.forEach((card) => gameCardsWrapper.append(card));
    }
});

