var selected = [];
const plantCard = document.querySelectorAll('.plant-item-card');

const unblurCards = () => {
    [...plantCard].map(item => item.style.filter = 'blur(0px)');
}

const unSelectButton = (categoryName) => {
    document.getElementById(categoryName).classList.remove('selected');
}

const categoryButtonHandler = (categoryName) => {
    if (selected.includes(categoryName)) {
        selected.splice(selected.indexOf(categoryName), 1);
    } else {
        if (selected.length > 1) {
            let category = selected.shift();
            unSelectButton(category);
        }
        selected.push(categoryName);
    }
    unblurCards();
    if (selected.length === 0) {
        return;
    }
    [...plantCard].filter(item => ![...item.classList].some(cls => selected.includes(cls)))
        .map(item => item.style.filter = 'blur(3px)');
}

[...document.querySelectorAll('.service-button')].forEach(item => item.addEventListener('click', () => {
    let categoryName = item.id;
    if ([...item.classList].includes('selected')) {
        item.classList.remove('selected');
    } else {
        item.classList.add('selected');
    }

    categoryButtonHandler(categoryName);
})
)