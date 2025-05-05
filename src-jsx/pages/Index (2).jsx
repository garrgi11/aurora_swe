"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _ThreeDScene = _interopRequireDefault(require("../components/ThreeDScene"));
var _AgentDetail = _interopRequireDefault(require("../components/AgentDetail"));
var _NavigationControls = _interopRequireDefault(require("../components/NavigationControls"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _agents = require("../data/agents");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Index = function Index() {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeAgentIndex = _useState2[0],
    setActiveAgentIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    rotationState = _useState4[0],
    setRotationState = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    scrollPosition = _useState6[0],
    setScrollPosition = _useState6[1];
  var containerRef = (0, _react.useRef)(null);

  // Handle scroll to navigate between agents
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (!containerRef.current) return;
      var newScrollPosition = window.scrollY;
      var direction = newScrollPosition > scrollPosition ? "down" : "up";
      setScrollPosition(newScrollPosition);

      // Use scroll to move between agents
      var scrollThreshold = window.innerHeight;
      var normalizedScroll = Math.floor(newScrollPosition / scrollThreshold);
      if (normalizedScroll !== activeAgentIndex && normalizedScroll < _agents.agentsData.length) {
        setActiveAgentIndex(normalizedScroll);
        setRotationState(0); // Reset rotation state when changing agents
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, activeAgentIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: containerRef,
    className: "min-h-screen gradient-background text-foreground font-poppins",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pt-24",
      children: _agents.agentsData.map(function (_, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-screen flex flex-col items-center justify-center px-4",
          id: "agent-".concat(index),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "w-full max-w-6xl mx-auto",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "h-[500px] relative",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThreeDScene["default"], {
                  agents: _agents.agentsData,
                  activeAgentIndex: activeAgentIndex,
                  setActiveAgentIndex: setActiveAgentIndex,
                  rotationState: rotationState,
                  setRotationState: setRotationState
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex flex-col justify-center p-2",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AgentDetail["default"], {
                  agent: _agents.agentsData[index],
                  rotationState: rotationState
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavigationControls["default"], {
              rotationState: rotationState,
              setRotationState: setRotationState,
              totalStates: 4
            }), index < _agents.agentsData.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex justify-center mt-4 animate-bounce",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "border-2 border-pastel-lavender rounded-full p-2",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                  className: "w-4 h-4 text-pastel-lavender",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "3",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                  })
                })
              })
            })]
          })
        }, index);
      })
    })]
  });
};
var _default = exports["default"] = Index;
//# sourceMappingURL=Index.jsx.map