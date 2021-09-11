"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214,60];
exports.modules = {

/***/ 9960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6189);
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1613);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7516);









const Album = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "cursor overflow-hidden ",
    style: {
      flex: "0 0 350px"
    },
    onClick: props.onClick,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
      className: "",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {
        src: `${_env_env__WEBPACK_IMPORTED_MODULE_5__/* .HOST */ .M}${props.photo}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.ImgOverlay, {
        className: "banner-overlay d-flex justify-content-center align-items-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "text-white p1 ",
          children: props.ablumname
        })
      })]
    })
  });
};

function Gallery({
  photo
}) {
  const {
    0: selectAlbum,
    1: setSelectlbum
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: slideCount,
    1: setslidesCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const slides = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  const prev = () => {
    let element = slides.current;
    console.log(element.children[0].offsetWidth);

    if (slideCount < element.children.length / parseInt(window.screen.width / 350) - 1) {
      let newSlides = slideCount + 1;
      setslidesCount(newSlides);
      slides.current.style.transitionDuration = "0.5s";
      element.style.transform = `translate(-${newSlides * 350}px)`;
    }
  };

  const next = () => {
    let element = slides.current;

    if (slideCount) {
      let newSlides = slideCount - 1;
      setslidesCount(newSlides);
      slides.current.style.transitionDuration = "0.5s";
      element.style.transform = `translate(-${newSlides * 350}px)`;
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {
          src: "images/about.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.ImgOverlay, {
          className: "banner-overlay d-flex justify-content-center align-items-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-white h1 ",
            children: "Memories to be cheeries"
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "d-flex overflow-hidden sliderContainer",
        style: {
          position: "relative"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__/* .BiLeftArrow */ .WOK, {
          className: " button  buttonleft ",
          onClick: prev
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__/* .BiRightArrow */ .U6L, {
          className: " button  buttonRight ",
          onClick: next
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          ref: slides,
          className: "d-flex flex-row",
          children: photo.map((photo, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Album, {
              ablumname: photo.albumname,
              photo: photo.photos[0].url,
              onClick: () => {
                setSelectlbum(index);
              }
            }, index);
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_global___WEBPACK_IMPORTED_MODULE_4__/* .PhotoGallery */ .BQ, {
        photo: photo[selectAlbum]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);
async function getServerSideProps() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:1337/photoalbums`);
  const photo = res.data;
  return {
    props: {
      photo
    }
  };
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2352:
/***/ ((module) => {

module.exports = require("react-share");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,990,144,516,814], () => (__webpack_exec__(9960)));
module.exports = __webpack_exports__;

})();