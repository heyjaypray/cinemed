import React from "react";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * Container Component
 */
export default class Container extends React.Component {

  /**
   * propTypes
   * @property {String} name - Component name
   * @property {Boolean} innerPadding - Inner horizontal padding
   * @property {String} mw - Maximum width of container, default value is `mw9`
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
    ip: React.PropTypes.bool,
    mw: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
    ]),
  };

  static defaultProps = {
    ip: true,
    mw: "mw9",

  };

  /**
   * render
   * @return {ReactElement} markup
  */
  render() {
    return (
      <div className={ cx("cf", "center", this.props.mw, this.props.className) } >
        <div className={ cx("cf", { ph2: this.props.ip }) }>
          { this.props.children }
        </div>
      </div>
    );
  }
}
