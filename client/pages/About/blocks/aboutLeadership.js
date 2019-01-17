import React from "react";

// Modules

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * Stateless Functional Column Component
 * @param  {[type]} options.image    [description]
 * @param  {[type]} options.children [description]
 * @return {[type]}                  [description]
 */
const Column = ({ image, children }) => (
  <div className={ cx("fl", "w-100", "w-50-ns", "pa2", "mb3", "mb0-ns") }>
    <div className={ cx("overflow-hidden", "bg-scala-9", "ba", "br3", "b--scala-8", "flex", "flex-wrap", "content-stretch", "h-100") }>
      <div className={ cx("fl", "w-100", "h5", "h-100-l", "w-50-l", "center", "bg-white", "tc") }>
        <div
          className={ cx("b--scala-8", "br-l", "center", "w5", "h5", "w-100-l", "h-100-l", "cover", "bg-center") }
          style={ { backgroundImage: `url(${image})` } }
        />
      </div>
      <article className={ cx("fl", "w-100", "w-50-l", "pa3") }>{children}</article>
    </div>
  </div>
);

Column.propTypes = {
  image: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

/**
 * AboutLeadership Component
 */
export default class AboutLeadership extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={ cx("pt5") } >
        <Container>
          <section>
            <header>
              <h2>The Leadership Team</h2>
            </header>
            <div className={ cx("flex", "flex-wrap", "justify-center", "content-stretch") }>
              <Column image={ require("assets/avatars/m4.jpg") } >
                <h3>Steven Spencer</h3>
                <h4>CEO / Founder</h4>
                <p className={ cx("f6", "lh-copy") }>
                  Steven is the creator of TITAN
                  Inmensae subtilitatis, obscuris et malesuada fames.
                  Excepteur sint obcaecat cupiditat non proident culpa.
                  Idque Caesaris facere voluntate liceret: sese habere.
                  Mercedem aut nummos unde unde extricat, amaras.
                </p>
              </Column>
              <Column image={ require("assets/avatars/m9.jpg") } >
                <h3>Martim  Correia</h3>
                <h4>CTO / Co-Founder</h4>
                <p className={ cx("f6", "lh-copy") }>
                  Martim is a communi observantia non est recedendum.
                  Ab illo tempore, ab est sed immemorabili.
                  Cras mattis iudicium purus sit amet fermentum.
                  Cum sociis natoque penatibus et magnis dis parturient.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                  Plura mihi bona sunt, inclinet, amari petere vellent.
                </p>
              </Column>
              <Column image={ require("assets/avatars/m5.jpg") } >
                <h3>Javier Cooper</h3>
                <h4>Chief Information Officer</h4>
                <p className={ cx("f6", "lh-copy") }>
                  Javier is Salutantibus vitae elit libero, a pharetra augue.
                  Nihil hic munitissimus habendi senatus locus, nihil horum.
                  Non equidem invideo, miror magis posuere velit aliquet.
                </p>
              </Column>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
