var selectedCity = '';

const container = document.querySelectorAll('.main_section_contacts_content_button_content_container');

const hideCards = () => {
    [...container].map(item => item.style.display = 'none');
}

const categoryCityHandler = (cityName) => {
    hideCards();
    let cityInfo = [...container].filter(it => [...it.classList].includes(cityName))[0];
    let cityText = document.querySelector(`#${cityName}`).textContent;
    viewCityList();
    if (selectedCity == cityName) {
        selectedCity = '';
        document.querySelector(".textCity").textContent = 'City'
        return;
    } else {
        document.querySelector(".textCity").textContent = cityText;
        selectedCity = cityName;
    }

    cityInfo.style.display = 'flex';
}

[...document.querySelectorAll('.city_item')].forEach(it => it.addEventListener('click', () => {
    let cityName = it.id;
    categoryCityHandler(cityName);
})
)