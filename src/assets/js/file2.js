const btnDropdown = document.querySelectorAll(".dropdown__content");
const containerDrop = document.querySelectorAll(".dropdown__container");
const dropActive = document.querySelectorAll(".dropdown-active");
const wrap = document.querySelectorAll(".dropdown__link");
const menu = document.querySelector(".menu");
const btnCloseMenu = document.querySelector(".menu__ext");
const btnOpenMenu = document.querySelector(".btn-menu");
btnOpenMenu.addEventListener("click", function () {
  console.log("asdad");
  menu.classList.add("active-menu");
  document.body.style.position = "fixed";
});
btnCloseMenu.addEventListener("click", function () {
  console.log("asdad");
  document.body.style.position = "";
  menu.classList.remove("active-menu");
});
// btnDropdown.onclick = function () {
//   containerDrop.classList.toggle("wrap-active");
//   btnDropdown.classList.toggle("btn-active");
// };
// for (item of btnDropdown) {
//   item.addEventListener("click", function () {
//     item.classList.toggle("wrap-active");
//     // this.containerDrop.classList.toggle("wrap-active");
//     this.classList.toggle("btn-active");
//     this.nextElementSibling.classList.toggle("wrap-active");

//     const btn = item.children[0].children[0].text;
//     console.log(btn);

//     const fun = (btn) => {
//       for (items of wrap) {
//         items.addEventListener("click", function () {
//           btn = items.children[0].text;
//           console.log(btn);
//           // containerDrop.classList.remove("wrap-active");
//           // btnDropdown.classList.remove("btn-active");
//           // wrap.forEach((item) => {
//           //   console.log(item);
//           //   item.classList.remove("link-active");
//           // });
//           this.classList.add("link-active");
//         });
//       }
//     };
//     fun(btn);
//   });
// }
const onDropdownClick = (item) => {
  item.addEventListener("click", () => {
    let curentBtn = item;
    let dropdownId = curentBtn.getAttribute("data-tab");
    let containerId = curentBtn.getAttribute("data-container");
    let currentDrop = document.querySelector(dropdownId);
    var dropText = curentBtn.children[0].children[0].text;
    let dropItem = currentDrop.children[0].children;
    curentBtn.classList.toggle("btn-active");
    currentDrop.classList.toggle("wrap-active");
    const wrap = currentDrop.querySelectorAll(".dropdown__link");
    console.log(wrap);
    const dropDownActive = (item) => {
      item.addEventListener("click", () => {
        const newTex =
          item.parentElement.parentElement.previousElementSibling.children[0].querySelector(
            ".text"
          );

        newTex.text = item.children[0].text;

        wrap.forEach((e) => {
          e.classList.remove("link-active");
        });
        item.classList.add("link-active");
        currentDrop.classList.remove("wrap-active");
        curentBtn.classList.remove("btn-active");
        console.log(wrap);
      });
    };
    wrap.forEach(dropDownActive);
  });
};
btnDropdown.forEach(onDropdownClick);
