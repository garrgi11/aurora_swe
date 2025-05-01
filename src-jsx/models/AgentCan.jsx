"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var THREE = _interopRequireWildcard(require("three"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AgentCan = function AgentCan(_ref) {
  var position = _ref.position,
    agent = _ref.agent,
    isActive = _ref.isActive,
    onClick = _ref.onClick,
    rotationState = _ref.rotationState;
  var meshRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hovered = _useState2[0],
    setHovered = _useState2[1];

  // Calculate target rotation based on the rotationState (0-3)
  var targetRotationY = rotationState * Math.PI / 2;
  (0, _fiber.useFrame)(function (state, delta) {
    if (!meshRef.current) return;

    // Animate to the target rotation with a spring-like effect
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, delta * 2.5);

    // If active, add a subtle floating animation
    if (isActive) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    } else {
      meshRef.current.position.y = position[1];
    }
  });

  // Generate a color based on the agent category
  var getCategoryColor = function getCategoryColor(category) {
    switch (category.toLowerCase()) {
      case 'crypto':
        return "#76E4F7";
      // sky blue
      case 'medical':
        return "#9AE6B4";
      // mint green
      case 'smart contract':
        return "#B794F4";
      // lavender
      case 'legal':
        return "#FEEBC8";
      // cream
      case 'voice':
        return "#FBB6CE";
      // pink
      default:
        return "#B794F4";
      // default lavender
    }
  };
  var color = getCategoryColor(agent.category);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("mesh", {
    ref: meshRef,
    position: [position[0], position[1], position[2]],
    onClick: onClick,
    onPointerOver: function onPointerOver() {
      return setHovered(true);
    },
    onPointerOut: function onPointerOut() {
      return setHovered(false);
    },
    scale: isActive ? 1.05 : 1,
    className: "spring-transition",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("cylinderGeometry", {
      args: [0.7, 0.7, 1.5, 32]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.MeshDistortMaterial, {
      color: color,
      distort: isActive ? 0.2 : 0.1,
      speed: isActive ? 1.5 : 1,
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("mesh", {
      position: [0, 0.76, 0],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("cylinderGeometry", {
        args: [0.7, 0.7, 0.05, 32]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meshStandardMaterial", {
        color: "#f8f8f8",
        metalness: 0.4,
        roughness: 0.3
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("mesh", {
      position: [0, -0.76, 0],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("cylinderGeometry", {
        args: [0.7, 0.7, 0.05, 32]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meshStandardMaterial", {
        color: "#f8f8f8",
        metalness: 0.4,
        roughness: 0.3
      })]
    })]
  });
};
var _default = exports["default"] = AgentCan;
//# sourceMappingURL=AgentCan.jsx.map