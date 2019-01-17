/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router";

// Modules
// import NoScript from "react-noscript";
import { Icon } from "react-fa";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions
import config from "config";

// Menu
import { MainMenu } from "./menu/";

/**
 * GlobalHeader Component
 */
export default class GlobalHeader extends React.Component {
  /**
   * propTypes
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
  };


  /**
   * constructor
   * @property {Function} menuClick - Toggle menu after click any menu item
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.menuClick = this.menuClick.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this);
  }

  /**
   * Default component states
   * @type {Object}
   */
  state = {
    toggle: false,
    searchToggle: false,
    mobileMenuToggle: false,
  };

  /**
   * toggleMenu method
   */
  toggleMenu() {
    this.setState({
      toggle: !this.state.toggle,
      // searchToggle: false,
      mobileMenuToggle: false,
    });
    // document.body.classList.toggle(cx("noscroll"),!this.state.toggle);
    // document.body.classList.toggle(cx("noscroll"), !this.state.searchToggle );
  }

  /**
   * menuClick method
   * @param  {Object} event - Menu click events
   */
  menuClick(event) {
    // console.log("event", event.key);
    if (event.key && event.key !== undefined) {
      this.setState({
        toggle: !this.state.toggle,
        mobileMenuToggle: false,
      });
      // if click is not search button!
      if (event.key !== "search-button") {
        document.body.classList.toggle(cx("noscroll"), false);
      }
    }
  }

  searchToggle() {
    this.setState({
      searchToggle: !this.state.searchToggle,
      mobileMenuToggle: false,
    });
    document.body.classList.toggle(cx("noscroll"), !this.state.searchToggle);
  }

  /**
   * Mobile menu toggle method
   * @param  {[type]} event - Mobile menu link events
   */
  mobileMenuToggle(event) {
    event.preventDefault();
    this.setState({ mobileMenuToggle: !this.state.mobileMenuToggle });
    document.body.classList.toggle(cx("noscroll"), !this.state.mobileMenuToggle);
  }

  render() {
    // const {
    //   isPortrait,
    //   isLandscape,
    //   isMaxXs,
    //   isMinSm,
    //   isMaxSm,
    //   isMinMd,
    //   isMaxMd,
    //   isMinLg,
    // } = this.props;

    // const toggle = this.state.toggle;
    // const mType = (this.state.toggle) ? "horizontal" : "inline";

    const logoCL = cx("ma0", "f3", "b", "tc", "tl-ns", "ph2", "pv3", "mr4-ns");

    const overlay = cx(
      // "flex",
      // "items-center",
      // "justify-center",
      "fixed",
      "db",
      "overflow-y-auto",
      "left-0",
      "top-0",
      "min-vh-100",
      "bg-black-90",
      "w-100",
      "h-100",
      "z-9999"
    );

    const CloseButton = ({ onClick }) => (
      <a tabIndex="0" onClick={ onClick } className={ cx("fixed", "right-2", "top-1") }>
        <Icon size="2x" name="close" />
      </a>
    );

    return (
      <div className={ cx("w-100", "absolute", "top-1", "white", "link--white-80", "hover-link--white-50", "z-9999") }>

        {/* Search overlay */}
        <If condition={ this.state.searchToggle }>
          <div className={ cx("flex", "items-center", "justify-center", "fixed", "left-0", "top-0", "min-vh-100", "bg-black-90", "w-100", "z-9999") } aria-hidden="true" >
            <CloseButton onClick={ this.searchToggle } />
            <div className={ cx("w-100", "w-50-ns", "tc", "center") }>
              <input className={ cx("b", "outline-0", "input-reset", "br3", "br--left", "pa3", "ba", "b--transparent", "w-50", "bg-white-80", "scala-0") } name="search" placeholder="Search..." />
              <button className={ cx("outline-0", "pointer", "b", "input-reset", "br3", "br--right", "pa3", "ba", "b--transparent", "bg-animate", "bg-blue", "hover-bg-green", "white") }>Search</button>
              <p className={ cx("f6", "lh-copy", "white-50", "pa3") }>If you can not find what you are looking for, just <Link onClick={ this.searchToggle } to="/contact">contact us</Link>.</p>
            </div>
          </div>
        </If>

        {/* Mobile Menu overlay */}
        <If condition={ this.state.mobileMenuToggle }>
          <div className={ overlay } aria-hidden="true" >
            <CloseButton onClick={ this.mobileMenuToggle } />
            <MainMenu
              className={ cx("mv5", "tc") }
              fontSize="f1"
              onClick={ this.menuClick }
              searchToggle={ this.searchToggle }
              menuType="vertical"
            />
          </div>
        </If>

        <Container>
          <nav className={ cx("center", "flex", "items-center") }>

            {/* Site Name */}
            <h2 className={ logoCL }><Link to="/">{config.site.name}</Link></h2>

            {/* Main Menu */}
            <MainMenu searchToggle={ this.searchToggle } className={ cx("ml-auto", "dn", "db-ns") } />

            {/* Mobile Menu Button */}
            <div className={ cx("ml-auto", "db", "dn-ns", "ph2") }>
              <a tabIndex="0" onClick={ this.mobileMenuToggle } className={ cx("link", "dim", "z-9999") }>
                <Icon className={ cx("white") } size="2x" name="bars" />
              </a>
            </div>

          </nav>
        </Container>

      </div>
    );
  }
}
