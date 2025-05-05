"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollBar = exports.ScrollArea = void 0;
var React = _interopRequireWildcard(require("react"));
var ScrollAreaPrimitive = _interopRequireWildcard(require("@radix-ui/react-scroll-area"));
var _utils = require("@/lib/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "children"],
  _excluded2 = ["className", "orientation"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var ScrollArea = exports.ScrollArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ScrollAreaPrimitive.Root, _objectSpread(_objectSpread({
    ref: ref,
    className: (0, _utils.cn)("relative overflow-hidden", className)
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollAreaPrimitive.Viewport, {
      className: "h-full w-full rounded-[inherit]",
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollBar, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollAreaPrimitive.Corner, {})]
  }));
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = exports.ScrollBar = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    _ref2$orientation = _ref2.orientation,
    orientation = _ref2$orientation === void 0 ? "vertical" : _ref2$orientation,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollAreaPrimitive.ScrollAreaScrollbar, _objectSpread(_objectSpread({
    ref: ref,
    orientation: orientation,
    className: (0, _utils.cn)("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, {
      className: "relative flex-1 rounded-full bg-border"
    })
  }));
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
//# sourceMappingURL=scroll-area.jsx.map