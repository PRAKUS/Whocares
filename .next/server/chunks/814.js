exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 8929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EventContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventContext);

/***/ }),

/***/ 1613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ HOST)
/* harmony export */ });
const HOST = "http://localhost:1337";

/***/ }),

/***/ 6189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sv": () => (/* reexport */ global_Comment),
  "EQ": () => (/* reexport */ global_CommentForm),
  "LF": () => (/* reexport */ global_DonationApeal),
  "qL": () => (/* reexport */ global_ErrorHandler),
  "$_": () => (/* reexport */ global_Footer),
  "tC": () => (/* reexport */ global_GEventCard),
  "W_": () => (/* reexport */ global_Navigation),
  "BQ": () => (/* reexport */ global_PhotoGallery),
  "AS": () => (/* reexport */ global_RecentEvent),
  "LI": () => (/* reexport */ global_StaffList),
  "Fg": () => (/* reexport */ VolunteerForm)
});

// UNUSED EXPORTS: Share

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./global/Navigation.js





const style = {
  logoSize: {
    height: "45px",
    width: "45px"
  }
};

const Navigation = props => {
  const {
    0: position,
    1: changePosition
  } = (0,external_react_.useState)(" ");
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        changePosition(" fixed-top");
      } else {
        changePosition("");
      }
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${position} bg-light shadow`,
    style: {
      zIndex: 5
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
      className: `${props.className}  container `,
      expand: "md",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          style: style.logoSize,
          alt: "logo",
          src: "http://localhost:1337/uploads/logo_9b5ab53b51.png"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
        "aria-controls": "responsive-navbar-nav"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
        id: "responsive-navbar-nav",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
          className: "ml-auto text-white",
          activeKey: "/home",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "my-orange nav-link m-0 cursor",
                children: "Home"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              className: "my-orange nav-link",
              eventKey: "link-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "my-orange nav-link m-0 cursor",
                children: "About"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/event",
              className: "my-orange nav-link",
              eventKey: "link-2",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "my-orange nav-link m-0 cursor",
                children: "Events"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/getinvolved",
              className: "my-orange nav-link",
              eventKey: "link-3",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "my-orange nav-link m-0 cursor",
                children: "Get Involved"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/gallery",
              className: "my-orange nav-link",
              eventKey: "link-3",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "my-orange nav-link m-0 cursor",
                children: "Our Gallery"
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const global_Navigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: ./Context/EventContext/EventContext.js
var EventContext = __webpack_require__(8929);
;// CONCATENATED MODULE: ./global/Footer.js











const Iconcontainer = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "d-flex align-items-center mt-1",
    children: [props.children, /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: props.link,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-white ml-2 primary-font ",
        children: [" ", props.label]
      })
    })]
  });
};

const Footer = () => {
  const {
    0: presentWindow,
    1: windowchange
  } = (0,external_react_.useState)({
    style: "text-white text-right primary-font"
  });
  const {
    0: lpresentWindow,
    1: change
  } = (0,external_react_.useState)({
    style: "text-white primary-font"
  });
  /*
   *@sereenChange is for credit in bottom of page
   *
   *
   */

  let screenChange = () => {
    if (window.screen.width > 500) {
      windowchange({
        style: "text-white text-right primary-font "
      });
      change({
        style: "text-white  primary-font "
      });
    } else {
      windowchange({
        style: "text-white text-center primary-font "
      });
      change({
        style: "text-white text-center  primary-font "
      });
    }
  };
  /*
  
  
  
  */


  const {
    state
  } = (0,external_react_.useContext)(EventContext/* default */.Z);
  const {
    0: list,
    1: setlist
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    window.addEventListener("resize", screenChange());
    latestEvent();
  }, [state.events]);

  const latestEvent = () => {
    try {
      const component = state.events.map(events => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-2 ",
          children: /*#__PURE__*/jsx_runtime_.jsx(global_RecentEvent, {
            eventName: events.Name,
            link: `/eventdetail/${events.id}`,
            date: events.startdate,
            img: `http://localhost:1337${events.headerimage.formats.thumbnail.url}`
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "my-dark ",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xl: 3,
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          className: "pt-4 ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "http://localhost:1337/uploads/logo_9b5ab53b51.png",
            style: {
              height: "40px"
            },
            alt: "logo"
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "my-orange ml-2 primary-title",
            children: "Who Cares"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "my-3 text-white primary-font  ",
            children: ["Albert Villa,12mile,kalimpong ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "West Bengal, India"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "list-inline mt-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
                link: "/",
                color: " #3395ff",
                label: "teamwhocares123@gmail.com",
                children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiOutlineMail */.Dme, {}), " "]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
                color: " #3395ff",
                label: "+91-9876543210",
                link: "/",
                children: [/*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaPhoneAlt */.DNl, {}), " "]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xl: 3,
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          className: " pt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "primary-title  myborder-orange pb-2 my-orange",
            children: "Pages"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "list-inline mt-2 text-white",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                className: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white  cursor m-0",
                  children: "Home"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/about",
                className: "text-white",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white cursor m-0",
                  children: "About"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/event",
                className: "text-white",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white  cursor m-0",
                  children: "Events"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/getinvolved",
                className: "text-white",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white   cursor m-0",
                  children: "Get Involved"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/gallery",
                className: "text-white",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white    cursor m-0",
                  children: "Our Gallery"
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xl: 3,
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          className: " p-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "primary-title myborder-orange pb-2 my-orange",
            children: "Useful Links"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "list-inline mt-2 text-white",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "py-2",
              style: {
                borderBottom: "1px dashed white"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/getinvolved",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white cursor m-0",
                  children: "Become Volunteer"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "py-2",
              style: {
                borderBottom: "1px dashed white"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/event",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white cursor m-0",
                  children: "Recent Events"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "py-2",
              style: {
                borderBottom: "1px dashed white"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-white cursor m-0",
                  children: "Fund Raise"
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xl: 3,
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          className: " p-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "primary-title myborder-orange pb-2 my-orange",
            children: "Upcoming Events"
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "list-inline mt-2 text-white",
            children: list
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xl: 12,
          lg: 12,
          sm: 12,
          md: 12,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "text-center my-orange",
            children: "Connect with us on"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-center my-2",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
              link: "/",
              children: [/*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaFacebook */.Am9, {
                size: "40px",
                color: "#fff"
              }), " "]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
              link: "/",
              children: [/*#__PURE__*/jsx_runtime_.jsx(io_index_esm/* IoLogoWhatsapp */.ff9, {
                size: "40px",
                color: "#fff"
              }), " "]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
              link: "/",
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillInstagram */.t0C, {
                size: "40px",
                color: "#fff"
              }), " "]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Iconcontainer, {
              link: "/",
              children: [/*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaFacebookMessenger */.sAh, {
                size: "40px",
                color: "#fff"
              }), " "]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          xl: 12,
          lg: 12,
          sm: 12,
          md: 12,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
              className: lpresentWindow.style,
              xl: 6,
              lg: 6,
              sm: 12,
              md: 6,
              xs: 12,
              children: "All right reserved by Who Cares"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
              className: presentWindow.style,
              xl: 6,
              lg: 6,
              sm: 12,
              md: 6,
              xs: 12,
              children: "Designed and Devloped with love by Pramod."
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const global_Footer = (Footer);
;// CONCATENATED MODULE: ./global/RecentEvent.js







