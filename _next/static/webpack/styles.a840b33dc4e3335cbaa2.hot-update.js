webpackHotUpdate("styles",{

/***/ "./pages/home/index.less":
/*!*******************************!*\
  !*** ./pages/home/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"topBanner":"topBanner___1u9Rm","effects":"effects___1HF7f","center":"center___3VcVp","effect":"effect___2qr_e","number":"number___2JmYb","split":"split___2FMrw","blocks":"blocks___2WQRW"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1755005871968");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.a840b33dc4e3335cbaa2.hot-update.js.map