"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _badge = require("@/components/ui/badge");
var _card = require("@/components/ui/card");
var _PurchaseConfirmationModal = _interopRequireDefault(require("./PurchaseConfirmationModal"));
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Helper function to get color based on category
var getCategoryColor = function getCategoryColor(category) {
  switch (category.toLowerCase()) {
    case 'crypto':
      return 'bg-pastel-sky text-foreground';
    case 'medical':
      return 'bg-pastel-mint text-foreground';
    case 'smart contract':
      return 'bg-pastel-lavender text-foreground';
    case 'legal':
      return 'bg-pastel-cream text-foreground';
    case 'voice':
      return 'bg-pastel-pink text-foreground';
    default:
      return 'bg-pastel-lavender/50 text-foreground';
  }
};
var AgentDetail = function AgentDetail(_ref) {
  var agent = _ref.agent,
    rotationState = _ref.rotationState;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPurchaseConfirmation = _useState2[0],
    setShowPurchaseConfirmation = _useState2[1];
  var handlePurchase = function handlePurchase() {
    setShowPurchaseConfirmation(true);
  };

  // Show different content based on rotation state
  // 1: Description
  // 2: Pricing
  // 3: Use Cases & Industries
  // 4: Reviews

  // Different sections based on rotation state
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full animate-fade-in slide-in",
    children: [rotationState === 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center gap-2 mb-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_badge.Badge, {
          className: "".concat(getCategoryColor(agent.category)),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Tag, {
            size: 12,
            className: "mr-1"
          }), agent.category]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-2xl font-bold font-montserrat glow-text",
        children: agent.name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-foreground/80 font-quicksand",
        children: agent.description
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex items-center",
          children: _toConsumableArray(Array(5)).map(function (_, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Star, {
              size: 16,
              className: i < Math.floor(agent.ratings) ? "fill-amber-400 text-amber-400" : "text-gray-300"
            }, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-foreground/70",
          children: agent.ratings.toFixed(1)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pt-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_button.Button, {
          variant: "outline",
          className: "font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition",
          children: ["View More ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ChevronRight, {
            size: 16,
            className: "ml-1"
          })]
        })
      })]
    }), rotationState === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-2xl font-bold font-montserrat glow-text",
        children: "Pricing Options"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_card.Card, {
          className: "p-4 bg-white border-pastel-sky hover:shadow-md spring-transition",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            className: "text-xl font-semibold mb-2 flex items-center font-montserrat",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Package, {
              size: 20,
              className: "mr-2 text-pastel-sky"
            }), "Free Tier"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-foreground/70 mb-4 font-quicksand",
            children: agent.pricingFree
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            variant: "outline",
            className: "w-full border-pastel-sky hover:bg-pastel-sky/20 font-quicksand",
            children: "Download Free"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_card.Card, {
          className: "p-4 bg-gradient-to-br from-white to-pastel-lavender/10 border-pastel-lavender hover:shadow-md spring-transition",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            className: "text-xl font-semibold mb-2 flex items-center font-montserrat",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.DollarSign, {
              size: 20,
              className: "mr-2 text-pastel-lavender"
            }), "Premium"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-foreground/70 mb-4 font-quicksand",
            children: agent.pricingPremium
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            className: "w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand",
            onClick: handlePurchase,
            children: "Purchase Premium"
          })]
        })]
      })]
    }), rotationState === 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-2xl font-bold font-montserrat glow-text",
        children: "Use Cases & Industries"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-lg font-semibold font-montserrat",
          children: "Perfect For:"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: agent.useCases.map(function (useCase, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_badge.Badge, {
              variant: "outline",
              className: "bg-white border-pastel-sky font-quicksand",
              children: useCase
            }, index);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
          className: "text-lg font-semibold flex items-center font-montserrat",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Building, {
            size: 18,
            className: "mr-2 text-pastel-mint"
          }), "Best Fit Industries:"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: agent.industries.map(function (industry, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_badge.Badge, {
              className: "bg-pastel-mint/20 text-foreground font-quicksand",
              children: industry
            }, index);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pt-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
          className: "text-lg font-semibold flex items-center font-montserrat",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.User, {
            size: 18,
            className: "mr-2 text-pastel-sky"
          }), "Developer:"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-foreground/80 font-quicksand",
          children: agent.developerName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-sm text-foreground/60 font-quicksand",
          children: agent.developerProfile
        })]
      })]
    }), rotationState === 3 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-2xl font-bold font-montserrat glow-text",
        children: "User Reviews"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "space-y-4",
        children: agent.reviews.map(function (review) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_card.Card, {
            className: "p-4 bg-white border-pastel-lavender/30 hover:shadow-sm spring-transition",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex justify-between items-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  className: "font-semibold font-montserrat",
                  children: review.userName
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "flex items-center mt-1",
                  children: _toConsumableArray(Array(5)).map(function (_, i) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Star, {
                      size: 14,
                      className: i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }, i);
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-xs text-foreground/60",
                children: review.date
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "mt-2 text-foreground/80 font-quicksand",
              children: review.comment
            })]
          }, review.id);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
        variant: "outline",
        className: "w-full border-pastel-lavender hover:bg-pastel-lavender/20 font-quicksand",
        children: "View All Reviews"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PurchaseConfirmationModal["default"], {
      isOpen: showPurchaseConfirmation,
      onClose: function onClose() {
        return setShowPurchaseConfirmation(false);
      }
    })]
  });
};
var _default = exports["default"] = AgentDetail;
//# sourceMappingURL=AgentDetail.jsx.map