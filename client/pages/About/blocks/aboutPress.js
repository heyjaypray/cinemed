import React from "react";
import { Link } from "react-router";

// Modules

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * Stateless Functional Box Component
 * @param  {[type]} options.image    [description]
 * @param  {[type]} options.title    [description]
 * @param  {[type]} options.subtitle [description]
 * @return {[type]}                  [description]
 */
const Box = ({ image, title, subtitle, link }) => (
  <div className={ cx("flex", "justify-center", "items-center", "pa3", "bg-scala-8", "ba", "br2", "b--white") }>
    <img className={ cx("w2", "mr3") } alt={ title } src={ image } />
    <Link className={ cx("pointer") } to={ link }>
      <h4 className={ cx("ma0", "lh-copy") }>{title}</h4>
      <h5 className={ cx("ma0", "lh-copy") }>{subtitle}</h5>
    </Link>
  </div>
);

Box.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  link: React.PropTypes.string,
};

/**
 * AboutPress
 */
export default class AboutPress extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={ cx("pv5", "bg-scala-2") }>
        <Container>
          <section>
            <header className={ cx("tc", "mw7-l", "center", "scala-8") } >
              <h2 className={ cx("ma0") } >Press Center</h2>
              <h4 className={ cx("lh-copy", "body-font", "scala-4") }>
                If you’re interested in writing about us,
                you can find the relevant resources and documents below.
                Do not hesitate to use content conveniently.
                For more information or PR requests, please contact!
              </h4>
            </header>

            <div className={ cx("ml-auto", "mr-auto", "mw6-l", "flex", "flex-column", "flex-row-ns", "justify-center") }>
              <div className={ cx("flex-grow-1", "flex-basis-0", "pa2") }>
                <Box
                  // link="/route/to/your/content"
                  image={ require("assets/flaticons/idea.svg") }
                  title="Press Resources"
                  subtitle="High-resolution photos"
                />
              </div>
              <div className={ cx("flex-grow-1", "flex-basis-0", "pa2") }>
                <Box
                  // link="/route/to/your/content"
                  image={ require("assets/flaticons/management.svg") }
                  title="Logos & Resources"
                  subtitle="Press kits & documents"
                />
              </div>
            </div>

          </section>
        </Container>
      </div>
    );
  }
}
