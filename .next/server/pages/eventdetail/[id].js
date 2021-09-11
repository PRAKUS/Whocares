"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237,60];
exports.modules = {

/***/ 7594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3703);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3990);
/* harmony import */ var _global_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6189);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_3__]);
react_markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


 // import { useRouter } from "next/router";






let endpoints = "events";

const Eventdetail = ({
  post
}) => {
  let {
    0: commentchecker,
    1: setComment
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.comments);

  const commentHandler = async req => {
    console.log(req.id);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`http://localhost:1337/${endpoints}/${req.id}`);
      const post = res.data.comments;
      console.log(post);
      setComment(post);
    } catch (err) {
      console.log(err);
    }
  };

  const timeFormater = time => {
    let date = new Date(time);
    return date.toString().slice(3, 21);
  };

  const endpoint = {
    name: endpoints,
    value: {
      post
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container section-pbgap",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          xs: 12,
          sm: 12,
          md: 12,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
            style: {
              maxHeight: "400px"
            },
            className: "overflow-hidden",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
              className: "w-100 ",
              src: `http://localhost:1337${post.headerimage.url}`,
              alt: "coverimage"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.ImgOverlay, {
              className: "banner-overlay d-flex justify-content-center align-items-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                className: "h1 text-white",
                children: post.Name
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            className: "postcontainer ",
            xs: 12,
            sm: 12,
            md: 8,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-center ",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__/* .ImLocation2 */ .VFp, {
                    color: "#fb743e"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 ml-1 p1",
                    children: post.location
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex align-items-center ml-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__/* .ImClock */ .Ix7, {
                    color: "#fb743e"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 ml-1 p1 py-4",
                    children: timeFormater(post.published_at)
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3__.default, {
                className: "markdown",
                transformImageUri: uri => uri.startsWith("http") ? uri : `http://localhost:1337${uri}`,
                children: post.eventdetails
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex flex-column  ",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex ",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0  p1",
                    children: "Co-ordinator no:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "m-0 ml-1 p1 myprimary-text",
                    children: [post.coordinatorNo, ","]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex ",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 p1",
                    children: "Sponsor By:"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 ml-1 myprimary-text",
                    children: post.sponsorName
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "section-mgap ",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "h3 myprimary-text mb-4",
                children: "Leave your thoughts: "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border p-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_global_index__WEBPACK_IMPORTED_MODULE_4__/* .CommentForm */ .EQ, {
                  endpoints: endpoint,
                  commentrefresh: commentHandler
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "mt-3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "myprimary-text",
                    children: "Peoples Thoughts:-"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                      maxHeight: "300px",
                      overflow: "scroll"
                    },
                    children: commentchecker.length > 0 ? commentchecker.map((comment, index) => {
                      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_global_index__WEBPACK_IMPORTED_MODULE_4__/* .Comment */ .sv, {
                        name: comment.name,
                        comment: comment.comment
                      }, index);
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "border p-2",
                      children: "Be first to comment"
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      })
    })
  });
};

async function getServerSideProps(context) {
  const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`http://localhost:1337/${endpoints}/${context.params.id}`);
  const post = res.data;
  return {
    props: {
      post
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eventdetail);
});

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

/***/ 3703:
/***/ ((module) => {

module.exports = import("react-markdown");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,990,144,814], () => (__webpack_exec__(7594)));
module.exports = __webpack_exports__;

})();