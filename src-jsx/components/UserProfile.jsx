"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _avatar = require("@/components/ui/avatar");
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserProfile = function UserProfile(_ref) {
  var userData = _ref.userData;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var dropdownRef = (0, _react.useRef)(null);

  // Close dropdown when clicking outside
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var getInitials = function getInitials(name) {
    return name.split(" ").map(function (n) {
      return n[0];
    }).join("").toUpperCase();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative",
    ref: dropdownRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
      variant: "ghost",
      size: "icon",
      className: "rounded-full hover:bg-pastel-lavender/10",
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_avatar.Avatar, {
        className: "h-8 w-8",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_avatar.AvatarImage, {
          src: userData.photo,
          alt: userData.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_avatar.AvatarFallback, {
          className: "bg-pastel-lavender text-white",
          children: getInitials(userData.name)
        })]
      })
    }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white border border-pastel-lavender/20",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-4 space-y-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center space-x-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_avatar.Avatar, {
              className: "h-16 w-16",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_avatar.AvatarImage, {
                src: userData.photo,
                alt: userData.name
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_avatar.AvatarFallback, {
                className: "bg-pastel-lavender text-white text-xl",
                children: getInitials(userData.name)
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
              size: "icon",
              variant: "outline",
              className: "absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white border-pastel-lavender hover:bg-pastel-lavender/10",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Camera, {
                className: "h-4 w-4 text-pastel-lavender"
              })
            })]
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pt-2 border-t border-pastel-lavender/20 space-y-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
            variant: "ghost",
            className: "w-full justify-start text-sm",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Settings, {
              className: "h-4 w-4 mr-2 text-pastel-lavender"
            }), "Settings"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
            variant: "ghost",
            className: "w-full justify-start text-sm text-red-500 hover:text-red-600 hover:bg-red-50",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.LogOut, {
              className: "h-4 w-4 mr-2"
            }), "Sign Out"]
          })]
        })]
      })
    })]
  });
};
var _default = exports["default"] = UserProfile;
//# sourceMappingURL=UserProfile.jsx.map