/* eslint max-len: ["error", { "ignoreComments": true, "ignoreTemplateLiterals": true }] */
/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
// import Container from "components/Container/";
import Hero from "components/Hero/";
import config from "config";

// Blocks
import {
  AboutStory,
  AboutLeadership,
  AboutTeam,
  AboutInvestors,
  AboutPress,
} from "./blocks/";

/**
 * About Page
 */
export default class AboutPage extends React.Component {

  /**
   * propTypes
   * @type {Object}
   */
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
      title: "Meet Titan Business Team",
      meta: [
        { name: "description", content: "Our Story and Mission" },
        { name: "keywords", content: "about us, meet, titan, business, team" },
        { property: "og:title", content: "Meet Titan Business Team" },
        { property: "og:description", content: "Our Story and Mission" },
        { property: "og:image", content: `${config.site.url}${require("assets/about/hero.jpg")}` },
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
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          toptitle="Do you know what TITAN does?"
          title="Get to know us"
          background={ require("assets/about/hero.jpg") }
          width="mw7"
        />
        <AboutStory />
        <AboutLeadership />
        <AboutTeam />
        <AboutInvestors />
        <AboutPress />
      </div>
    );
  }
}
