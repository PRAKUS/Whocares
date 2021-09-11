"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,60];
exports.modules = {

/***/ 9496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./Home/index.js + 4 modules
var Home = __webpack_require__(5010);
;// CONCATENATED MODULE: ./data/data.js
const data_image = [{
  src: "images/banner1.png",
  caption: "Making World Better Place",
  alt: "image description"
}, {
  src: "images/banner2.png",
  caption: "making world better place 2",
  alt: "image description 2"
}];
const service = [{
  icon: "images/icon/hunger.png",
  icon_description: "logo",
  header: "Feeding The Hungry",
  des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  url: "/feedhunger"
}, {
  icon: "images/icon/oldage.png",
  icon_description: "",
  header: "Running old age home.",
  des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  url: "/oldage"
}, {
  icon: "images/icon/talentHunt.png",
  icon_description: "logo",
  header: "Talent Hunt",
  des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  url: "/talenthub"
}, {
  icon: "images/icon/volunteer-black.png",
  icon_description: "logo",
  header: "Volunteer",
  des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  url: "/Volunteer"
}, {
  icon: "images/icon/fundraise-black.png",
  icon_description: "logo",
  header: "Fund Raise",
  des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  url: "/FundRaise"
}];
const Event = [{
  name: "data",
  image: "images/icon/profilepic.jpg",
  date: "23-09-2020",
  description: "dunmmy text"
}, {
  name: "data",
  image: "images/icon/profilepic.jpg",
  date: "23-09-2020",
  description: "dunmmy text"
}, {
  name: "data",
  image: "images/icon/profilepic.jpg",
  date: "23-09-2020",
  description: "dunmmy text"
}, {
  name: "data",
  image: "images/icon/profilepic.jpg",
  date: "23-09-2020",
  description: "dunmmy text"
}];

// EXTERNAL MODULE: ./global/index.js + 12 modules
var global = __webpack_require__(6189);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./Context/EventContext/EventContext.js
var EventContext = __webpack_require__(8929);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./env/env.js
var env = __webpack_require__(1613);
;// CONCATENATED MODULE: ./pages/index.js













function pages_Home({
  photos,
  recentEvent
}) {
  const {
    state
  } = (0,external_react_.useContext)(EventContext/* default */.Z);
  const {
    0: list,
    1: setlist
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    // window.scroll(0, 0);
    latestEvent(state.events);
    Notification.requestPermission().then(result => {
      console.log(result);
    });
  }, [state.events]);

  const latestEvent = () => {
    try {
      const component = state.events.slice(state.events.length - 4, state.events.length - 1).map(events => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-2 ",
          children: /*#__PURE__*/jsx_runtime_.jsx(global/* RecentEvent */.AS, {
            eventName: events.Name,
            link: `/eventdetail/${events.id}`,
            date: events.startdate,
            img: `${env/* HOST */.M}${events.headerimage.formats.thumbnail.url}`
          })
        }, events.id);
      });
      setlist(component.sort(function (a, b) {
        return a - b;
      }));
    } catch (err) {
      console.log("work");
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-white",
        children: "hhh"
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Home:Whocares"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "overflow-hidden",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
          src: "images/about.png"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.ImgOverlay, {
          className: "banner-overlay d-flex justify-content-center align-items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-white h1 ",
            children: "Working for the Unseen side of socity"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: " p-2",
      style: {
        marginTop: "-5%"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: " container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xsm: 12,
            sm: 12,
            md: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* Cd1 */._R, {
              img: "/images/icon/donate.png"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xsm: 12,
            sm: 12,
            md: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* Cd1 */._R, {
              img: "/images/icon/fundraise.png"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xsm: 12,
            sm: 12,
            md: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* Cd1 */._R, {
              img: "/images/icon/volunteer.png"
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: " p-2 section-gap",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: " container section-mgap",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xsm: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "primary-title myprimary-text",
              children: "About us"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "mysecondary-text justify-text p1",
              children: "WHO CARES is one of the largest and Social organization started from Kalimpong, [Darjeeling] in 2012. Since its foundation the organization has been working selflessly for the causes of humanities with its members coming from all walks of life. Despite having different social, religious and economic backgrounds the one thing that unites the members is to BE AN INSPIRATION in serving the humanities."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Image, {
              src: "",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                className: "border-0 myorange-bg p1",
                children: "Read More"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xsm: 12,
            sm: 12,
            md: 6,
            className: "d-flex flex-column",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "text-center primary-title ",
              children: "Our Activities"
            }), /*#__PURE__*/jsx_runtime_.jsx(Home/* MissionCard */.Oo, {
              missioncard: service[0]
            }), /*#__PURE__*/jsx_runtime_.jsx(Home/* MissionCard */.Oo, {
              missioncard: service[1]
            }), /*#__PURE__*/jsx_runtime_.jsx(Home/* MissionCard */.Oo, {
              missioncard: service[2]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "container section-mgap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-center h2 ",
        children: "Your Precious Help Needed"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pt-4",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Carousel, {
          controls: true,
          indicators: false,
          interval: 2500,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* DonationApeal */.LF, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* DonationApeal */.LF, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* DonationApeal */.LF, {})
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "my-primary section-mgap ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container section-pgap section-pbgap",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center myprimary-text h2 mb-0 pb-3",
          children: "Thank you for your support"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center my-orange m-0 sm-font m-0",
          children: "Message from our suvrival"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Carousel, {
          controls: true,
          indicators: false,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* ThankyouCard */.z_, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* ThankyouCard */.z_, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Home/* ThankyouCard */.z_, {})
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "mypicturebackground ",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "section-pgap section-pbgap",
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.2)"
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "section-pbgap",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-white h2 text-center",
              children: "Our upcoming Events"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
              md: 6,
              children: /*#__PURE__*/jsx_runtime_.jsx(global/* GEventCard */.tC, {
                event: state.events != "undefined" ? state.events[state.events.length - 1] : ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
              md: 3,
              className: " m-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "list-inline m-0",
                children: list
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: " my-primary ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container section-pgap ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center myprimary-text m-0 h2",
          children: "Recent Activities"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center m-0 my-orange sm-font",
          children: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.."
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.CardDeck, {
          className: "section-pgap section-pbgap",
          children: recentEvent.map((event, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(Home/* Cd2 */.Yz, {
              event: event
            }, index);
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-mgap",
      children: /*#__PURE__*/jsx_runtime_.jsx(global/* PhotoGallery */.BQ, {
        photo: photos
      })
    })]
  });
}

/* harmony default export */ const pages = (pages_Home);
async function getServerSideProps() {
  const count = await external_axios_default().get(`${env/* HOST */.M}/photoalbums/count`);
  let data = parseInt(Math.random() * (count.data - 1) + 1);
  const photo = await external_axios_default().get(`${env/* HOST */.M}/photoalbums/${data}`);
  const RecentEvent = await external_axios_default().get(`${env/* HOST */.M}/recent-events`);
  let recentEvent = RecentEvent.data;
  let photos = photo.data;
  return {
    props: {
      photos,
      recentEvent
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

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,990,144,814,10], () => (__webpack_exec__(9496)));
module.exports = __webpack_exports__;

})();