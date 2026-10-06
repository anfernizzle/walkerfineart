import type { Work } from "@/lib/loadContent";
import { workAlt, workCaptionLines } from "@/lib/loadContent";

function imagePath(path: string): string {
  return `/${path.replace(/^\//, "")}`;
}

function Caption({ work }: { work: Work }) {
  const lines = workCaptionLines(work);
  return (
    <>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

export function Slideshow({ works }: { works: Work[] }) {
  return (
    <section id="owl-demo" className="large-12 columns owl-carousel owl-theme">
      {works.map((work) => {
        const src = imagePath(work.image);
        return (
          <div className="item" key={work.image}>
            {/* src + data-src: Owl lazyLoad uses data-src; src ensures images show if JS is late */}
            <img
              src={src}
              data-src={src}
              className="lazyOwl"
              alt={workAlt(work)}
            />
            <div className="orbit-caption">
              <span className="black-half-back">
                <Caption work={work} />
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export function Thumbnails({ works }: { works: Work[] }) {
  return (
    <section id="lower-third" className="large-12 columns no-padding">
      {works.map((work) => {
        const src = imagePath(work.image);
        return (
          <div
            className="large-4 medium-6 columns photo-thumb-container"
            key={`thumb-${work.image}`}
          >
            <a className="item-link arctic_scroll" href="#top">
              <div className="photo-thumb">
                <img
                  className="lazy"
                  src={src}
                  data-original={src}
                  alt={workAlt(work)}
                />
                <p className="caption">
                  <Caption work={work} />
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </section>
  );
}
