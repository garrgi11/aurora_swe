"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerTrigger = exports.DrawerTitle = exports.DrawerPortal = exports.DrawerOverlay = exports.DrawerHeader = exports.DrawerFooter = exports.DrawerDescription = exports.DrawerContent = exports.DrawerClose = exports.Drawer = void 0;
var React = _interopRequireWildcard(require("react"));
var _vaul = require("vaul");
var _utils = require("@/lib/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["shouldScaleBackground"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "children"],
  _excluded4 = ["className"],
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
var Drawer = exports.Drawer = function Drawer(_ref) {
  var _ref$shouldScaleBackg = _ref.shouldScaleBackground,
    shouldScaleBackground = _ref$shouldScaleBackg === void 0 ? true : _ref$shouldScaleBackg,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vaul.Drawer.Root, _objectSpread({
    shouldScaleBackground: shouldScaleBackground
  }, props));
};
Drawer.displayName = "Drawer";
var DrawerTrigger = exports.DrawerTrigger = _vaul.Drawer.Trigger;
var DrawerPortal = exports.DrawerPortal = _vaul.Drawer.Portal;
var DrawerClose = exports.DrawerClose = _vaul.Drawer.Close;
var DrawerOverlay = exports.DrawerOverlay = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vaul.Drawer.Overlay, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("fixed inset-0 z-50 bg-black/80", className)
  }, props));
});
DrawerOverlay.displayName = _vaul.Drawer.Overlay.displayName;
var DrawerContent = exports.DrawerContent = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DrawerPortal, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DrawerOverlay, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_vaul.Drawer.Content, _objectSpread(_objectSpread({
      ref: ref,
      className: (0, _utils.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)
    }, props), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
      }), children]
    }))]
  });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = exports.DrawerHeader = function DrawerHeader(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: (0, _utils.cn)("grid gap-1.5 p-4 text-center sm:text-left", className)
  }, props));
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = exports.DrawerFooter = function DrawerFooter(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: (0, _utils.cn)("mt-auto flex flex-col gap-2 p-4", className)
  }, props));
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = exports.DrawerTitle = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vaul.Drawer.Title, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("text-lg font-semibold leading-none tracking-tight", className)
  }, props));
});
DrawerTitle.displayName = _vaul.Drawer.Title.displayName;
var DrawerDescription = exports.DrawerDescription = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_vaul.Drawer.Description, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("text-sm text-muted-foreground", className)
  }, props));
});
DrawerDescription.displayName = _vaul.Drawer.Description.displayName;
//# sourceMappingURL=drawer.jsx.map