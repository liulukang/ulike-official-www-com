webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Carousel/index.js":
/*!**************************************!*\
  !*** ./components/Carousel/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/Carousel/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);

var _this = undefined,
  _jsxFileName = "/Users/liulukang/Desktop/github/ulike-official-site/pc/components/Carousel/index.js";



// 轮播图数据
var carouselData = [{
  url: __webpack_require__(/*! @/static/images/carousel/0V4A1307.jpg */ "./static/images/carousel/0V4A1307.jpg"),
  title: '深圳优莱克科技有限公司',
  description: '专注于为企业提供设计制造集成支持，PCBA电路板研发设计、SMT贴片焊接、DIP插件焊接、测试服务、成品组装、塑胶模具设计与制作的全套一站式电子产品解决方案 '
}, {
  url: __webpack_require__(/*! @/static/images/carousel/0V4A13771.jpg */ "./static/images/carousel/0V4A13771.jpg"),
  title: '电子产品设计制造集成服务商',
  description: '采用先进的SMT设备，提供高精度贴装、BGA/CSP工艺，确保产品质量稳定可靠'
}, {
  url: __webpack_require__(/*! @/static/images/carousel/0V4A1430.jpg */ "./static/images/carousel/0V4A1430.jpg"),
  title: '一站式电子产品解决方案',
  description: '从设计到量产，为客户提供完整的电子产品制造服务，包括硬件开发、方案优化、产品原型开发与功能验证'
}, {
  url: __webpack_require__(/*! @/static/images/carousel/0V4A1488.jpg */ "./static/images/carousel/0V4A1488.jpg"),
  title: '快速交付能力',
  description: '双面快件24小时内完成，多层快件可在2-4天内完成，为客户提供快速响应服务'
}, {
  url: __webpack_require__(/*! @/static/images/carousel/0V4A1486.jpg */ "./static/images/carousel/0V4A1486.jpg"),
  title: '精密制造工艺',
  description: '采用先进的精密制造设备，确保每个产品细节的完美呈现，为客户提供高品质的电子产品制造服务'
}];
var Carousel = function Carousel(_ref) {
  var _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? true : _ref$autoPlay,
    _ref$interval = _ref.interval,
    interval = _ref$interval === void 0 ? 3000 : _ref$interval;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    isTransitioning = _useState4[0],
    setIsTransitioning = _useState4[1];
  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var nextSlide = function nextSlide() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(function (prevIndex) {
      return (prevIndex + 1) % carouselData.length;
    });
  };
  var prevSlide = function prevSlide() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(function (prevIndex) {
      return (prevIndex - 1 + carouselData.length) % carouselData.length;
    });
  };
  var goToSlide = function goToSlide(index) {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (autoPlay) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    return function () {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, currentIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timer = setTimeout(function () {
      setIsTransitioning(false);
    }, 300);
    return function () {
      return clearTimeout(timer);
    };
  }, [currentIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.carousel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.carouselContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, carouselData.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.slide, " ").concat(index === currentIndex ? _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''),
      style: {
        backgroundImage: "url(".concat(image.url, ")")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.slideContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.slideText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, image.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, image.description))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.arrow, " ").concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.prev),
    onClick: prevSlide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "\u2039"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.arrow, " ").concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.next),
    onClick: nextSlide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "\u203A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.indicators,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, carouselData.map(function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: index,
      className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.indicator, " ").concat(index === currentIndex ? _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''),
      onClick: function onClick() {
        return goToSlide(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    });
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./static/images/carousel/0V4A1486.jpg":
/*!*********************************************!*\
  !*** ./static/images/carousel/0V4A1486.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carousel/0V4A1486_3050c3b.jpg";

/***/ })

})
//# sourceMappingURL=home.js.c876073c47c3a1dc6d53.hot-update.js.map