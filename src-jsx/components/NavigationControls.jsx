"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _button = require("@/components/ui/button");
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var NavigationControls = function NavigationControls(_ref) {
  var rotationState = _ref.rotationState,
    setRotationState = _ref.setRotationState,
    totalStates = _ref.totalStates;
  var handlePrevious = function handlePrevious() {
    setRotationState(Math.max(0, rotationState - 1));
  };
  var handleNext = function handleNext() {
    setRotationState(Math.min(totalStates - 1, rotationState + 1));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex justify-between items-center w-full max-w-md mx-auto mt-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
      variant: "outline",
      size: "icon",
      onClick: handlePrevious,
      disabled: rotationState === 0,
      className: "rounded-full border-neon-blue ".concat(rotationState > 0 ? "hover:bg-neon-blue/20" : ""),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ChevronLeft, {
        className: "h-6 w-6"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex space-x-2",
      children: _toConsumableArray(Array(4)).map(function (_, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
          variant: "outline",
          size: "icon",
          className: "w-3 h-3 p-0 rounded-full ".concat(i === rotationState ? "bg-neon-purple border-neon-purple" : "bg-transparent border-gray-500"),
          onClick: function onClick() {
            return setRotationState(i);
          }
        }, i);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
      variant: "outline",
      size: "icon",
      onClick: handleNext,
      disabled: rotationState === totalStates - 1,
      className: "rounded-full border-neon-blue ".concat(rotationState < totalStates - 1 ? "hover:bg-neon-blue/20" : ""),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ChevronRight, {
        className: "h-6 w-6"
      })
    })]
  });
};
var _default = exports["default"] = NavigationControls;
//# sourceMappingURL=NavigationControls.jsx.map