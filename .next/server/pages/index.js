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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n\nvar _jsxFileName = \"/home/asmaraputra/Projects/lombokjs/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction Event({\n  posts\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto p-10\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit\",\n      children: posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"break-inside shadow-xl rounded-lg my-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"max-w-full h-auto rounded-lg\",\n          src: \"https://lh3.googleusercontent.com/46M29fiPg0IpFVdNJGRD51QPDBMBVfC_GyTDq2UfHdDKb8UfdJiN4bgkLpLCv4Qenu-SRfI0RniExFGANblaahOwfPsl6KYuFBdu=w600\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 15\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"px-6 py-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-white  inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2\",\n            children: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"dateFormat\"])(post.date).fulldate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"font-bold text-xl mb-2\",\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center mt-8\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: \"w-10 h-10 rounded-full mr-4\",\n              src: \"https://lh3.googleusercontent.com/46M29fiPg0IpFVdNJGRD51QPDBMBVfC_GyTDq2UfHdDKb8UfdJiN4bgkLpLCv4Qenu-SRfI0RniExFGANblaahOwfPsl6KYuFBdu=w600\",\n              alt: \"Avatar of Jonathan Reinink\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"text-sm\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-gray-900 leading-none\",\n                children: post.speaker\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 21\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-gray-600\",\n                children: \"Speaker\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n;\nasync function getStaticProps() {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n\n  const uniqid = __webpack_require__(/*! uniqid */ \"uniqid\");\n\n  const postsDir = `${process.cwd()}/posts`;\n  const files = fs.readdirSync(postsDir, 'utf-8');\n  const posts = files.filter(file => file.endsWith('.md')).map(file => {\n    const rawContent = fs.readFileSync(`${postsDir}/${file}`, {\n      encoding: 'utf8'\n    });\n    const {\n      data\n    } = matter(rawContent);\n    return _objectSpread(_objectSpread({}, data), {}, {\n      id: uniqid()\n    });\n  }).sort((a, b) => new Date(b.date) - new Date(a.date));\n  return {\n    props: {\n      posts\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkV2ZW50IiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiZGF0ZUZvcm1hdCIsImRhdGUiLCJmdWxsZGF0ZSIsInRpdGxlIiwic3BlYWtlciIsImdldFN0YXRpY1Byb3BzIiwiZnMiLCJyZXF1aXJlIiwibWF0dGVyIiwidW5pcWlkIiwicG9zdHNEaXIiLCJwcm9jZXNzIiwiY3dkIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsInJhd0NvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsImRhdGEiLCJpZCIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHZSxTQUFTQSxLQUFULENBQWdCO0FBQUNDO0FBQUQsQ0FBaEIsRUFBMEI7QUFDdkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyRkFBZjtBQUFBLGdCQUNDQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBSSxpQkFDVDtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsOEJBRFo7QUFFRSxhQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMscUtBQWY7QUFBQSxzQkFHR0MsK0RBQVUsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFOLENBQVYsQ0FBc0JDO0FBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFHLHFCQUFTLEVBQUMsd0JBQWI7QUFBQSxzQkFDR0gsSUFBSSxDQUFDSTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFTRTtBQUFLLHFCQUFTLEVBQUMsd0JBQWY7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsNkJBRFo7QUFFRSxpQkFBRyxFQUFDLDZJQUZOO0FBR0UsaUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFNRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQyw0QkFBYjtBQUFBLDBCQUNHSixJQUFJLENBQUNLO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUcseUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURMO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDtBQUFBO0FBR00sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFDQSxRQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBdEI7O0FBQ0EsUUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUVBLFFBQU1HLFFBQVEsR0FBSSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsRUFBYyxRQUFsQztBQUVBLFFBQU1DLEtBQUssR0FBR1AsRUFBRSxDQUFDUSxXQUFILENBQWVKLFFBQWYsRUFBeUIsT0FBekIsQ0FBZDtBQUNBLFFBQU1iLEtBQUssR0FBR2dCLEtBQUssQ0FDaEJFLE1BRFcsQ0FDSkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxLQUFkLENBREosRUFFWG5CLEdBRlcsQ0FFUGtCLElBQUksSUFBSTtBQUNYLFVBQU1FLFVBQVUsR0FBR1osRUFBRSxDQUFDYSxZQUFILENBQWlCLEdBQUVULFFBQVMsSUFBR00sSUFBSyxFQUFwQyxFQUF1QztBQUFFSSxjQUFRLEVBQUU7QUFBWixLQUF2QyxDQUFuQjtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXYixNQUFNLENBQUNVLFVBQUQsQ0FBdkI7QUFFQSwyQ0FBWUcsSUFBWjtBQUFrQkMsUUFBRSxFQUFFYixNQUFNO0FBQTVCO0FBQ0QsR0FQVyxFQVFYYyxJQVJXLENBUU4sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVUsSUFBSUMsSUFBSixDQUFTRCxDQUFDLENBQUN4QixJQUFYLElBQW1CLElBQUl5QixJQUFKLENBQVNGLENBQUMsQ0FBQ3ZCLElBQVgsQ0FSdkIsQ0FBZDtBQVVBLFNBQU87QUFDTDBCLFNBQUssRUFBRTtBQUFFOUI7QUFBRjtBQURGLEdBQVA7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkYXRlRm9ybWF0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnQgKHtwb3N0c30pICB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1hc29ucnktMi1jb2wgbGc6bWFzb25yeS0zLWNvbCBib3gtYm9yZGVyIG14LWF1dG8gYmVmb3JlOmJveC1pbmhlcml0IGFmdGVyOmJveC1pbmhlcml0XCI+XG4gICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhay1pbnNpZGUgc2hhZG93LXhsIHJvdW5kZWQtbGcgbXktNlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBoLWF1dG8gcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLzQ2TTI5ZmlQZzBJcEZWZE5KR1JENTFRUERCTUJWZkNfR3lURHEyVWZIZERLYjhVZmRKaU40YmdrTHBMQ3Y0UWVudS1TUmZJMFJuaUV4RkdBTmJsYWFoT3dmUHNsNktZdUZCZHU9dzYwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIFxuICAgICAgICAgICAgICAgIGlubGluZS1ibG9ja1xuICAgICAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi00MDAgdG8tYmx1ZS01MDAgaG92ZXI6ZnJvbS1waW5rLTUwMCBob3Zlcjp0by15ZWxsb3ctNTAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIG1yLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAge2RhdGVGb3JtYXQocG9zdC5kYXRlKS5mdWxsZGF0ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS80Nk0yOWZpUGcwSXBGVmROSkdSRDUxUVBEQk1CVmZDX0d5VERxMlVmSGRES2I4VWZkSmlONGJna0xwTEN2NFFlbnUtU1JmSTBSbmlFeEZHQU5ibGFhaE93ZlBzbDZLWXVGQmR1PXc2MDBcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXIgb2YgSm9uYXRoYW4gUmVpbmlua1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3BlYWtlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+U3BlYWtlcjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgY29uc3QgbWF0dGVyID0gcmVxdWlyZSgnZ3JheS1tYXR0ZXInKVxuICBjb25zdCB1bmlxaWQgPSByZXF1aXJlKCd1bmlxaWQnKVxuXG4gIGNvbnN0IHBvc3RzRGlyID0gYCR7cHJvY2Vzcy5jd2QoKX0vcG9zdHNgXG5cbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpciwgJ3V0Zi04JylcbiAgY29uc3QgcG9zdHMgPSBmaWxlc1xuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbiAgICAubWFwKGZpbGUgPT4ge1xuICAgICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhgJHtwb3N0c0Rpcn0vJHtmaWxlfWAsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIocmF3Q29udGVudClcblxuICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgaWQ6IHVuaXFpZCgpfVxuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: fetcher, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetcher\", function() { return fetcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateFormat\", function() { return dateFormat; });\nconst fetcher = (...args) => fetch(...args).then(res => res.json()); // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString\n\nconst dateFormat = dateString => {\n  const now = new Date();\n  const date = new Date(dateString);\n  const differTime = date.getTime() - now.getTime();\n  const differDays = differTime / (1000 * 3600 * 24);\n  const countDays = parseInt(differDays, 10);\n  const fulldate = date.toLocaleDateString(\"id-ID\", {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  });\n  return {\n    fulldate,\n    countDays: countDays < 1 ? `Today` : `H -${countDays}`\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy5qcz85MGMwIl0sIm5hbWVzIjpbImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGVGb3JtYXQiLCJkYXRlU3RyaW5nIiwibm93IiwiRGF0ZSIsImRhdGUiLCJkaWZmZXJUaW1lIiwiZ2V0VGltZSIsImRpZmZlckRheXMiLCJjb3VudERheXMiLCJwYXJzZUludCIsImZ1bGxkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsT0FBTyxHQUFHLENBQUMsR0FBR0MsSUFBSixLQUFhQyxLQUFLLENBQUMsR0FBR0QsSUFBSixDQUFMLENBQWVFLElBQWYsQ0FBcUJDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQTdCLENBQTdCLEMsQ0FFUDs7QUFDTyxNQUFNQyxVQUFVLEdBQUlDLFVBQUQsSUFBZ0I7QUFDeEMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJRCxJQUFKLENBQVNGLFVBQVQsQ0FBYjtBQUVBLFFBQU1JLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEtBQWlCSixHQUFHLENBQUNJLE9BQUosRUFBcEM7QUFDQSxRQUFNQyxVQUFVLEdBQUdGLFVBQVUsSUFBSSxPQUFPLElBQVAsR0FBYyxFQUFsQixDQUE3QjtBQUNBLFFBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDRixVQUFELEVBQWEsRUFBYixDQUExQjtBQUVBLFFBQU1HLFFBQVEsR0FBR04sSUFBSSxDQUFDTyxrQkFBTCxDQUF3QixPQUF4QixFQUFpQztBQUNoREMsV0FBTyxFQUFFLE1BRHVDO0FBRWhEQyxRQUFJLEVBQUUsU0FGMEM7QUFHaERDLFNBQUssRUFBRSxNQUh5QztBQUloREMsT0FBRyxFQUFFO0FBSjJDLEdBQWpDLENBQWpCO0FBT0EsU0FBTztBQUNMTCxZQURLO0FBRUxGLGFBQVMsRUFBRUEsU0FBUyxHQUFHLENBQVosR0FBaUIsT0FBakIsR0FBMkIsTUFBS0EsU0FBVTtBQUZoRCxHQUFQO0FBSUQsQ0FuQk0iLCJmaWxlIjoiLi91dGlscy91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbi8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS90b0xvY2FsZURhdGVTdHJpbmdcbmV4cG9ydCBjb25zdCBkYXRlRm9ybWF0ID0gKGRhdGVTdHJpbmcpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gIGNvbnN0IGRpZmZlclRpbWUgPSBkYXRlLmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKCk7XG4gIGNvbnN0IGRpZmZlckRheXMgPSBkaWZmZXJUaW1lIC8gKDEwMDAgKiAzNjAwICogMjQpO1xuICBjb25zdCBjb3VudERheXMgPSBwYXJzZUludChkaWZmZXJEYXlzLCAxMCk7XG5cbiAgY29uc3QgZnVsbGRhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlkLUlEXCIsIHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmdWxsZGF0ZSxcbiAgICBjb3VudERheXM6IGNvdW50RGF5cyA8IDEgPyBgVG9kYXlgIDogYEggLSR7Y291bnREYXlzfWAsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

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