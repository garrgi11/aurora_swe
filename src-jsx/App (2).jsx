"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toaster = require("@/components/ui/toaster");
var _sonner = require("@/components/ui/sonner");
var _tooltip = require("@/components/ui/tooltip");
var _reactQuery = require("@tanstack/react-query");
var _reactRouterDom = require("react-router-dom");
var _Index = _interopRequireDefault(require("./pages/Index"));
var _AuthPage = _interopRequireDefault(require("./pages/AuthPage"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var queryClient = new _reactQuery.QueryClient();
var App = function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactQuery.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tooltip.TooltipProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_toaster.Toaster, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_sonner.Toaster, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/auth",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuthPage["default"], {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Index["default"], {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "*",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
              to: "/",
              replace: true
            })
          })]
        })
      })]
    })
  });
};
var _default = exports["default"] = App;
//# sourceMappingURL=App.jsx.map