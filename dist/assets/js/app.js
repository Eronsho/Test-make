/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tabsBtn = document.querySelectorAll(\".tabs__btn\");\r\nconst tabsItem = document.querySelectorAll(\".tabs__item\");\r\nconst tabsBtnAcc = document.querySelectorAll(\".tabs__btn-acc\");\r\nconst tabsItemAcc = document.querySelectorAll(\".tabs__item-acc\");\r\nconst onTabClick = (item) => {\r\n  item.addEventListener(\"click\", () => {\r\n    let curentBtn = item;\r\n\r\n    let tabId = curentBtn.getAttribute(\"data-tab\");\r\n    let containerId = curentBtn.getAttribute(\"data-container\");\r\n    let currentTab = document.querySelector(tabId);\r\n    console.log(containerId);\r\n\r\n    if (!curentBtn.classList.contains(\"active\")) {\r\n      tabsBtn.forEach((item) => {\r\n        if (containerId === item.getAttribute(\"data-container\")) {\r\n          item.classList.remove(\"active\");\r\n        }\r\n\r\n        console.log(containerId);\r\n      });\r\n      tabsItem.forEach((item) => {\r\n        if (containerId === item.getAttribute(\"data-container\")) {\r\n          item.classList.remove(\"active\");\r\n        }\r\n      });\r\n      curentBtn.classList.add(\"active\");\r\n      currentTab.classList.add(\"active\");\r\n    }\r\n  });\r\n};\r\ntabsBtn.forEach(onTabClick);\r\nconst onAccClick = (item) => {\r\n  item.addEventListener(\"click\", () => {\r\n    let curentBtn = item;\r\n\r\n    let tabId = curentBtn.getAttribute(\"data-tab\");\r\n    let containerId = curentBtn.getAttribute(\"data-container\");\r\n    let currentTab = document.querySelector(tabId);\r\n    console.log(containerId);\r\n\r\n    curentBtn.classList.toggle(\"active\");\r\n    currentTab.classList.toggle(\"active\");\r\n  });\r\n};\r\ntabsBtnAcc.forEach(onAccClick);\r\nconst nav = document.querySelector(\".navbar__list\");\r\n// собираем все якоря; устанавливаем время анимации и количество кадров\r\nconst anchors = [].slice.call(nav.querySelectorAll(\"a\")),\r\n  animationTime = 300,\r\n  framesCount = 20;\r\n\r\nfor (let anchor of anchors) {\r\n  anchor.addEventListener(\"click\", function (e) {\r\n    e.preventDefault();\r\n\r\n    const blockID = anchor.getAttribute(\"href\").substr(1);\r\n\r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnDropdown = document.querySelectorAll(\".dropdown__content\");\r\nconst containerDrop = document.querySelectorAll(\".dropdown__container\");\r\nconst dropActive = document.querySelectorAll(\".dropdown-active\");\r\nconst wrap = document.querySelectorAll(\".dropdown__link\");\r\nconst menu = document.querySelector(\".menu\");\r\nconst btnCloseMenu = document.querySelector(\".menu__ext\");\r\nconst btnOpenMenu = document.querySelector(\".btn-menu\");\r\nbtnOpenMenu.addEventListener(\"click\", function () {\r\n  console.log(\"asdad\");\r\n  menu.classList.add(\"active-menu\");\r\n  document.body.style.position = \"fixed\";\r\n});\r\nbtnCloseMenu.addEventListener(\"click\", function () {\r\n  console.log(\"asdad\");\r\n  document.body.style.position = \"\";\r\n  menu.classList.remove(\"active-menu\");\r\n});\r\n// btnDropdown.onclick = function () {\r\n//   containerDrop.classList.toggle(\"wrap-active\");\r\n//   btnDropdown.classList.toggle(\"btn-active\");\r\n// };\r\n// for (item of btnDropdown) {\r\n//   item.addEventListener(\"click\", function () {\r\n//     item.classList.toggle(\"wrap-active\");\r\n//     // this.containerDrop.classList.toggle(\"wrap-active\");\r\n//     this.classList.toggle(\"btn-active\");\r\n//     this.nextElementSibling.classList.toggle(\"wrap-active\");\r\n\r\n//     const btn = item.children[0].children[0].text;\r\n//     console.log(btn);\r\n\r\n//     const fun = (btn) => {\r\n//       for (items of wrap) {\r\n//         items.addEventListener(\"click\", function () {\r\n//           btn = items.children[0].text;\r\n//           console.log(btn);\r\n//           // containerDrop.classList.remove(\"wrap-active\");\r\n//           // btnDropdown.classList.remove(\"btn-active\");\r\n//           // wrap.forEach((item) => {\r\n//           //   console.log(item);\r\n//           //   item.classList.remove(\"link-active\");\r\n//           // });\r\n//           this.classList.add(\"link-active\");\r\n//         });\r\n//       }\r\n//     };\r\n//     fun(btn);\r\n//   });\r\n// }\r\nconst onDropdownClick = (item) => {\r\n  item.addEventListener(\"click\", () => {\r\n    let curentBtn = item;\r\n    let dropdownId = curentBtn.getAttribute(\"data-tab\");\r\n    let containerId = curentBtn.getAttribute(\"data-container\");\r\n    let currentDrop = document.querySelector(dropdownId);\r\n    var dropText = curentBtn.children[0].children[0].text;\r\n    let dropItem = currentDrop.children[0].children;\r\n    curentBtn.classList.toggle(\"btn-active\");\r\n    currentDrop.classList.toggle(\"wrap-active\");\r\n    const wrap = currentDrop.querySelectorAll(\".dropdown__link\");\r\n    console.log(wrap);\r\n    const dropDownActive = (item) => {\r\n      item.addEventListener(\"click\", () => {\r\n        const newTex =\r\n          item.parentElement.parentElement.previousElementSibling.children[0].querySelector(\r\n            \".text\"\r\n          );\r\n\r\n        newTex.text = item.children[0].text;\r\n\r\n        wrap.forEach((e) => {\r\n          e.classList.remove(\"link-active\");\r\n        });\r\n        item.classList.add(\"link-active\");\r\n        currentDrop.classList.remove(\"wrap-active\");\r\n        curentBtn.classList.remove(\"btn-active\");\r\n        console.log(wrap);\r\n      });\r\n    };\r\n    wrap.forEach(dropDownActive);\r\n  });\r\n};\r\nbtnDropdown.forEach(onDropdownClick);\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Users\\ПК\\Dektor\\tests\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! D:\\Users\\ПК\\Dektor\\tests\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });