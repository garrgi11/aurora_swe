"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationPrevious = exports.PaginationNext = exports.PaginationLink = exports.PaginationItem = exports.PaginationEllipsis = exports.PaginationContent = exports.Pagination = void 0;
var React = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _button = require("@/components/ui/button");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "isActive", "size"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Pagination = exports.Pagination = function Pagination(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", _objectSpread({
    role: "navigation",
    "aria-label": "pagination",
    className: (0, _utils.cn)("mx-auto flex w-full justify-center", className)
  }, props));
};
Pagination.displayName = "Pagination";
var PaginationContent = exports.PaginationContent = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("flex flex-row items-center gap-1", className)
  }, props));
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = exports.PaginationItem = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("", className)
  }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = exports.PaginationLink = function PaginationLink(_ref4) {
  var className = _ref4.className,
    isActive = _ref4.isActive,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? "icon" : _ref4$size,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread({
    "aria-current": isActive ? "page" : undefined,
    className: (0, _utils.cn)((0, _button.buttonVariants)({
      variant: isActive ? "outline" : "ghost",
      size: size
    }), className)
  }, props));
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = exports.PaginationPrevious = function PaginationPrevious(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to previous page",
    size: "default",
    className: (0, _utils.cn)("gap-1 pl-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ChevronLeft, {
      className: "h-4 w-4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "Previous"
    })]
  }));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = exports.PaginationNext = function PaginationNext(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to next page",
    size: "default",
    className: (0, _utils.cn)("gap-1 pr-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "Next"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ChevronRight, {
      className: "h-4 w-4"
    })]
  }));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = exports.PaginationEllipsis = function PaginationEllipsis(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({
    "aria-hidden": true,
    className: (0, _utils.cn)("flex h-9 w-9 items-center justify-center", className)
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.MoreHorizontal, {
      className: "h-4 w-4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "sr-only",
      children: "More pages"
    })]
  }));
};
PaginationEllipsis.displayName = "PaginationEllipsis";
//# sourceMappingURL=pagination.jsx.map