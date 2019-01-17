import React from "react";
import { createResponsiveConnect } from "react-matchmedia-connect";
import Helmet from "react-helmet";

// Utils
import config from "config"; // eslint-disable-line import/extensions

if (process.env.NODE_BUILD_STATIC) {
  // Isomorphic render requiers window varaible for matchMedia
  const window = require("global/window");
  const document = require("global/document");
  global.window = window;
  global.document = document;
}

/**
 * defaultBreakpoints
 * @property {Int} xs - Very Small Screen size like Mobile, Wearable devices
 * @property {Int} sm - Small Screen size like Tablet, Mobile devices
 * @property {Int} md - Medium Screen size like Tablet, Laptop devices
 * @property {Int} lg - Large Screen size like Desktop
 * @type {Object}
 */
const defaultBreakpoints = {
  xs: 384,
  sm: 768,
  md: 832,
  lg: 1024,
};

const matchMediaConnect = createResponsiveConnect(defaultBreakpoints);

// MachMedia Responsive this.props
// -------------------------------
// isPortrait
// isLandscape
// isMaxXs
// isMaxSm
// isMinSm
// isMaxMd
// isMinMd
// isMinLg

/**
 * Main Layout
 * @class Default Layout
 */
class MainLayout extends React.Component {

  /**
   * propTypes
   * @property {String} name - Component name
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
    header: React.PropTypes.element,
    main: React.PropTypes.element,
    footer: React.PropTypes.element,
  };

  /**
   * childContextTypes
   * @type {Object}
   */
  static childContextTypes = {}

  /**
   * constructor
   * @param  {Object} props
   */
  // constructor(props) {
  //   super(props);
  // }

  /**
   * getChildContext
   * @return {Object}
   */
  getChildContext() { // eslint-disable-line class-methods-use-this
    return {};
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    // const  {
    //   isLandscape,
    //   isMaxMd,
    //   isMaxSm,
    //   isMaxXs,
    //   isMinLg,
    //   isMinMd,
    //   isMinSm,
    //   isPortrait,
    // } = this.props;

    return (
      <div>
        <Helmet
          title={ config.seo.title }
          titleTemplate={ config.seo.titleTemplate }
          defaultTitle={ config.seo.defaultTitle }
          meta={ [
            { name: "description", content: config.seo.description },
            { name: "keywords", content: config.seo.keywords },
            { property: "og:type", content: "website" },
            { property: "og:description", content: config.seo.description },
            { property: "og:url", content: config.site.url },
          ] }
          link={ [
            { rel: "shortcut icon", href: require("assets/favicon.ico") },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon.png") },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-57x57.png"), sizes: "57x57" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-72x72.png"), sizes: "72x72" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-76x76.png"), sizes: "76x76" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-114x114.png"), sizes: "114x114" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-120x120.png"), sizes: "120x120" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-144x144.png"), sizes: "144x144" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-152x152.png"), sizes: "152x152" },
            { rel: "apple-touch-icon", href: require("assets/apple-touch-icon/apple-touch-icon-180x180.png"), sizes: "180x180" },
          ] }
        />
        <If condition={ this.props.header }>
          {React.cloneElement(this.props.header, { ...this.props }) }
        </If>
        { React.cloneElement(this.props.main, { ...this.props }) }
        <If condition={ this.props.footer }>
          {React.cloneElement(this.props.footer, { ...this.props })}
        </If>
      </div>
    );
  }
}

export default matchMediaConnect()(MainLayout);
