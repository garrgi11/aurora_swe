"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _sheet = require("@/components/ui/sheet");
var _button = require("@/components/ui/button");
var _lucideReact = require("lucide-react");
var _PurchaseConfirmationModal = _interopRequireDefault(require("./PurchaseConfirmationModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Cart = function Cart(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPurchaseConfirmation = _useState2[0],
    setShowPurchaseConfirmation = _useState2[1];

  // Dummy cart data
  var cartItems = [{
    id: 1,
    name: "Pionex Trading Bot",
    price: 49.99,
    description: "Advanced crypto trading automation"
  }, {
    id: 2,
    name: "Buoy Health Assistant",
    price: 19.99,
    description: "AI-powered health recommendations"
  }];
  var handleCheckout = function handleCheckout() {
    setShowPurchaseConfirmation(true);
    // Close the cart sheet after a short delay
    setTimeout(function () {
      onClose();
    }, 500);
  };
  var total = cartItems.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sheet.Sheet, {
      open: isOpen,
      onOpenChange: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_sheet.SheetContent, {
        className: "bg-white",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sheet.SheetHeader, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_sheet.SheetTitle, {
              className: "font-montserrat flex items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ShoppingCart, {
                className: "mr-2 h-5 w-5"
              }), "Your Cart"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
              variant: "ghost",
              size: "icon",
              className: "hover:bg-pastel-lavender/10",
              onClick: onClose,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.X, {
                className: "h-5 w-5"
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mt-8 space-y-4",
          children: cartItems.map(function (item) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex justify-between items-start border-b border-pastel-lavender/20 pb-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                  className: "font-semibold font-montserrat",
                  children: item.name
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  className: "text-sm text-foreground/70 font-quicksand",
                  children: item.description
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  className: "font-semibold",
                  children: ["$", item.price]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
                  variant: "ghost",
                  size: "icon",
                  className: "text-red-500 hover:text-red-600 hover:bg-red-50",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.X, {
                    className: "h-4 w-4"
                  })
                })]
              })]
            }, item.id);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-pastel-lavender/20",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex justify-between items-center mb-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-semibold font-montserrat",
              children: "Total"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "font-bold text-lg",
              children: ["$", total.toFixed(2)]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            className: "w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand",
            onClick: handleCheckout,
            children: "Checkout"
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PurchaseConfirmationModal["default"], {
      isOpen: showPurchaseConfirmation,
      onClose: function onClose() {
        return setShowPurchaseConfirmation(false);
      }
    })]
  });
};
var _default = exports["default"] = Cart;
//# sourceMappingURL=Cart.jsx.map