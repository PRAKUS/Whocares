"use strict";
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 5010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_R": () => (/* reexport */ Home_Cd1),
  "Yz": () => (/* reexport */ Home_Cd2),
  "Oo": () => (/* reexport */ Home_MissionCard),
  "z_": () => (/* reexport */ Home_ThankyouCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
;// CONCATENATED MODULE: ./Home/Cd1.js





function Cd1(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "m-1",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
      className: "my-primary border-0",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-flex justify-content-center item-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Image, {
          src: props.img,
          className: "icon w-100",
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Body, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "myprimary-text text-center h4 primary-title",
          children: "Our Mission"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "my-orange text-center p1",
          children: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        })]
      })]
    })
  });
}

/* harmony default export */ const Home_Cd1 = (Cd1);
// EXTERNAL MODULE: ./env/env.js
var env = __webpack_require__(1613);
;// CONCATENATED MODULE: ./Home/Cd2.js






function Cd2({
  event
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
      variant: "top",
      src: `${env/* HOST */.M}${event.headerimage.url}`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Body, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
        children: event.causename
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
        children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Footer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
        className: "text-muted",
        children: ["Last updated ", event.created_at, " mins ago"]
      })
    })]
  });
}

/* harmony default export */ const Home_Cd2 = (Cd2);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Home/MissionCard.js






const MissionCard = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
    className: " m-1 border  rounded p-1",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
      xl: 3,
      lg: 3,
      md: 3,
      sm: 3,
      xs: 3,
      className: "justify-content-center d-flex align-items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Image, {
        className: "sm-icon  w-100 ",
        src: props.missioncard.icon,
        alt: props.missioncard.logodes
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
      xl: 9,
      lg: 9,
      md: 9,
      sm: 9,
      xs: 9,
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "primary-title my-orange",
        children: props.missioncard.header
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "overflow-hidden sm-font  mysecondary-text primary-font pl-0 container",
        children: props.missioncard.des
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: props.missioncard.url,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("small", {
          className: "cursor mysecondary-text",
          children: "Read More"
        })
      })]
    })]
  });
};

/* harmony default export */ const Home_MissionCard = (MissionCard);
;// CONCATENATED MODULE: ./Home/ThankyouCard.js





function ThankyouCard() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "d-flex justify-content-center align-items-center",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
      className: "bg-transparent w-50  border-0 px-4 d-flex align-items-center p-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Image, {
        className: "profilepic w-100 ",
        src: "images/icon/profilepic.jpg",
        roundedCircle: true,
        alt: "profile"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
        className: "text-center myprimary-text",
        children: "Loresm sister"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
        className: "text-center mysecondary-text",
        children: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat duis."
      })]
    })
  });
}

/* harmony default export */ const Home_ThankyouCard = (ThankyouCard);
;// CONCATENATED MODULE: ./Home/index.js





/***/ })

};
;