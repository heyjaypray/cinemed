/* eslint-disable import/extensions, max-len */
import React from "react";

// Modules

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * Stateless Functional Column Component
 * @param  {[type]} children [description]
 * @return {[type]}          [description]
 */
const Column = ({ children, image, title, subtitle, footer }) => (
  <div className={ cx("fl", "w-50", "w-third-ns", "ph4", "pv2") } >
    <article>
      <img alt={ title } src={ image } className={ cx("br2") } />
      <header>
        <h2 className={ cx("f4") }>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className={ cx("lh-copy", "f6") }>
        {children}
      </div>
      <If condition={ footer }>
        <footer>
          <p><small>Creative Commons Attribution-ShareAlike License</small> {footer}</p>
        </footer>
      </If>
    </article>
  </div>
);
Column.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  footer: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};


/**
 * HomeFeatures Component
 */
export default class HomeFeatures extends React.Component {

  /**
   * propTypes
   * @type {Object}
   */
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
    const wrapperCL = cx("pv5", "bg-scala-7");
    const headerCL = cx("tc");
    const h5CL = cx("f6", "ma0", "mb2", "ttu");
    const h2CL = cx("ma0", "body-font", "f2", "f1-ns");
    const pCL = cx("scala-4", "center", "measure", "lh-copy");
    return (
      <div className={ wrapperCL }>
        <Container>
          <section>
            <header className={ headerCL }>
              <h5 className={ h5CL }>Great features come in this template.</h5>
              <h2 className={ h2CL }>You can easily build your website</h2>
              <p className={ pCL }>
                It is now easy to create a template that can easily meet any request.
                You can set how pages look on <b>each device</b>.
              </p>
            </header>

            <div className={ cx("flex", "flex-wrap", "content-stretch") } >
              <Column title="Easy to customize" image={ require("assets/home/easy-to-customize.jpg") }>
                <p>
                  Thanks to <b>ReactJS</b>, <b>ES6</b>,
                  you can now easily edit dynamic pages without losing them in code.
                </p>
              </Column>
              <Column title="Clean UI" image={ require("assets/home/clean-ui.jpg") }>
                <p>
                  We are preparing templates with a clean and minimal design concept.
                  So you can work comfortably with <b>lightweight</b> and useful templates.
                </p>
              </Column>
              <Column title="Modern code" image={ require("assets/home/clean-code.jpg") }>
                <p>
                  We use <b>Webpack</b> for bundle javascripts and css styles,
                  Thanks to babel you can use es6 syntax.
                </p>
              </Column>
              <Column title="High performance" image={ require("assets/home/high-performance.jpg") }>
                <p>
                  It is not difficult to get high performance thanks to its <b>lightweight</b> structure.
                  All assets are optimized with webpack for production.
                </p>
              </Column>
              <Column title="Serverless Infrastructure" image={ require("assets/home/serverless.jpg") }>
                <p>
                  If your aim is to promote your company or show your products, you do not need a server.
                  You can do this fastest with <b>static pages</b> without a server.
                </p>
              </Column>
              <Column title="Easy Deployment" image={ require("assets/home/easy-deployment.jpg") }>
                <p>
                  Everything you need comes with the template so you can easily publish your projects.
                  With <b>Webpack</b> you can test your codes and prepare your content for production.
                </p>
              </Column>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