function RecentEvent(props) {
  let date = props.date;

  const defaultValue = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-white m-0",
        children: props.eventName
      }), /*#__PURE__*/jsx_runtime_.jsx("small", {
        className: "text-white",
        children: date != undefined ? date.slice(0, 10) : " "
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: props.link,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      className: `${props.className} d-flex m-0 align-items-center cursor`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        xs: 3,
        sm: 3,
        md: 3,
        className: "p-0 m-0 overflow-hidden",
        style: {
          height: "40px",
          maxWidth: "80px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: props.img,
          className: " bg-light w-100",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        xs: 8,
        sm: 8,
        md: 8,
        className: "m-0 p-0",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-flex flex-column ml-1",
          children: props.children ? props.children : defaultValue()
        })
      })]
    })
  });
}

/* harmony default export */ const global_RecentEvent = (RecentEvent);
// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__(2352);
;// CONCATENATED MODULE: ./global/Share.js






function Share(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "d-flex",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_share_.FacebookShareButton, {
      color: "#fb743e",
      url: props.link,
      title: props.causename,
      size: "1.5em",
      children: [" ", /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillFacebook */.s5I, {
        color: "#fb743e",
        size: "1.5em"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_share_.TwitterShareButton, {
      color: "#fb743e",
      url: props.link,
      title: props.causename,
      size: "1.5em",
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillTwitterCircle */.wod, {
        color: "#fb743e",
        size: "1.5em"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_share_.WhatsappShareButton, {
      color: "#fb743e",
      url: props.link,
      title: props.causename,
      size: "1.5em",
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillInstagram */.t0C, {
        color: "#fb743e",
        size: "1.5em"
      })
    })]
  });
}

