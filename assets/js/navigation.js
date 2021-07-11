const onClick = ({ target }) => {
    if (target.id) {
        tabs.forEach(tab => tab.setAttribute('active', 'false'));

        document.querySelector(`[data-tab=${target.id}]`).setAttribute('active', 'true');
    }
}

const navigation = document.querySelector('.tab');
const tabs = document.querySelectorAll('.tab__content');
navigation.addEventListener('click', onClick);
