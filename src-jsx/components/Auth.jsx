"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _button = require("@/components/ui/button");
var _input = require("@/components/ui/input");
var _card = require("@/components/ui/card");
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var Auth = function Auth() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLogin = _useState2[0],
    setIsLogin = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: '',
      email: '',
      phone: '',
      password: '',
      profilePicture: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    user = _useState4[0],
    setUser = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    previewImage = _useState8[0],
    setPreviewImage = _useState8[1];
  var fileInputRef = (0, _react.useRef)(null);
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleImageChange = function handleImageChange(e) {
    var _e$target$files;
    var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        var result = reader.result;
        setPreviewImage(result);
        setUser(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            profilePicture: result
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!isLogin) {
      if (!user.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!user.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[1-9]\d{1,14}$/.test(user.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
    if (errors[name]) {
      setErrors(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, undefined));
      });
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    // Dummy authentication logic
    if (isLogin) {
      if (user.email === 'alex@example.com' && user.password === 'password123') {
        var userData = {
          name: 'Alex Johnson',
          email: user.email,
          phone: '+1 (555) 987-6543',
          profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop'
        };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate("/");
      } else {
        setErrors({
          password: 'Invalid email or password'
        });
      }
    } else {
      // Registration logic
      localStorage.setItem('user', JSON.stringify(user));
      setIsLogin(true);
      navigate("/");
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "min-h-screen flex items-center justify-center bg-gradient-to-b from-pastel-lavender/20 to-pastel-sky/20",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_card.Card, {
      className: "w-full max-w-md p-8 space-y-6",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-2xl font-bold font-montserrat glow-text",
          children: isLogin ? "Welcome Back" : "Create Account"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-foreground/70",
          children: isLogin ? "Sign in to continue exploring AI agents" : "Join us to discover amazing AI agents"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [!isLogin && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-sm font-medium",
              children: "Full Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
              name: "name",
              type: "text",
              placeholder: "John Doe",
              value: user.name,
              onChange: handleChange,
              className: "border-pastel-lavender/30 focus:border-pastel-lavender ".concat(errors.name ? 'border-red-500' : '')
            }), errors.name && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-red-500 text-sm",
              children: errors.name
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-sm font-medium",
              children: "Phone Number"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
              name: "phone",
              type: "tel",
              placeholder: "+1 (555) 000-0000",
              value: user.phone,
              onChange: handleChange,
              className: "border-pastel-lavender/30 focus:border-pastel-lavender ".concat(errors.phone ? 'border-red-500' : '')
            }), errors.phone && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-red-500 text-sm",
              children: errors.phone
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-sm font-medium",
              children: "Profile Picture"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center space-x-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "relative",
                children: [previewImage ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: previewImage,
                  alt: "Profile preview",
                  className: "w-20 h-20 rounded-full object-cover"
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-20 h-20 rounded-full bg-pastel-lavender/20 flex items-center justify-center",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Camera, {
                    className: "h-8 w-8 text-pastel-lavender"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "file",
                  ref: fileInputRef,
                  onChange: handleImageChange,
                  accept: "image/*",
                  className: "hidden"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
                type: "button",
                variant: "outline",
                className: "font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20",
                onClick: function onClick() {
                  var _fileInputRef$current;
                  return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
                },
                children: "Upload Photo"
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "text-sm font-medium",
            children: "Email"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
            name: "email",
            type: "email",
            placeholder: "john@example.com",
            value: user.email,
            onChange: handleChange,
            className: "border-pastel-lavender/30 focus:border-pastel-lavender ".concat(errors.email ? 'border-red-500' : '')
          }), errors.email && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-red-500 text-sm",
            children: errors.email
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "text-sm font-medium",
            children: "Password"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.Input, {
            name: "password",
            type: "password",
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            value: user.password,
            onChange: handleChange,
            className: "border-pastel-lavender/30 focus:border-pastel-lavender ".concat(errors.password ? 'border-red-500' : '')
          }), errors.password && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-red-500 text-sm",
            children: errors.password
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
          type: "submit",
          className: "w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand",
          children: isLogin ? "Sign In" : "Create Account"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            return setIsLogin(!isLogin);
          },
          className: "text-sm text-pastel-lavender hover:text-pastel-lavender/80",
          children: isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"
        })
      })]
    })
  });
};
var _default = exports["default"] = Auth;
//# sourceMappingURL=Auth.jsx.map