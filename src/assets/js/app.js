const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItem = document.querySelectorAll(".tabs__item");
const tabsBtnAcc = document.querySelectorAll(".tabs__btn-acc");
const tabsItemAcc = document.querySelectorAll(".tabs__item-acc");
const onTabClick = (item) => {
  item.addEventListener("click", () => {
    let curentBtn = item;

    let tabId = curentBtn.getAttribute("data-tab");
    let containerId = curentBtn.getAttribute("data-container");
    let currentTab = document.querySelector(tabId);
    console.log(containerId);

    if (!curentBtn.classList.contains("active")) {
      tabsBtn.forEach((item) => {
        if (containerId === item.getAttribute("data-container")) {
          item.classList.remove("active");
        }

        console.log(containerId);
      });
      tabsItem.forEach((item) => {
        if (containerId === item.getAttribute("data-container")) {
          item.classList.remove("active");
        }
      });
      curentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
};
tabsBtn.forEach(onTabClick);
const onAccClick = (item) => {
  item.addEventListener("click", () => {
    let curentBtn = item;

    let tabId = curentBtn.getAttribute("data-tab");
    let containerId = curentBtn.getAttribute("data-container");
    let currentTab = document.querySelector(tabId);
    console.log(containerId);

    curentBtn.classList.toggle("active");
    currentTab.classList.toggle("active");
  });
};
tabsBtnAcc.forEach(onAccClick);
const nav = document.querySelector(".navbar__list");
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(nav.querySelectorAll("a")),
  animationTime = 300,
  framesCount = 20;

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
