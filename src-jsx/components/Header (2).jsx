"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _lucideReact = require("lucide-react");
var _reactRouterDom = require("react-router-dom");
var _Cart = _interopRequireDefault(require("./Cart"));
var _UploadAgent = _interopRequireDefault(require("./UploadAgent"));
var _react = require("react");
var _agents = require("../data/agents");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = function Header() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isCartOpen = _useState4[0],
    setIsCartOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isUploadOpen = _useState6[0],
    setIsUploadOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchQuery = _useState8[0],
    setSearchQuery = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    userData = _useState0[0],
    setUserData = _useState0[1];
  (0, _react.useEffect)(function () {
    // Check if user is logged in
    var storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);
  var handleLogout = function handleLogout() {
    localStorage.removeItem('user');
    setUserData(null);
    setIsLoggedIn(false);
    navigate("/");
  };
  var handleSearch = function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    var agentIndex = _agents.agentsData.findIndex(function (agent) {
      return agent.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (agentIndex !== -1) {
      var element = document.getElementById("agent-".concat(agentIndex));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
      element === null || element === void 0 || element.classList.add('highlight-agent');
      setTimeout(function () {
        element === null || element === void 0 || element.classList.remove('highlight-agent');
      }, 2000);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
      className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-lavender/20",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "container mx-auto py-4 px-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Package, {
              className: "text-pastel-lavender mr-2 h-6 w-6"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              className: "text-xl font-bold font-montserrat glow-text bg-clip-text text-transparent bg-gradient-to-r from-pastel-sky to-pastel-lavender",
              children: "Aurora"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "hidden md:flex items-center space-x-2 relative max-w-md w-full",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
              onSubmit: handleSearch,
              className: "relative w-full flex items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
                placeholder: "Search AI agents...",
                className: "pl-10 pr-20 bg-white/50 border-pastel-lavender/30 focus:border-pastel-lavender font-quicksand",
                value: searchQuery,
                onChange: function onChange(e) {
                  return setSearchQuery(e.target.value);
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Search, {
                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pastel-lavender/70"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
                type: "submit",
                variant: "ghost",
                size: "sm",
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-pastel-lavender hover:bg-pastel-lavender/10 px-3 py-1",
                children: "Search"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex items-center space-x-4",
            children: isLoggedIn && userData ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "relative group",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                  className: "flex items-center space-x-2 focus:outline-none",
                  onClick: function onClick() {
                    return setIsLoggedIn(!isLoggedIn);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "relative",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                      src: userData.profilePicture,
                      alt: userData.name,
                      className: "w-10 h-10 rounded-full object-cover border-2 border-pastel-lavender"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "hidden md:inline text-sm font-medium",
                    children: userData.name
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white border border-pastel-lavender/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "p-4 space-y-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "flex items-center space-x-4",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                        src: userData.profilePicture,
                        alt: userData.name,
                        className: "w-16 h-16 rounded-full object-cover"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                          className: "font-semibold text-lg",
                          children: userData.name
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                          className: "text-sm text-foreground/70",
                          children: userData.email
                        })]
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "space-y-2 pt-2 border-t border-pastel-lavender/20",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.User, {
                          className: "h-4 w-4 text-pastel-lavender"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          children: userData.name
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.User, {
                          className: "h-4 w-4 text-pastel-lavender"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          children: userData.email
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.User, {
                          className: "h-4 w-4 text-pastel-lavender"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          children: userData.phone
                        })]
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
                      variant: "outline",
                      className: "w-full border-pastel-lavender hover:bg-pastel-lavender/20",
                      onClick: handleLogout,
                      children: "Logout"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
                variant: "outline",
                className: "font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition",
                onClick: function onClick() {
                  return setIsUploadOpen(true);
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Upload, {
                  className: "h-4 w-4 mr-2"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "hidden sm:inline",
                  children: "Upload Agent"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
                variant: "ghost",
                size: "icon",
                className: "text-pastel-lavender hover:bg-pastel-lavender/10 relative w-12 h-12",
                onClick: function onClick() {
                  return setIsCartOpen(true);
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ShoppingCart, {
                  className: "h-7 w-7"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "absolute -top-2 -right-2 bg-pastel-lavender text-white text-xs rounded-full h-6 w-6 flex items-center justify-center",
                  children: "2"
                })]
              })]
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
                variant: "outline",
                className: "font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition",
                onClick: function onClick() {
                  return navigate("/auth");
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.LogIn, {
                  className: "h-4 w-4 mr-2"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "hidden sm:inline",
                  children: "Login"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
                variant: "default",
                className: "font-quicksand bg-pastel-lavender hover:bg-pastel-lavender/80 text-white spring-transition",
                onClick: function onClick() {
                  return navigate("/auth");
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Rocket, {
                  className: "h-4 w-4 mr-2"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "hidden sm:inline",
                  children: "Get Started"
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Cart["default"], {
      isOpen: isCartOpen,
      onClose: function onClose() {
        return setIsCartOpen(false);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadAgent["default"], {
      isOpen: isUploadOpen,
      onClose: function onClose() {
        return setIsUploadOpen(false);
      }
    })]
  });
};
var _default = exports["default"] = Header;
//# sourceMappingURL=Header.jsx.map