/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router";

// Modules
import { Icon } from "react-fa";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";
import config from "config";

// Blocks
import CompanyMenu from "./blocks/companyMenu";
import ClientMenu from "./blocks/clientMenu";
import ProjectMenu from "./blocks/projectMenu";
import PageMenu from "./blocks/pageMenu";

/**
 * GlobalFooter Component
 */
export default class GlobalFooter extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const h3CL = cx("ttu", "f6", "fw4", "ma0", "mb3");
    // const linkCL = cx("f6", "dib", "pr2", "scala-6", "hover-scala-9");

    return (
      <div className={ cx("pv5", "bg-scala-0", "white-80") }>
        <Container>
          <footer>

            <div className={ cx("cf") }>
              <div className={ cx("fl", "w-100", "w-30-ns", "mb4", "mb0-ns") }>
                <h3 className={ cx("v-mid", "ma0", "link--white-80", "hover-link--white-50") }>
                  <Link to="/">TITAN <small className={ cx("scala-3") } >{config.site.name}</small></Link>
                </h3>
              </div>
              <div className={ cx("fl", "w-100", "w-70-ns") }>
                <div className={ cx("fl", "w-50", "w-25-ns", "mb3") }>
                  <h3 className={ h3CL }>Company</h3>
                  <CompanyMenu />
                </div>
                <div className={ cx("fl", "w-50", "w-25-ns", "mb3") }>
                  <h3 className={ h3CL }>Projects</h3>
                  <ProjectMenu />
                </div>
                <div className={ cx("fl", "w-50", "w-25-ns", "mb3") }>
                  <h3 className={ h3CL }>Clients</h3>
                  <ClientMenu />
                </div>
                <div className={ cx("fl", "w-50", "w-25-ns", "mb3") }>
                  <h3 className={ h3CL }>Pages</h3>
                  <PageMenu />
                </div>
              </div>
            </div>

            <div id="footer-bottom" className={ cx("mt5", "db") }>
              <p className={ cx("fl", "scala-3", "f7", "fw4", "lh-solid") }>
                <span className={ cx("mr2") }>Copyright © {new Date().getFullYear().toString()}.</span>
                <span>All Rights Reserved. {config.site.name} Inc.</span>
              </p>
              <ul className={ cx("fr", "f7", "fw4", "lh-solid", "list") }>
                <li className={ cx("dib", "ph1") } ><span className={ cx("scala-3") } >Follow us</span></li>
                <For each="site" index="idx" of={ config.socialMediaSites }>
                  <li key={ idx } className={ cx("dib", "ph1") } >
                    <a
                      className={ cx("pointer", "scala-3", "hover-scala-9") }
                      title={ site.title }
                      href={ site.link }
                    >
                      <Icon name={ site.icon } />
                    </a>
                  </li>
                </For>
              </ul>
            </div>
          </footer>
        </Container>
      </div>
    );
  }
}
