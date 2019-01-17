/* eslint-disable import/extensions */
// ==================================================
// NotFound
// ==================================================
import React from "react";

// Modules
import Helmet from "react-helmet";
import { Link } from "react-router";

// Utils
import cx from "utils/styles";
import config from "config";

// All Page Classes
const sectionCL = cx("dt", "vh-100", "w-100", "bg-scala-0", "scala-5");
const logoCL = cx("f5", "b", "absolute", "left-1", "top-1", "ma0", "white", "hover-near-white");
const articleCL = cx("dtc", "v-mid");
const headerCL = cx("tc", "ph5", "lh-copy", "mw8", "center");
const titleCL = cx("f1", "f-headline-l", "mb3", "fw9", "dib", "tracked-tight");
const subtitleCL = cx("tc", "f1-l", "fw1");

// Text and page string
const title = "404";
const subtitle = "Sorry but we couldnt find this page";

/**
 * Stateless Functional NotFound Component
 * @return {ReactElement} [description]
 */
const NotFound = () => (
  <div>
    <Helmet
      title="Error 404: Page not found"
      meta={ [
        { name: "description", content: "Page not found" },
      ] }
    />

    <section className={ sectionCL }>
      <h2 className={ logoCL }><Link className={ logoCL } to="/">{config.site.name}</Link></h2>
      <article className={ articleCL }>
        <header className={ headerCL }>
          <h1 className={ titleCL }>{title}</h1>
          <h3 className={ subtitleCL }>{subtitle}</h3>
        </header>
      </article>
    </section>
  </div>
);

export default NotFound;
