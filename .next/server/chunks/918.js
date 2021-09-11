exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 1613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ HOST)
/* harmony export */ });
const HOST = "http://localhost:1337";

/***/ }),

/***/ 9386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3990);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1613);








const EventCard = props => {
  const {
    0: month,
    1: setmonth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: events,
    1: setEvent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: "",
    Name: "",
    startdate: "",
    location: "",
    headerimage: {
      formats: {
        medium: {
          url: "",
          name: ""
        }
      }
    }
  });
  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      let program = props.event;

      if (program != undefined) {
        setEvent(program);
        timeFormater(events.startdate);
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.event, events.startdate]);

  const timeFormater = () => {
    try {
      let dates = events.startdate;

      if (dates) {
        let date = new Date(dates);
        let month = date.toString().slice(3, 7);
        month = month.toUpperCase();
        let time = parseFloat(date.toString().slice(15, 20)).toFixed(2);
        setmonth(month);

        if (time > 12) {
          time = time % 12;
          setTime(time + "pm");
        } else {
          setTime(time + "am");
        }
      }
    } catch (err) {
      console.log("tf", err);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
    xsm: 12,
    sm: 12,
    md: 6,
    lg: 4,
    className: "mt-4 cursor",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: `eventdetail/${events.id}`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
        className: " overflow-hidden eventimgbg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
          src: `${_env_env__WEBPACK_IMPORTED_MODULE_4__/* .HOST */ .M}${events.headerimage.formats.medium.url}`,
          className: "h-100 w-100"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.ImgOverlay, {
          className: "banner-overlay",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {
            className: "text-white border-0 cardmargin",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                xs: 3,
                sm: 2,
                md: 3,
                lg: 3,
                className: "myorange-bg d-flex justify-align-center align-items-center rounded ",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "ml-2 m-0 text-center ",
                    children: events.startdate.slice(8, 10)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "ml-2 m-0 text-center",
                    children: month
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                xs: 9,
                sm: 10,
                md: 9,
                lg: 9,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "h4",
                  children: events.Name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex align-items-center ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__/* .ImLocation2 */ .VFp, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "m-0 p1 ml-1 text-truncate",
                      style: {
                        maxWidth: "100px"
                      },
                      children: events.location
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex align-items-center ml-4",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__/* .ImClock */ .Ix7, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "m-0 p1 ml-1",
                      children: time
                    })]
                  })]
                })]
              })]
            })
          })
        })]
      })
    })
  }, props.key);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCard);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;