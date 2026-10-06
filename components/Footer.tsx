export function Footer() {
  return (
    <footer className="large-12 columns divider-line-top2 footer-text debug">
      <div
        id="copyright"
        className="small-12 medium-7 columns text-left float-left debug"
      >
        Copyright © Anthony Cannon Walker. All rights reserved.
      </div>

      <div
        id="logo"
        className="small-12 medium-4 columns float-right text-right debug"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.anthonywalkerdesign.com/"
        >
          <span>designed by</span>
          <img
            id="walker-art-logo"
            alt="Designed by Anthony Walker Design"
            src="/img/walkerdesign-logo.png"
            width={150}
            height={20}
          />
        </a>
      </div>
    </footer>
  );
}