/* harmony default export */ const global_Share = (Share);
;// CONCATENATED MODULE: ./global/DonationApeal.js






function DonationApeal() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
    className: "sm-card",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
      src: "images/about.png",
      className: "w-100 h-100 sm-card"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.ImgOverlay, {
      className: "light-overlay",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          xsm: 12,
          sm: 12,
          md: 5,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Image, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          xsm: 12,
          sm: 12,
          md: 7,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "myprimary-text h3",
            children: "Cause Name"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex flex-row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "mysecondary-text p1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "my-orange p1",
                children: "Raised:"
              }), "$1000"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "ml-4 mysecondary-text p1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "my-orange p1",
                children: "Goal:"
              }), "$2000"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "p1 myprimary-text",
              children: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-secondary p1",
              children: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "myprimary-text p1",
              children: "Read more"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              className: "rounded myorange-bg border-0",
              children: "Donate"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-0",
                children: "HELP US BY SHARE:"
              }), /*#__PURE__*/jsx_runtime_.jsx(global_Share, {})]
            })]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const global_DonationApeal = (DonationApeal);
// EXTERNAL MODULE: ./node_modules/react-icons/im/index.esm.js
var im_index_esm = __webpack_require__(3990);
;// CONCATENATED MODULE: ./global/GEventCard.js







function GEventCard(props) {
  const {
    0: month,
    1: setmonth
  } = (0,external_react_.useState)();
  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)();
  const {
    0: events,
    1: setEvent
  } = (0,external_react_.useState)({
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

  (0,external_react_.useEffect)(() => {
    try {
      let program = props.event;

      if (program != undefined) {
        setEvent(program);
        timeFormater();
      }
    } catch {}
  }, [props.event, events.startdate]);
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `eventdetail/${events.id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
      className: "h-100 overflow-hidden cursor",
      style: {
        maxHeight: "350px"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
        src: `http://localhost:1337${events.headerimage.formats.medium.url}`
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.ImgOverlay, {
        className: "banner-overlay",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Footer, {
          className: "text-white border-0 cardmargin",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              xs: 3,
              sm: 2,
              md: 3,
              lg: 2,
              className: "myorange-bg  rounded",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-0 text-center h2",
                children: events.startdate.slice(8, 10)
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-0 text-center",
                children: month
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              xs: 9,
              sm: 10,
              md: 9,
              lg: 10,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "h4",
                children: events.Name
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "d-flex align-items-center ",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(im_index_esm/* ImLocation2 */.VFp, {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "m-0 ml-1 p1",
                    children: events.location
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "d-flex align-items-center ml-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(im_index_esm/* ImClock */.Ix7, {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "m-0 ml-1 p1",
                    children: time
                  })]
                })]
              })]
            })]
          })
        })
      })]
    })
  });
}

/* harmony default export */ const global_GEventCard = (GEventCard);
// EXTERNAL MODULE: ./env/env.js
var env = __webpack_require__(1613);
;// CONCATENATED MODULE: ./global/PhotoGallery.js








function ImageContainer(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
    xs: 4,
    sm: 4,
    md: 4,
    onClick: props.onClick,
    className: "p-1 cursor overflow-hidden h-100  photo",
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "w-100  ",
      src: `${env/* HOST */.M}${props.src}`,
      alt: ""
    })
  });
}

