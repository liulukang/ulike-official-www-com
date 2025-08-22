webpackHotUpdate("styles",{

/***/ "./components/Carousel/index.less":
/*!****************************************!*\
  !*** ./components/Carousel/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"carousel":"carousel___3JU7L","carouselContainer":"carouselContainer___3rFO8","slide":"slide___2qa1d","active":"active___R8vni","slideContent":"slideContent___2WkMf","slideText":"slideText___3nx7E","arrow":"arrow___2kiCe","prev":"prev___1DzZk","next":"next___2mOiw","indicators":"indicators___2R2-1","indicator":"indicator___2186m"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1755006048936");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.689c00e6f7e6ae2219f2.hot-update.js.map