'use strict';
/*

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
    dialog.close();
});
*/
function getSelectedFilter(filters) {
    for (const key of filters) {
        if (key.classList.contains('landing-filter__button_active')) {
            return key;
        }
    }
}

const filter = document.querySelector('.landing-filter__games');
const filtersButtons = filter.children;
let selectedFilter = getSelectedFilter(filtersButtons);

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
});

