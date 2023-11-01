const tabsButtons = document.querySelectorAll(".tabs__nav button")
const tabsItems = document.querySelectorAll(".tabs__item")
const anchors = document.querySelectorAll(".header__nav a")

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"))
    tabsButtons.forEach(button => button.classList.remove("active"))
}

function showTab(index) {
    tabsItems[index].classList.remove("hide")
    tabsButtons[index].classList.add("active")
}

tabsButtons.forEach((button, index) => button.addEventListener("click", () => {
    hideTabs()
    showTab(index)
}))

