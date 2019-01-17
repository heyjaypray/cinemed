import React from "react";

// Modules
import { Icon } from "react-fa";
import Menu, { MenuItem } from "rc-menu";
import { Link } from "react-router";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class MainMenu extends React.Component {

  /**
   * propTypes
   * @property {String} name - Component name
   * @property {Function} searchToggle - Search Toggle function
   * @property {String} fontSize - Menu font size. default value is `f6`
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
    searchToggle: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
    fontSize: React.PropTypes.string,
    menuType: React.PropTypes.string,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  /**
   * efaultProps
   * @type {Object}
   */
  static defaultProps = {
    fontSize: "f6",
  }

  render() {
    const { menuType, onClick } = this.props;
    const linkCL = cx("fw6", this.props.fontSize, "mh1");

    return (
      <div className={ this.props.className } style={ this.props.style }>
        <Menu key="mainMenu" onClick={ onClick } className={ cx("fw6") } mode={ menuType || "horizontal" } openAnimation="slide-up" >
          <MenuItem><Link className={ linkCL } to="/">Home</Link></MenuItem>
          <MenuItem><Link className={ linkCL } to="/about">About</Link></MenuItem>
          <MenuItem><Link className={ linkCL } to="/portfolio">Portfolio</Link></MenuItem>
          <MenuItem><Link className={ linkCL } to="/pricing">Pricing</Link></MenuItem>
          <MenuItem><Link className={ linkCL } to="/help">Help</Link></MenuItem>
          <MenuItem><Link className={ linkCL } to="/contact">Contact</Link></MenuItem>
          {/* <MenuItem><Link className={linkCL} to="/features">Features</Link></MenuItem> */}
          <MenuItem><Link className={ linkCL } to="/login">Login</Link></MenuItem>
          {/* <MenuItem><Link className={linkCL} to="/register">Register</Link></MenuItem> */}
          <MenuItem key="search-button">
            <a tabIndex="0" className={ linkCL } onClick={ this.props.searchToggle }>
              <Icon name="search" />
            </a>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
