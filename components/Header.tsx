import { NAV_PROJECTS } from "@/lib/projects";

export function Header() {
  return (
    <>
      <aside className="left-off-canvas-menu gradient">
        <ul className="off-canvas-menu-all">
          <li>
            <a href="/">HOME</a>
          </li>
          <li className="first-li">
            <span>PROJECTS</span>
            <ul className="sort-categories">{/* cloned from #main-menu by main.js */}</ul>
          </li>
          <li>
            <a href="/profile">PROFILE</a>
          </li>
          <li>
            <a href="mailto:anthony.cannon.walker@gmail.com?subject=I just came from walkerfineart.org">
              CONTACT
            </a>
          </li>
        </ul>
      </aside>

      <div className="row">
        <header className="large-12 columns debug">
          <div className="large-12 columns header-logo debug2">
            <a href="/">
              <div className="int">&nbsp;</div>
            </a>
          </div>

          <div className="ac-container">
            <div
              id="top-header"
              className="large-12 columns padding-0 divider-line-bottom debug"
            >
              <a className="left-off-canvas-toggle" href="#">
                <div className="menu-nav-icon col-md-4 col-sm-4">
                  <button
                    type="button"
                    role="button"
                    aria-label="Toggle Navigation"
                    className="lines-button"
                  >
                    <span className="lines"></span>
                    <span className="lines"></span>
                    <span className="lines"></span>
                  </button>
                </div>
              </a>

              <div className="small-12 columns display-inline header-menu1">
                <ul>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <label htmlFor="ac-1">PROJECTS</label>
                  </li>
                  <li>
                    <a href="/profile">PROFILE</a>
                  </li>
                  <li>
                    <a href="mailto:anthony.cannon.walker@gmail.com?subject=I just came from walkerfineart.org">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <input id="ac-1" name="accordion-1" type="checkbox" />
            <div
              id="sub-header"
              className="sub-header large-12 columns display-inline header-menu2 text-left divider-line-bottom debug"
            >
              <ul id="main-menu">
                <li className="all-projects pullDown">
                  <ul className="sub-options">
                    {NAV_PROJECTS.map((project) => (
                      <li
                        key={project.label}
                        className={`${project.kind}${project.disabled ? " disabled" : ""}`}
                      >
                        <a href={project.href}>{project.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
