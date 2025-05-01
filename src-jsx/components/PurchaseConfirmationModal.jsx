"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dialog = require("@/components/ui/dialog");
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
var PurchaseConfirmationModal = function PurchaseConfirmationModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_dialog.Dialog, {
    open: isOpen,
    onOpenChange: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dialog.DialogContent, {
      className: "sm:max-w-md",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_dialog.DialogHeader, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.CheckCircle, {
            className: "h-8 w-8 text-green-600"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dialog.DialogTitle, {
          className: "text-center text-xl font-semibold text-gray-900",
          children: "Payment Successful!"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_dialog.DialogDescription, {
          className: "text-center mt-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-600",
            children: "Congratulations! Your payment has been processed successfully."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-600 mt-2",
            children: "Your API keys will be delivered to your registered email address shortly."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-sm text-gray-500 mt-4",
            children: "Please check your inbox and spam folder."
          })]
        })]
      })
    })
  });
};
var _default = exports["default"] = PurchaseConfirmationModal;
//# sourceMappingURL=PurchaseConfirmationModal.jsx.map