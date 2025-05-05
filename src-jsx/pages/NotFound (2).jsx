"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var NotFound = function NotFound() {
  var location = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(function () {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-100",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "text-4xl font-bold mb-4",
        children: "404"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-xl text-gray-600 mb-4",
        children: "Oops! Page not found"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "/",
        className: "text-blue-500 hover:text-blue-700 underline",
        children: "Return to Home"
      })]
    })
  });
};
var _default = exports["default"] = NotFound;
//# sourceMappingURL=NotFound.jsx.map