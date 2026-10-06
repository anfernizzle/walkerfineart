import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegacyScripts } from "@/components/LegacyScripts";
import { BodyAttributes } from "@/components/BodyAttributes";
import { Slideshow, Thumbnails } from "@/components/Gallery";
import type { PageDefinition } from "@/lib/projects";
import { loadGallery, loadHtmlContent } from "@/lib/loadContent";

function PreloadImages() {
  return (
    <div className="preload_images">
      <img className="preload" src="/img/3bar.png" alt="Hamburger menu icon" />
      <img className="preload" src="/img/facebook.png" alt="facebook" />
      <img className="preload" src="/img/facebook-b.png" alt="facebook" />
      <img className="preload" src="/img/twitter.png" alt="twitter" />
      <img className="preload" src="/img/twitter-b.png" alt="twitter" />
      <img
        className="preload"
        src="/img/walker-design-logo.png"
        alt="Walker Design Logo"
      />
      <img
        className="preload"
        src="/img/top-title.png"
        alt="ANTHONY CANNON WALKER"
      />
      <img
        className="preload"
        src="/img/textures/struckaxiom-white.png"
        alt="Main Background Texture"
      />
    </div>
  );
}

export function SitePage({ page }: { page: PageDefinition }) {
  const html = loadHtmlContent(page.contentFile);
  const works = page.gallery ? loadGallery(page.gallery) : [];

  return (
    <>
      <BodyAttributes bodyId={page.bodyId} bodyClass={page.bodyClass} />
      <PreloadImages />

      <div id="top" className="row off-canvas-wrap" data-offcanvas="">
        <div className="large-12 columns small-centered max-width min-width main-top-bottom-margin inner-wrap debug">
          <Header />

          <main className="all-page-content">
            {page.gallery ? <Slideshow works={works} /> : null}
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {page.gallery && page.thumbnails ? (
              <Thumbnails works={works} />
            ) : null}
          </main>

          <Footer />
        </div>
      </div>

      <div className="large-3 columns debug2" id="back-top">
        <a href="#top" className="arctic_scroll">
          <span className="back-to-top">&#160;</span>
        </a>
      </div>

      <LegacyScripts loadOwl={page.loadOwl} />
    </>
  );
}
