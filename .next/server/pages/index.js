module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Events; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n\nvar _jsxFileName = \"/home/asmaraputra/Projects/lombokjs/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction Events({\n  posts\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto p-10\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit\",\n      children: posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"break-inside shadow-xl rounded-lg m-9\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"max-w-full h-auto rounded-lg\",\n          src: post.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 15\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"px-6 py-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-white  inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2\",\n            children: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"dateFormat\"])(post.date).fulldate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"font-bold text-xl mb-2\",\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center mt-8\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: \"w-10 h-10 rounded-full mr-4\",\n              src: post.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"text-sm\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-gray-900 leading-none\",\n                children: post.speaker\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 21\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-gray-600\",\n                children: \"Speaker\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 15\n        }, this)]\n      }, post.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 13\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\n;\nasync function getStaticProps() {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n\n  const uniqid = __webpack_require__(/*! uniqid */ \"uniqid\");\n\n  const postsDir = `${process.cwd()}/posts`;\n  const files = fs.readdirSync(postsDir, 'utf-8');\n  const posts = files.filter(file => file.endsWith('.md')).map(file => {\n    const rawContent = fs.readFileSync(`${postsDir}/${file}`, {\n      encoding: 'utf8'\n    });\n    const {\n      data\n    } = matter(rawContent);\n    return _objectSpread(_objectSpread({}, data), {}, {\n      id: uniqid()\n    });\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkV2ZW50cyIsInBvc3RzIiwibWFwIiwicG9zdCIsImltYWdlIiwiZGF0ZUZvcm1hdCIsImRhdGUiLCJmdWxsZGF0ZSIsInRpdGxlIiwic3BlYWtlciIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJmcyIsInJlcXVpcmUiLCJtYXR0ZXIiLCJ1bmlxaWQiLCJwb3N0c0RpciIsInByb2Nlc3MiLCJjd2QiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZSIsImVuZHNXaXRoIiwicmF3Q29udGVudCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwiZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLE1BQVQsQ0FBaUI7QUFBQ0M7QUFBRCxDQUFqQixFQUEyQjtBQUN4QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDJGQUFmO0FBQUEsZ0JBQ0NBLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFJLGlCQUNUO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyw4QkFEWjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxxS0FBZjtBQUFBLHNCQUdHQywrREFBVSxDQUFDRixJQUFJLENBQUNHLElBQU4sQ0FBVixDQUFzQkM7QUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUcscUJBQVMsRUFBQyx3QkFBYjtBQUFBLHNCQUNHSixJQUFJLENBQUNLO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyw2QkFEWjtBQUVFLGlCQUFHLEVBQUVMLElBQUksQ0FBQ0M7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBS0U7QUFBSyx1QkFBUyxFQUFDLFNBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsNEJBQWI7QUFBQSwwQkFDR0QsSUFBSSxDQUFDTTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBLFNBQTRETixJQUFJLENBQUNPLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7QUFBQTtBQUdNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQXRCOztBQUNBLFFBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFFQSxRQUFNRyxRQUFRLEdBQUksR0FBRUMsT0FBTyxDQUFDQyxHQUFSLEVBQWMsUUFBbEM7QUFFQSxRQUFNQyxLQUFLLEdBQUdQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlSixRQUFmLEVBQXlCLE9BQXpCLENBQWQ7QUFDQSxRQUFNZixLQUFLLEdBQUdrQixLQUFLLENBQ2hCRSxNQURXLENBQ0pDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWMsS0FBZCxDQURKLEVBRVhyQixHQUZXLENBRVBvQixJQUFJLElBQUk7QUFDWCxVQUFNRSxVQUFVLEdBQUdaLEVBQUUsQ0FBQ2EsWUFBSCxDQUFpQixHQUFFVCxRQUFTLElBQUdNLElBQUssRUFBcEMsRUFBdUM7QUFBRUksY0FBUSxFQUFFO0FBQVosS0FBdkMsQ0FBbkI7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBV2IsTUFBTSxDQUFDVSxVQUFELENBQXZCO0FBRUEsMkNBQVlHLElBQVo7QUFBa0JqQixRQUFFLEVBQUVLLE1BQU07QUFBNUI7QUFDRCxHQVBXLENBQWQ7QUFTQSxTQUFPO0FBQ0xhLFNBQUssRUFBRTtBQUFFM0I7QUFBRjtBQURGLEdBQVA7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0ZUZvcm1hdCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzICh7cG9zdHN9KSAge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptYXNvbnJ5LTItY29sIGxnOm1hc29ucnktMy1jb2wgYm94LWJvcmRlciBteC1hdXRvIGJlZm9yZTpib3gtaW5oZXJpdCBhZnRlcjpib3gtaW5oZXJpdFwiPlxuICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWstaW5zaWRlIHNoYWRvdy14bCByb3VuZGVkLWxnIG0tOVwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIGgtYXV0byByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIFxuICAgICAgICAgICAgICAgIGlubGluZS1ibG9ja1xuICAgICAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi00MDAgdG8tYmx1ZS01MDAgaG92ZXI6ZnJvbS1waW5rLTUwMCBob3Zlcjp0by15ZWxsb3ctNTAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIG1yLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAge2RhdGVGb3JtYXQocG9zdC5kYXRlKS5mdWxsZGF0ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5TcGVha2VyPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICBjb25zdCBtYXR0ZXIgPSByZXF1aXJlKCdncmF5LW1hdHRlcicpXG4gIGNvbnN0IHVuaXFpZCA9IHJlcXVpcmUoJ3VuaXFpZCcpXG5cbiAgY29uc3QgcG9zdHNEaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS9wb3N0c2BcblxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyLCAndXRmLTgnKVxuICBjb25zdCBwb3N0cyA9IGZpbGVzXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5tZCcpKVxuICAgIC5tYXAoZmlsZSA9PiB7XG4gICAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGAke3Bvc3RzRGlyfS8ke2ZpbGV9YCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihyYXdDb250ZW50KVxuXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBpZDogdW5pcWlkKCl9XG4gICAgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3RzIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateFormat\", function() { return dateFormat; });\n// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString\nconst dateFormat = dateString => {\n  const now = new Date();\n  const date = new Date(dateString);\n  const differTime = date.getTime() - now.getTime();\n  const differDays = differTime / (1000 * 3600 * 24);\n  const countDays = parseInt(differDays, 10);\n  const fulldate = date.toLocaleDateString(\"id-ID\", {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  });\n  return {\n    fulldate,\n    countDays: countDays < 1 ? `Today` : `H -${countDays}`\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy5qcz85MGMwIl0sIm5hbWVzIjpbImRhdGVGb3JtYXQiLCJkYXRlU3RyaW5nIiwibm93IiwiRGF0ZSIsImRhdGUiLCJkaWZmZXJUaW1lIiwiZ2V0VGltZSIsImRpZmZlckRheXMiLCJjb3VudERheXMiLCJwYXJzZUludCIsImZ1bGxkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUEsVUFBVSxHQUFJQyxVQUFELElBQWdCO0FBQ3hDLFFBQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUQsSUFBSixDQUFTRixVQUFULENBQWI7QUFFQSxRQUFNSSxVQUFVLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxLQUFpQkosR0FBRyxDQUFDSSxPQUFKLEVBQXBDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRixVQUFVLElBQUksT0FBTyxJQUFQLEdBQWMsRUFBbEIsQ0FBN0I7QUFDQSxRQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0YsVUFBRCxFQUFhLEVBQWIsQ0FBMUI7QUFFQSxRQUFNRyxRQUFRLEdBQUdOLElBQUksQ0FBQ08sa0JBQUwsQ0FBd0IsT0FBeEIsRUFBaUM7QUFDaERDLFdBQU8sRUFBRSxNQUR1QztBQUVoREMsUUFBSSxFQUFFLFNBRjBDO0FBR2hEQyxTQUFLLEVBQUUsTUFIeUM7QUFJaERDLE9BQUcsRUFBRTtBQUoyQyxHQUFqQyxDQUFqQjtBQU9BLFNBQU87QUFDTEwsWUFESztBQUVMRixhQUFTLEVBQUVBLFNBQVMsR0FBRyxDQUFaLEdBQWlCLE9BQWpCLEdBQTJCLE1BQUtBLFNBQVU7QUFGaEQsR0FBUDtBQUlELENBbkJNIiwiZmlsZSI6Ii4vdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGUvdG9Mb2NhbGVEYXRlU3RyaW5nXG5leHBvcnQgY29uc3QgZGF0ZUZvcm1hdCA9IChkYXRlU3RyaW5nKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICBjb25zdCBkaWZmZXJUaW1lID0gZGF0ZS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xuICBjb25zdCBkaWZmZXJEYXlzID0gZGlmZmVyVGltZSAvICgxMDAwICogMzYwMCAqIDI0KTtcbiAgY29uc3QgY291bnREYXlzID0gcGFyc2VJbnQoZGlmZmVyRGF5cywgMTApO1xuXG4gIGNvbnN0IGZ1bGxkYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJpZC1JRFwiLCB7XG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwibG9uZ1wiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZnVsbGRhdGUsXG4gICAgY291bnREYXlzOiBjb3VudERheXMgPCAxID8gYFRvZGF5YCA6IGBIIC0ke2NvdW50RGF5c31gLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uniqid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmlxaWRcIj8zYzg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVuaXFpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXFpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uniqid\n");

/***/ })

/******/ });