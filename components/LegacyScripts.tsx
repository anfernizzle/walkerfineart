"use client";

import { useEffect } from "react";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[data-wfa-src="${src}"]`
    ) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed ${src}`)),
        { once: true }
      );
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.wfaSrc = src;
    script.onload = () => {
      script.dataset.loaded = "1";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed ${src}`));
    document.body.appendChild(script);
  });
}

declare global {
  interface Window {
    jQuery: JQueryStatic;
  }
}

type JQueryStatic = ((selector?: unknown) => JQuery) & {
  fn: Record<string, unknown>;
};

type JQuery = {
  length: number;
  hasClass: (c: string) => boolean;
  owlCarousel: (opts: Record<string, unknown>) => JQuery;
  foundation: () => JQuery;
  lazyload: (opts: Record<string, unknown>) => JQuery;
  off: (e: string) => JQuery;
  on: (e: string, fn: (ev: Event) => boolean | void) => JQuery;
  trigger: (e: string, i?: number) => JQuery;
  stop: (clear?: boolean) => JQuery;
  animate: (props: Record<string, number>, ms: number) => JQuery;
  get: (i: number) => HTMLElement;
  arctic_scroll?: (opts: Record<string, unknown>) => JQuery;
  hide: () => JQuery;
  fadeIn: () => JQuery;
  fadeOut: () => JQuery;
  scrollTop: () => number;
  click: (fn: () => boolean | void) => JQuery;
  css: (props: Record<string, string>) => JQuery;
  siblings: (sel: string) => JQuery;
  toggle: () => JQuery;
  clone: () => JQuery;
  appendTo: (sel: string) => JQuery;
  change: (fn: (this: HTMLInputElement) => void) => JQuery;
  addClass: (c: string) => JQuery;
  removeClass: (c: string) => JQuery;
  ready: (fn: () => void) => void;
};

function bootPlugins(loadOwl: boolean) {
  const $ = window.jQuery;
  if (!$) return;

  try {
    $(document).foundation();
  } catch {
    /* ignore */
  }

  if (loadOwl) {
    const owl = $("#owl-demo");
    if (owl.length && !owl.hasClass("owl-loaded")) {
      owl.owlCarousel({
        navigation: true,
        lazyLoad: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: function afterInit(this: { owl: { userItems: unknown[] } }) {
          const links = $(".item-link");
          const count = Math.min(this.owl.userItems.length, links.length);
          for (let i = 0; i < count; i++) {
            $(links.get(i))
              .off("click.owlThumb")
              .on("click.owlThumb", function (e) {
                e.preventDefault();
                owl.trigger("owl.goTo", i);
                $("html, body").stop(true).animate({ scrollTop: 0 }, 300);
                return false;
              });
          }
        },
      });
    }
  }

  try {
    $("img.lazy").lazyload({ effect: "fadeIn", threshold: 200 });
  } catch {
    /* ignore */
  }
}

export function LegacyScripts({ loadOwl }: { loadOwl: boolean }) {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await loadScript("/js/vendor/jquery.js");
        await loadScript("/js/foundation.min.js");
        await loadScript("/js/foundation/foundation.offcanvas.js");
        if (loadOwl) {
          await loadScript("/owl-carousel/owl.carousel.js");
        }
        await loadScript("/js/vendor/jquery.lazyload.js");
        await loadScript("/js/vendor/arctic-scroll.js");
        await loadScript("/js/main.js");
        if (!cancelled) bootPlugins(loadOwl);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [loadOwl]);

  return null;
}
