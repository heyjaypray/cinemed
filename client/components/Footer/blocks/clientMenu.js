/* eslint-disable jsx-a11y/href-no-hash */
import React from "react";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class ClientMenu extends React.Component {
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
          <li className={ liCL }><a href="#" className={ aCL }>Tutorials</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Support</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Blog</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>News</a></li>
          <li className={ liCL }><a href="#" className={ aCL }>Client list</a></li>
        </ul>
      </div>
    );
  }
}
