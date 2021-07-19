const onClick = ({ target }) => {
    if (target.id) {
        cardsContainer.dataset.type = target.id;
    }
}

document.getElementById('all').setAttribute('checked', 'true');
const navigation = document.querySelector('.tab__navigation');
navigation.addEventListener('click', onClick);
const cardsContainer = document.querySelector('.cards-container');
