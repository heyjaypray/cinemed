/* eslint-disable jsx-a11y/href-no-hash */
import React from "react";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class CompanyMenu extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const ulCL = cx("list", "ma0", "pl1");
    const liCL = cx("mb2");
    const aCL = cx("f6", "scala-3", "hover-scala-9");
    return (
      <div>
        <ul className={ ulCL }>
          <li className={ liCL }><a href="#" className={ aCL }>Team</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Jobs</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Legal</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Privacy</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Terms of Use</a></li>
        </ul>
      </div>
    );
  }
}
