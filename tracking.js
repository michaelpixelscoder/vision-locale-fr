window.VISION_LOCALE_TRACKING = {
  googleTagId: "",
  metaPixelId: "",
};

(function () {
  var config = window.VISION_LOCALE_TRACKING;

  if (config.googleTagId) {
    var googleScript = document.createElement("script");
    googleScript.async = true;
    googleScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.googleTagId);
    document.head.appendChild(googleScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", config.googleTagId);
  }

  if (config.metaPixelId) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", config.metaPixelId);
    window.fbq("track", "PageView");
  }
})();

function trackVisionLocale(eventName, params) {
  if (window.gtag) {
    window.gtag("event", eventName, params || {});
  }

  if (window.fbq) {
    window.fbq("track", eventName, params || {});
  }
}
