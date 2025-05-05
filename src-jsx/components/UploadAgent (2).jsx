"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _textarea = require("@/components/ui/textarea");
var _lucideReact = require("lucide-react");
var _select = require("@/components/ui/select");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UploadAgent = function UploadAgent(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)({
      name: "",
      repoType: "github",
      repoUrl: "",
      description: "",
      purpose: "",
      category: "",
      pricingFree: "",
      pricingPremium: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSelectChange = function handleSelectChange(name, value) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted:", formData);
    onClose();
  };
  if (!isOpen) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 m-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex justify-between items-center mb-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center space-x-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Upload, {
            className: "h-5 w-5 text-pastel-lavender"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "text-xl font-semibold",
            children: "Upload AI Agent"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
          variant: "ghost",
          size: "icon",
          onClick: onClose,
          className: "hover:bg-pastel-lavender/10",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.X, {
            className: "h-4 w-4"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-medium text-lg",
            children: "Basic Information"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Agent Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
              name: "name",
              value: formData.name,
              onChange: handleChange,
              placeholder: "Enter your AI agent's name",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender",
              required: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Repository Type"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_select.Select, {
              value: formData.repoType,
              onValueChange: function onValueChange(value) {
                return handleSelectChange("repoType", value);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectTrigger, {
                className: "border-pastel-lavender/30 focus:border-pastel-lavender",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectValue, {
                  placeholder: "Select repository type"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_select.SelectContent, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "github",
                  children: "GitHub"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "huggingface",
                  children: "Hugging Face"
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Repository URL"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
              name: "repoUrl",
              value: formData.repoUrl,
              onChange: handleChange,
              placeholder: "Enter repository URL",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender",
              required: true
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-medium text-lg",
            children: "Agent Details"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Description"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textarea.Textarea, {
              name: "description",
              value: formData.description,
              onChange: handleChange,
              placeholder: "Describe your AI agent's capabilities",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender min-h-[100px]",
              required: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Purpose"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textarea.Textarea, {
              name: "purpose",
              value: formData.purpose,
              onChange: handleChange,
              placeholder: "What problems does your agent solve?",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender",
              required: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Category"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_select.Select, {
              value: formData.category,
              onValueChange: function onValueChange(value) {
                return handleSelectChange("category", value);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectTrigger, {
                className: "border-pastel-lavender/30 focus:border-pastel-lavender",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectValue, {
                  placeholder: "Select category"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_select.SelectContent, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "crypto",
                  children: "Crypto"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "medical",
                  children: "Medical"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "smart-contract",
                  children: "Smart Contract"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "legal",
                  children: "Legal"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.SelectItem, {
                  value: "voice",
                  children: "Voice"
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-medium text-lg",
            children: "Pricing"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Free Tier Features"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textarea.Textarea, {
              name: "pricingFree",
              value: formData.pricingFree,
              onChange: handleChange,
              placeholder: "What features are included in the free tier?",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender",
              required: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-sm font-medium mb-1",
              children: "Premium Tier Features & Pricing"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textarea.Textarea, {
              name: "pricingPremium",
              value: formData.pricingPremium,
              onChange: handleChange,
              placeholder: "Describe premium features and pricing",
              className: "border-pastel-lavender/30 focus:border-pastel-lavender",
              required: true
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex justify-end space-x-2 pt-4 border-t border-pastel-lavender/20",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            type: "button",
            variant: "outline",
            onClick: onClose,
            className: "border-pastel-lavender hover:bg-pastel-lavender/10",
            children: "Cancel"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            type: "submit",
            className: "bg-pastel-lavender hover:bg-pastel-lavender/80 text-white",
            children: "Upload Agent"
          })]
        })]
      })]
    })
  });
};
var _default = exports["default"] = UploadAgent;
//# sourceMappingURL=UploadAgent.jsx.map