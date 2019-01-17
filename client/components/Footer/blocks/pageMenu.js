import React from "react";
import { Link } from "react-router";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * Footer Pages Menu
 */
export default class PageMenu extends React.Component {
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
  // constructor(props) {
  //   super(props);
  // }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    /* Element Classes  */
    const ulCL = cx("list", "ma0", "pl1");
    const liCL = cx("mb2");
    const aCL = cx("f6", "scala-3", "hover-scala-9");
    return (
      <div>
        <ul className={ ulCL }>
          <li className={ liCL }><Link to="/" className={ aCL }>Home</Link></li>
          <li className={ liCL }><Link to="/about" className={ aCL }>About us</Link></li>
          <li className={ liCL }><Link to="/portfolio" className={ aCL }>Portfolio</Link></li>
          <li className={ liCL }><Link to="/pricing" className={ aCL }>Pricing</Link></li>
          <li className={ liCL }><Link to="/help" className={ aCL }>Help</Link></li>
          <li className={ liCL }><Link to="/contact" className={ aCL }>Contact</Link></li>
          <li className={ liCL }><Link to="/login" className={ aCL }>Login & Register</Link></li>
        </ul>
      </div>
    );
  }
}
