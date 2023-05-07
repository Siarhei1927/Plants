document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open");
    });

    const priceActionButtons = document.querySelectorAll(".price-action-button");
    priceActionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("open");
        });
    });

    document.getElementById("city").addEventListener("click", function () {
        hideCards();
        this.classList.toggle("open");
    });
});

function viewPrice() {
    toggleElementDisplay(".price-action-text");
}

function viewPriceStandart() {
    toggleElementDisplay(".standart");
}

function viewPriceProcare() {
    toggleElementDisplay(".procare");
}

function toggleElementDisplay(selector) {
    const element = document.querySelector(selector);
    element.style.display = element.style.display === "block" ? "none" : "block";
}

function toggleElementProperty(selector, property, value1, value2) {
    const element = document.querySelector(selector);
    element.style[property] = element.style[property] === value1 ? value2 : value1;
}

function viewCityList() {
    toggleElementDisplay(".main_section_contacts_content_list");
    toggleElementProperty(".city", "background", "rgb(193, 230, 152)", "rgb(214, 231, 210)");
    toggleElementProperty(".main_section_contacts_content_button_image", "transform", "rotate(-180deg)", "rotate(0deg)");
}
