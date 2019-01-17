/* eslint-disable import/extensions, max-len */
import React from "react";
import { Link } from "react-router";

// Modules
import Helmet from "react-helmet";
import { Icon } from "react-fa";

// Components
import Container from "components/Container/";
// import Hero from "components/Hero/";

// Utils & Config
import config from "config";
import cx from "utils/styles";

// User blocks
import { UserLoginForm } from "./blocks/";

/**
 * User Page Component
 */
export default class UserLoginPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    /**
     * Page details for SEO
     * @type {Object}
     * @example
     * this.seoTags = {
     *   title: "Page Title",
     *   meta: [
     *     { name: "description", content: "Page description" },
     *     { name: "keywords", content: "keywords, foo, bar"},
     *     { property: "og:title", content: "Page Title for  Open Graph protocol *facebook" },
     *     { property: "og:description", content: "Page description for  Open Graph protocol *facebook" },
     *   ]
     * }
     */
    this.seoTags = {
      title: "User Page",
      meta: [
        { name: "description", content: "User Login or Register" },
        { name: "keywords", content: "rapidly, prototype, build, deploy, react, website, user register" },
        { property: "og:description", content: "User Login or Register" },
        { property: "og:title", content: "User Page" },
        { property: "og:image", content: `${config.site.url}${require("assets/user/hero.jpg")}` },
      ],
    };
  }

  /**
   * render
   * @return {ReactElement}
   * @example
   * <div>
   *     <Helmet {...this.seoTags} />
   * </div>
   */
  render() {
    const logoCL = cx("f5", "b", "absolute", "left-1", "top-1", "ma0", "scala-2", "hover-blue", "w4");

    const styles = {
      style: {
        backgroundImage: `url(${require("assets/user/hero.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    };

    return (
      <div { ...styles } className={ cx("relative", "bg-scala-8") }>
        <Helmet { ...this.seoTags } />
        <div className={ cx("bg-white-50") }>
          <h2 className={ logoCL }><Link className={ logoCL } to="/"><Icon name="long-arrow-left" /> <span>{config.site.name}</span></Link></h2>
          <Container ip={ Boolean(false) } mw="mw7">
            <div className={ cx("flex", "flex-column", "flex-row-ns", "items-center", "vh-100-ns", "mt6", "mt0-ns") }>
              <div className={ cx("fl", "w-100", "w-50-ns", "tc") }>
                <h1 className={ cx("f3") }>Sign in to your account</h1>
                <p>Welcome back! We missed you.</p>
              </div>
              <div className={ cx("ml-auto", "w-100", "w-40-ns", "bg-white", "shadow-1-ns") }>
                <UserLoginForm />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
