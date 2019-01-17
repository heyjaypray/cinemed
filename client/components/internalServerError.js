/* eslint-disable import/extensions */
// ==================================================
// Internal Server Error
// ==================================================

import React from "react";
import { Link } from "react-router";
import Helmet from "react-helmet";

import cx from "utils/styles";
import config from "config";

// All Page Classes
const sectionCL = cx("dt", "vh-100", "w-100", "bg-blue", "white");
const logoCL = cx("f5", "b", "absolute", "left-1", "top-1", "ma0");
const articleCL = cx("dtc", "v-mid");
const headerCL = cx("tc", "ph5", "lh-copy", "mw8", "center");
const titleCL = cx("f1", "f-headline-l", "mb3", "fw9", "dib", "tracked-tight");
const subtitleCL = cx("tc", "f1-l", "fw1");
const paragraphCL = cx("white-60", "serif", "fw1", "i", "tc", "mt4", "mt5-l", "f4", "f3-l");
const ulCL = cx("list", "tc", "pl0", "w-100", "mt1");
const liCL = cx("dib");
const linkCL = cx("serif", "i", "f4", "link", "white-80", "db", "pv2", "ph3", "hover-dark-blue");

// Text and page string
const title = "500";
const subtitle = "Looks like something went wrong!";
const paragraph = "Would you like to report this issue ?";

// Menu items
const bottomLinks = [
  { title: "Contact us", link: "/contact" },
];

const ServerError = () => (
  <div>
    <Helmet
      title="Error 500: Internal Server Error"
      meta={ [
        { name: "description", content: "Looks like something went wrong!" },
      ] }
    />

    <section className={ sectionCL }>
      <h2 className={ logoCL }>{config.site.name}</h2>
      <article className={ articleCL }>
        <header className={ headerCL }>
          <h1 className={ titleCL }>{title}</h1>
          <h2 className={ subtitleCL }>{subtitle}</h2>
        </header>
        <p className={ paragraphCL }>{paragraph}</p>
        <ul className={ ulCL }>
          <For each="item" index="idx" of={ bottomLinks }>
            <li key={ idx } className={ liCL }>
              <Link className={ linkCL } href={ item.link }>{ item.title}</Link>
            </li>
          </For>
        </ul>
      </article>
    </section>
  </div>
);

export default ServerError;
