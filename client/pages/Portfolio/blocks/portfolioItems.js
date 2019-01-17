/* eslint-disable import/no-dynamic-require, max-len */
import React from "react";
import { Link } from "react-router";

// Modules
import { Icon } from "react-fa";

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions


/**
 * Stateless Functional Product Component
 * @param  { String } options.title    [description]
 * @param  { String } options.subtitle [description]
 * @param  { Array } options.tags     [description]
 * @param  { String } options.link     [description]
 * @param  { String } options.body     [description]
 * @return { ReactElement } markup
 */
const Product = ({ image, title, subtitle, tags = [], link, body, colClass, layout }) => (
  <div className={ colClass }>
    <article className={ cx("flex", "flex-column", "bg-white", "pa3", "ba", "b--scala-7", "h-100") }>
      <header>
        <If condition={ image }>
          <img alt="Sample product" src={ require(`assets/${image}`) } />
        </If>
        <h3 className={ cx("mb2") }>{ title }</h3>
        <h5 className={ cx("ma0") }>{ subtitle }</h5>
      </header>
      {/* If layout column is more than 4, do not display the body text! */}
      <If condition={ !(layout > 4) }><p className={ cx("f6", "lh-copy", "pa0") }>{ body }</p></If>
      <br />
      <footer className={ cx("flex", "items-center", "pt2", "bt", "b--scala-7", "mt-auto") }>
        <div className={ cx("flex", "items-center", "mr3") }>
          <Icon className={ cx("scala-4", "mr2") } name="tag" />
          <ul className={ cx("dib", "f7", "pl0", "list", "ma0") }>
            <For each="tag" index="idx" of={ tags }>
              <li key={ idx } className={ cx("dib") }>
                <Link to={ tag.link }>{ tag.title }</Link>
                <If condition={ idx !== tags.length - 1 }><span className={ cx("mh1") }>,</span></If>
              </li>
            </For>
          </ul>
        </div>
        <div className={ cx("ml-auto") }>
          <p className={ cx("ma0") }>
            <Link to={ link } title={ title } className={ cx("tc", "db", "f7", "ph2", "pv1", "bg-scala-7", "br1", "dim") } style={ { minWidth: "6rem" } } >
             More Details ⨠
            </Link>
          </p>
        </div>
      </footer>
    </article>
  </div>
);

Product.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  tags: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  link: React.PropTypes.string,
  body: React.PropTypes.string,
  colClass: React.PropTypes.string,
  layout: React.PropTypes.number,
};

/**
 * Portfolio Item
 */
export default class PortfolioItems extends React.Component {

  /**
   * propTypes
   * @property { String } name - Component Name
   * @type { Object }
   */
  static propTypes = {
    name: React.PropTypes.string,
  };

  /**
   * constructor
   * @param  { Object } props
   */
  constructor(props) {
    super(props);

    this.changeLayout = this.changeLayout.bind(this);

    /**
     * Portfolio Column Classes
     * @type { Object }
     */
    this.classes = {
      5: cx("fl", "dib", "w-100", "w-50-ns", "w-25-l", "w-20-xl", "pa2"),
      4: cx("fl", "dib", "w-100", "w-50-ns", "w-25-l", "pa2"),
      3: cx("fl", "dib", "w-100", "w-50-ns", "w-third-l", "pa2"),
      2: cx("fl", "dib", "w-100", "w-50-ns", "pa2"),
      // 1: cx("fl", "dib", "w-100", "pa2"),
    };

    // Default States
    this.state = {
      products: [],
      layout: 4,
      colClass: this.classes[4],
    };
  }

  componentDidMount() {
    /**
     * Portfolio Data is being loaded, when the component is mount.
     */
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      products: require("../db.json"),
    });
  }

  /**
   * changeLayout method
   * @param  { Object } event Portfolio Layout change event
   */
  changeLayout(event) {
    // console.log("Val", event.target.value);
    this.setState({
      colClass: this.classes[event.target.value],
      layout: Number(event.target.value),
    });
  }

  /**
   * render
   * @return { ReactElement } makup
   */
  render() {
    const base = cx(
      "dib",
      "ba",
      // "br2",
      "f7",
      "input-reset",
      // "mh1",
      "ph2",
      "pv1",
      "outline-0",
    );

    const defaultCL = cx(
      "b--scala-5",
      "bg-scala-6",
      "scala-2",
    );

    const activeCL = cx(
      "b--scala-3",
      "bg-scala-4",
      "scala-8",
    );

    // const i1CL = cx(base, { [defaultCL]: !(this.state.layout==1), [activeCL]: (this.state.layout==1)  });
    const i2CL = cx(base, { [defaultCL]: !(this.state.layout === 2), [activeCL]: (this.state.layout === 2) });
    const i3CL = cx(base, { [defaultCL]: !(this.state.layout === 3), [activeCL]: (this.state.layout === 3) });
    const i4CL = cx(base, { [defaultCL]: !(this.state.layout === 4), [activeCL]: (this.state.layout === 4) });
    const i5CL = cx(base, { [defaultCL]: !(this.state.layout === 5), [activeCL]: (this.state.layout === 5) });

    return (

      <div className={ cx("pv5", "bg-scala-8") }>
        <Container>
          <section>
            <header className={ cx("ph2", "flex", "items-center") }>
              <h2>Portfolio</h2>
              <div className={ cx("ml-auto", "dn", "dib-ns", "hide-child") }>
                <span className={ cx("child", "scala-4", "f7", "i", "mr2") }>Change layout</span>
                <input className={ i2CL } type="submit" onClick={ this.changeLayout } value="2" />
                <input className={ i3CL } type="submit" onClick={ this.changeLayout } value="3" />
                <input className={ i4CL } type="submit" onClick={ this.changeLayout } value="4" />
                <input className={ i5CL } type="submit" onClick={ this.changeLayout } value="5" />
              </div>
            </header>

            <div className={ cx("flex", "flex-wrap", "justify-center") }>
              <For each="product" index="idx" of={ this.state.products }>
                <Product
                  key={ idx }
                  { ...product }
                  layout={ this.state.layout }
                  colClass={ this.state.colClass }
                />
              </For>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
