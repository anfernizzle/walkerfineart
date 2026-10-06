"use client";

import Script from "next/script";

/**
 * Loads the legacy jQuery/Foundation/Owl stack and boots plugins
 * (matches PHP page footers).
 */
export function LegacyScripts({ loadOwl }: { loadOwl: boolean }) {
  const bootId = loadOwl ? "legacy-boot-owl" : "legacy-boot-home";

  const bootScript = loadOwl
    ? `
(function boot() {
  if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.owlCarousel) {
    setTimeout(boot, 50);
    return;
  }
  var $ = window.jQuery;
  try { $(document).foundation(); } catch (e) {}
  var owl = $("#owl-demo");
  if (owl.length && !owl.hasClass("owl-loaded")) {
    owl.owlCarousel({
      navigation: true,
      lazyLoad: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      afterInit: function () {
        var links = $(".item-link");
        $.each(this.owl.userItems, function (i) {
          $(links[i]).click(function () {
            owl.trigger("owl.goTo", i);
          });
        });
      }
    });
  }
  if ($.fn.lazyload) {
    $("img.lazy").lazyload({ effect: "fadeIn", threshold: 200 });
  }
})();
`
    : `
(function boot() {
  if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.foundation) {
    setTimeout(boot, 50);
    return;
  }
  try { window.jQuery(document).foundation(); } catch (e) {}
})();
`;

  return (
    <>
      <Script src="/js/vendor/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/foundation.min.js" strategy="beforeInteractive" />
      <Script
        src="/js/foundation/foundation.offcanvas.js"
        strategy="beforeInteractive"
      />
      {loadOwl ? (
        <>
          <Script
            src="/owl-carousel/owl.carousel.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/js/vendor/jquery.lazyload.js"
            strategy="beforeInteractive"
          />
        </>
      ) : null}
      <Script src="/js/vendor/arctic-scroll.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script id={bootId} strategy="afterInteractive">
        {bootScript}
      </Script>
    </>
  );
}
