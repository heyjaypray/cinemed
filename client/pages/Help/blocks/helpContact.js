/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router";

// Modules

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * HelpContact
 */
export default class HelpContact extends React.Component {

  static propTypes = {
    // name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const buttonCL = cx(
      "link",
      "input-reset",
      "ba",
      "br2",
      "b--white",
      "ph4",
      "pv3",
      "white",
      "animate",
      "bg-transparent",
      "bg-animate",
      "hover-bg-white",
      "hover-blue",
      "b",
    );
    return (
      <div className={ cx("bg-blue", "near-white", "pv4") }>
        <Container>
          <div className={ cx("center", "xmw7") }>
            <div className={ cx("flex", "flex-column", "flex-row-l", "items-center", "justify-center") }>
              <h2 className={ cx("f5", "lh-copy", "mr3") }>
                If you can not find the answers to your questions above, you can always <span className={ cx("b", "bb") }>contact us</span>!
              </h2>
              <Link to="/contact" className={ buttonCL }>Send a message</Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
