/* eslint-disable import/extensions, max-len */
import React from "react";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * HomePurchase
 */
export default class HomePurchase extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const wrapperCL = cx("pv5");
    const headerCL = cx("tc");
    const h5CL = cx("f6", "ma0", "mb2", "ttu");
    const h2CL = cx("ma0", "body-font", "f2", "f1-ns");
    const pCL = cx("scala-4", "center", "measure", "lh-copy", "pb3", "bb", "b--scala-7");
    const buttonCL = cx("input-reset", "b", "grow", "ttu", "fw6", "ph4", "pv3", "br1", "bg-blue", "white", "ba", "b--transparent");

    return (
      <div className={ wrapperCL }>
        <Container>
          <section>
            <header className={ headerCL }>
              <h5 className={ h5CL }>Purchase Titan React Template Bundle</h5>
              <h2 className={ h2CL }>It is not just a single template!</h2>
              <p className={ pCL }>
                We will continue to add templates regularly to this bundle.
                We will add many carefully arranged templates for different sectors and various needs.
              </p>
              <p>
                <button className={ buttonCL }>Purchase now</button>
              </p>
            </header>
          </section>
        </Container>
      </div>
    );
  }
}
