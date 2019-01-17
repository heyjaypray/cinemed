/* eslint-disable import/extensions */
import React from "react";

// Modules
import { Icon } from "react-fa";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * HomeIntro
 */
export default class HomeIntro extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className={ cx("pv5") }>
        <Container>
          <section>
            <header className={ cx("tc") }>
              <h2 className={ cx("f6", "ma0", "mb2", "ttu") } >Everything you need to build awesome react website</h2>
              <h1 className={ cx("body-font", "fw1", "lh-copy", "ma0") }>
                Rapidly prototype, build, and deploy website with <b>TITAN</b>.
              </h1>
            </header>
            <article className={ cx("pt3", "tc") }>
              <span className={ cx("scala-4", "mr2", "lh-copy") }>Build your first React Website with the two-minute tutorial.</span>
              <button className={ cx("lh-copy", "f6", "fw6", "ttu", "ba", "b--blue", "dim", "white", "hover-scala-8", "ph3", "pv2", "bg-blue", "br2") }>Get started <Icon className={ cx("b", "ml3") } name="angle-right" /> </button>
            </article>
          </section>
        </Container>
      </div>
    );
  }
}
