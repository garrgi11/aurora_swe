"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputOTPSlot = exports.InputOTPSeparator = exports.InputOTPGroup = exports.InputOTP = void 0;
var React = _interopRequireWildcard(require("react"));
var _inputOtp = require("input-otp");
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "containerClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["index", "className"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var InputOTP = exports.InputOTP = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    containerClassName = _ref.containerClassName,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputOtp.OTPInput, _objectSpread({
    ref: ref,
    containerClassName: (0, _utils.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
    className: (0, _utils.cn)("disabled:cursor-not-allowed", className)
  }, props));
});
InputOTP.displayName = "InputOTP";
var InputOTPGroup = exports.InputOTPGroup = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    ref: ref,
    className: (0, _utils.cn)("flex items-center", className)
  }, props));
});
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = exports.InputOTPSlot = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var index = _ref3.index,
    className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var inputOTPContext = React.useContext(_inputOtp.OTPInputContext);
  var _inputOTPContext$slot = inputOTPContext.slots[index],
    _char = _inputOTPContext$slot["char"],
    hasFakeCaret = _inputOTPContext$slot.hasFakeCaret,
    isActive = _inputOTPContext$slot.isActive;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    ref: ref,
    className: (0, _utils.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className)
  }, props), {}, {
    children: [_char, hasFakeCaret && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
      })
    })]
  }));
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = exports.InputOTPSeparator = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    ref: ref,
    role: "separator"
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Dot, {})
  }));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
//# sourceMappingURL=input-otp.jsx.map