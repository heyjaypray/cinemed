/* eslint-disable import/extensions */
import React from "react";

// Modules

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * Page Hero Component.
 * @class Hero
 */
export default class Hero extends React.Component {

   /**
   * propTypes
   * @property {string} title - This is the hero title
   * @property {Boolean} scrollAnimation - Put scroll animation under the page
   * @property {string} subtitle - This is the Subtitle for your page
   * @property {string} toptitle - This is the Toptitle for your page
   * @property {string} details - This is the Hero details
   * @property {string} headline - This variable sets the page headline tag
   * e.g H1,H2 etc. Default is `1`
   * @property {string} vh - Hero height
   * @property {string} width - Hero width
   */
  static propTypes = {
    // name: React.PropTypes.string,
    scrollAnimation: React.PropTypes.bool,
    background: React.PropTypes.string,
    title: React.PropTypes.string,
    toptitle: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    details: React.PropTypes.string,
    headline: React.PropTypes.number,
    vh: React.PropTypes.string,
    width: React.PropTypes.string,
    footer: React.PropTypes.func,
  };

  /**
   * Default Hero Props
   * @property {string} title null
   * @property {Bool} scrollAnimation false
   * @property {string} subtitle null
   * @property {string} toptitle null
   * @property {string} details null
   * @property {string} headline `1`
   * @property {string} vh vh-75-ns
   * @property {string} width mw6
   */
  static defaultProps = {
    scrollAnimation: false,
    title: null,
    subtitle: null,
    toptitle: null,
    details: null,
    headline: 1,
    footer: null,
    vh: "vh-75-ns",
    width: "mw6",
  };

  /**
   * constructor
   * @param {object} props
   */
  // constructor(props) {
    // super(props);
    // this.background = this.props.background;
    // this.title = this.props.title;
    // this.subtitle = this.props.subtitle;
    // this.details = this.props.details;
    // this.headline = this.props.headline || "1";
    // this.height = this.props.vh || "vh-75-ns";
    // this.width = this.props.width || "mw6";
  // }

  /**
   * Hero render method
   * @return {ReactElement} markup
   */
  render() {
    const HeadlineTag = `h${this.props.headline}`;

    return (
      <div
        className={ cx("relative", this.props.vh, "bg-center", "cover") }
        style={ { backgroundImage: `url(${this.props.background})` } }
      >
        <div className={ cx("pv6", "pv0-ns", "flex-ns", "flex-wrap", "items-center", "bg-black-50", this.props.vh) } >
          <Container className={ cx("white") } >
            <div className={ cx("center", "tc", this.props.width) }>
              <h3 className={ cx("f6", "lh-copy", "f4-ns", "ma0", "white-60", "tl-ns") }>
                <span>{this.props.toptitle}</span>
              </h3>
              <HeadlineTag className={ cx("f1", "f-headline-ns", "ma0", "mb3") } >{this.props.title}</HeadlineTag>
              <h3 className={ cx("f6", "lh-copy", "f4-ns", "ma0", "white-60", "tc-ns") }>
                <span>{this.props.subtitle}</span>
              </h3>
              <If condition={ this.props.details }>
                <p className={ cx("f6", "i") }>{this.props.details}</p>
              </If>
              <If condition={ this.props.footer }><this.props.footer /></If>
            </div>
          </Container>
        </div>
        <If condition={ this.props.scrollAnimation }>
          <div style={ { width: "22px" } } className={ cx("absolute", "bottom-1", "left-0", "right-0", "center") }>
            {/* <div className={ cx("o-40", "icon-scroll") } /> */}
            <div className={ cx("mt1", "o-50") }>
              <span className={ cx("unu") } />
              <span className={ cx("doi") } />
              <span className={ cx("trei") } />
            </div>
          </div>
        </If>
      </div>
    );
  }
}
