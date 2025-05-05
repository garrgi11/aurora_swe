"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertDialogTrigger = exports.AlertDialogTitle = exports.AlertDialogPortal = exports.AlertDialogOverlay = exports.AlertDialogHeader = exports.AlertDialogFooter = exports.AlertDialogDescription = exports.AlertDialogContent = exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialog = void 0;
var React = _interopRequireWildcard(require("react"));
var AlertDialogPrimitive = _interopRequireWildcard(require("@radix-ui/react-alert-dialog"));
var _utils = require("@/lib/utils");
var _button = require("@/components/ui/button");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var AlertDialog = exports.AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = exports.AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = exports.AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = exports.AlertDialogOverlay = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Overlay, _objectSpread(_objectSpread({
    className: (0, _utils.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
  }, props), {}, {
    ref: ref
  }));
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = exports.AlertDialogContent = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(AlertDialogPortal, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogOverlay, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Content, _objectSpread({
      ref: ref,
      className: (0, _utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className)
    }, props))]
  });
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = exports.AlertDialogHeader = function AlertDialogHeader(_ref3) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: (0, _utils.cn)("flex flex-col space-y-2 text-center sm:text-left", className)
  }, props));
};
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = exports.AlertDialogFooter = function AlertDialogFooter(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: (0, _utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
  }, props));
};
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = exports.AlertDialogTitle = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Title, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("text-lg font-semibold", className)
  }, props));
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = exports.AlertDialogDescription = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Description, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("text-sm text-muted-foreground", className)
  }, props));
});
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = exports.AlertDialogAction = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Action, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)((0, _button.buttonVariants)(), className)
  }, props));
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = exports.AlertDialogCancel = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AlertDialogPrimitive.Cancel, _objectSpread({
    ref: ref,
    className: (0, _utils.cn)((0, _button.buttonVariants)({
      variant: "outline"
    }), "mt-2 sm:mt-0", className)
  }, props));
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
//# sourceMappingURL=alert-dialog.jsx.map