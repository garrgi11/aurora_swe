"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fiber = require("@react-three/fiber");
var _react = require("react");
var _drei = require("@react-three/drei");
var _AgentCan = _interopRequireDefault(require("../models/AgentCan"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ThreeDScene = function ThreeDScene(_ref) {
  var agents = _ref.agents,
    activeAgentIndex = _ref.activeAgentIndex,
    setActiveAgentIndex = _ref.setActiveAgentIndex,
    rotationState = _ref.rotationState,
    setRotationState = _ref.setRotationState;
  var canvasRef = (0, _react.useRef)(null);
  var handleCanClick = function handleCanClick(index) {
    if (index === activeAgentIndex) {
      // If clicking the active agent, cycle through rotation states
      setRotationState(function (prev) {
        return (prev + 1) % 4;
      });
    } else {
      // If clicking a new agent, make it active and reset rotation
      setActiveAgentIndex(index);
      setRotationState(0);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "h-full w-full",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_fiber.Canvas, {
      ref: canvasRef,
      shadows: true,
      dpr: [1, 2],
      className: "bg-gradient-to-b from-pastel-lavender/20 to-pastel-sky/20 rounded-xl",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("fog", {
        attach: "fog",
        args: ["#F1EBFD", 5, 15]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ambientLight", {
        intensity: 0.7
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("directionalLight", {
        castShadow: true,
        position: [2, 2, 2],
        intensity: 1.5,
        "shadow-mapSize-width": 1024,
        "shadow-mapSize-height": 1024
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("pointLight", {
        position: [-1, 1, -1],
        intensity: 0.8,
        color: "#B794F4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("pointLight", {
        position: [1, 1, -1],
        intensity: 0.8,
        color: "#76E4F7"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.PerspectiveCamera, {
        makeDefault: true,
        position: [0, 1, 5],
        fov: 50
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.OrbitControls, {
        enableZoom: true,
        enablePan: false,
        minPolarAngle: Math.PI / 4,
        maxPolarAngle: Math.PI / 2,
        minDistance: 3,
        maxDistance: 8
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Suspense, {
        fallback: null,
        children: [agents.map(function (agent, index) {
          // Calculate position based on index and active state
          var position;
          if (index === activeAgentIndex) {
            position = [0, 0, 0]; // Active agent in center
          } else if (index < activeAgentIndex) {
            // Position to the left and back in a subtle arc
            var offset = activeAgentIndex - index;
            position = [-1.5 * offset, -0.5 * offset, -1 * offset];
          } else {
            // Position to the right and back in a subtle arc
            var _offset = index - activeAgentIndex;
            position = [1.5 * _offset, -0.5 * _offset, -1 * _offset];
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AgentCan["default"], {
            position: position,
            agent: agent,
            isActive: index === activeAgentIndex,
            onClick: function onClick() {
              return handleCanClick(index);
            },
            rotationState: index === activeAgentIndex ? rotationState : 0
          }, agent.id);
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.Text, {
          position: [0, -1.5, 0],
          fontSize: 0.3,
          color: "#444",
          anchorX: "center",
          anchorY: "middle",
          font: "/fonts/Inter-Bold.woff",
          "material-toneMapped": false,
          children: agents[activeAgentIndex].name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.Environment, {
          preset: "park"
        })]
      })]
    })
  });
};
var _default = exports["default"] = ThreeDScene;
//# sourceMappingURL=ThreeDScene.jsx.map