function PhotoGallery({
  photo
}) {
  const {
    0: singlePhoto,
    1: setSinglePhoto
  } = (0,external_react_.useState)("none");
  const {
    0: sliderCount,
    1: setSliderCount
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "photoDisplay w-100  section-mgap",
      style: {
        display: singlePhoto
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(io_index_esm/* IoMdClose */.QAE, {
        color: "#fff",
        size: "2em",
        className: "cursor buttonRight",
        style: {
          position: "absolute",
          zIndex: "99"
        },
        onClick: () => {
          setSinglePhoto("none");
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-flex align-items-center h-100",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel, {
          indicators: false,
          activeIndex: sliderCount,
          onSelect: (selectIndex, e) => {
            setSliderCount(selectIndex);
          },
          children: photo.photos.map((photo, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Carousel.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: `${env/* HOST */.M}${photo.url}`,
                  className: "p-4 h-50 w-50 "
                }, index)
              })
            }, index);
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container section-pbgap",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        className: "section-pbgap",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center myprimary-text h2 text-capitalize",
          children: photo.albumname
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-center my-orange",
          children: photo.description
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: photo.photos.map((photo, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(ImageContainer, {
            src: photo.url,
            onClick: () => {
              setSliderCount(index);
              setSinglePhoto("");
            }
          }, index);
        })
      })]
    })]
  });
}

/* harmony default export */ const global_PhotoGallery = (PhotoGallery);
;// CONCATENATED MODULE: ./global/StaffList.js





const SCd = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
      src: "images/icon/profilePic.jpg"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Footer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-center myprimary-text h5",
        children: props.des.name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-center my-orange ",
        children: props.des.degenation
      })]
    })]
  });
};

function StaffList() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.CardDeck, {
    className: "d-flex",
    children: [/*#__PURE__*/jsx_runtime_.jsx(SCd, {
      des: {
        name: "Pramod",
        degenation: "Manager"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(SCd, {
      des: {
        name: "Pramod",
        degenation: "Manager"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(SCd, {
      des: {
        name: "Pramod",
        degenation: "Manager"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(SCd, {
      des: {
        name: "Pramod",
        degenation: "Manager"
      }
    })]
  });
}

/* harmony default export */ const global_StaffList = (StaffList);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./global/VolunteerForm.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function VolunteerForm() {
  const {
    0: input,
    1: setInput
  } = (0,external_react_.useState)((0,external_react_.useState)({
    fname: "",
    lname: "",
    address: "",
    phonenumber: "",
    email: ""
  }));
  const {
    0: status,
    1: setstatus
  } = (0,external_react_.useState)();
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let url = "http://localhost:1337/volunteerregistrations";

  const inputHandler = event => {
    event.preventDefault();
    setInput(input => _objectSpread(_objectSpread({}, input), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const data = await external_axios_default().post(url, input);
      statusHandler(data);
      setShow(true);
    } catch (err) {
      statusHandler(err);
      setShow(true);
      console.log(err);
    }

    setInput({
      fname: "",
      lname: "",
      address: "",
      phonenumber: "",
      email: ""
    });
  };

  const statusHandler = data => {
    console.log(data);

    if (data.status === 200) {
      setstatus(successModal);
    } else {
      setstatus(errmodal);
    }
  };

  const errmodal = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
        closeButton: true,
        className: "text-danger",
        children: "Error"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-danger",
          children: "Something Went wrong please try again"
        })
      })]
    });
  };

  const successModal = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
        closeButton: true,
        className: "text-success",
        children: "Success"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-success",
          children: "Thank you for registration we will contact you."
        })
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
      show: show,
      backdrop: "static",
      keyboard: false,
      onHide: () => {
        setShow(false);
      },
      children: status
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Row, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
          as: external_react_bootstrap_.Col,
          controlId: "firstname",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
            children: "First Name"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
            name: "fname",
            type: "text",
            placeholder: "First Name",
            onChange: inputHandler,
            value: input.fname,
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
          as: external_react_bootstrap_.Col,
          controlId: "lastname",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
            children: "Last Name"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
            type: "text",
            onChange: inputHandler,
            value: input.lname,
            name: "lname",
            placeholder: "Last Name"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
        controlId: "address",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
          children: "Address"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: "text",
          name: "address",
          placeholder: "Address",
          value: input.address,
          onChange: inputHandler,
          required: true
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
        controlId: "phonenumber",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
          children: "Phone Number"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: "text",
          name: "phonenumber",
          placeholder: "Phone Number",
          required: true,
          onChange: inputHandler,
          value: input.phonenumber
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
        controlId: "email",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: "email",
          name: "email",
          placeholder: "Email",
          value: input.email,
          onChange: inputHandler,
          required: true
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        className: "myorange-bg border-0",
        onClick: handleSubmit,
        children: "Register"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./global/CommentForm.js



function CommentForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CommentForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CommentForm_ownKeys(Object(source), true).forEach(function (key) { CommentForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CommentForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CommentForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CommentForm = ({
  endpoints,
  commentrefresh
}) => {
  const {
    0: comment,
    1: setComment
  } = (0,external_react_.useState)({
    name: "",
    email: "",
    comment: "",
    event: {},
    recent_event: {}
  });

  const InputHandler = event => {
    event.preventDefault();
    setComment(comment => CommentForm_objectSpread(CommentForm_objectSpread({}, comment), {}, {
      [event.target.name]: event.target.value
    }));
  };

  (0,external_react_.useEffect)(() => {
    if (endpoints.name === "events") {
      setComment(CommentForm_objectSpread(CommentForm_objectSpread({}, comment), {}, {
        event: endpoints.value.post
      }));
    }

    if (endpoints.name === "recentevent") {
      setComment(CommentForm_objectSpread(CommentForm_objectSpread({}, comment), {}, {
        recent_event: endpoints.value.post
      }));
    }
  }, [endpoints.value]);

  const submitHandler = async event => {
    event.preventDefault();

    try {
      console.log(comment);
      const req = external_axios_default().post("http://localhost:1337/comments/", comment);
      console.log(req);
      setComment({
        name: "",
        email: "",
        comment: "",
        event: {},
        recent_event: {}
      });
      commentrefresh(endpoints.value.post);
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
    className: "  sw-100 border-bottom",
    onSubmit: submitHandler,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
      className: "mb-3",
      controlId: "exampleForm.ControlTextarea1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
        children: "Your Thoughts"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
        as: "textarea",
        name: "comment",
        value: comment.comment,
        onChange: InputHandler,
        rows: 3,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Row, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Group, {
        as: external_react_bootstrap_.Col,
        md: 5,
        className: "mb-3",
        controlId: "name",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: "text",
          name: "name",
          value: comment.name,
          onChange: InputHandler,
          placeholder: "your name",
          required: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Group, {
        as: external_react_bootstrap_.Col,
        md: 5,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: "email",
          name: "email",
          value: comment.email,
          onChange: InputHandler,
          placeholder: "name@example.com",
          required: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Group, {
        as: external_react_bootstrap_.Col,
        md: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
          className: "myorange-bg border-0 w-100",
          type: "submit",
          children: " Comment"
        })
      })]
    })]
  });
};

/* harmony default export */ const global_CommentForm = (CommentForm);
;// CONCATENATED MODULE: ./global/Comment.js




function Comment(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "border p-3 my-4 rounded shadow",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "myprimary-text border-bottom",
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "mysecondary-text",
      children: props.comment
    })]
  });
}

/* harmony default export */ const global_Comment = (Comment);
;// CONCATENATED MODULE: ./global/ErrorHandler.js






function ErrorHandler(props) {
  const {
    0: status,
    1: setstatus
  } = (0,external_react_.useState)();
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    statusHandler(props.status);
  }, [props.status]);

  const statusHandler = () => {
    console.log(props.status);

    if (props.status === 200) {
      setstatus(successModal);
      console.log("scmodal");
      return;
    } else {
      setstatus(errmodal);
      console.log(props.status);
    }
  };

  const errmodal = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
        closeButton: true,
        className: "text-danger",
        children: "Error"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-danger",
          children: "Something Went wrong please try again"
        })
      })]
    });
  };

  const successModal = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
        closeButton: true,
        className: "text-success",
        children: "Success"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-success",
          children: "Thank you for registration we will contact you."
        })
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
      show: show,
      backdrop: "static",
      keyboard: false,
      onHide: () => {
        setShow(false);
      },
      children: status
    })
  });
}

/* harmony default export */ const global_ErrorHandler = (ErrorHandler);
;// CONCATENATED MODULE: ./global/index.js













/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;