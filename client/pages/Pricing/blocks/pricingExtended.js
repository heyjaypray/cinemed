/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router";

// Modules
import { Icon } from "react-fa";

// Components

// Utils & Config
import cx from "utils/styles"; // eslint-disable-line import/extensions


/**
 * Stateless Functional PriceBox Component
 * @param  {[type]} options.plan       [description]
 * @param  {[type]} options.priceMonth [description]
 * @param  {[type]} options.priceYear  [description]
 * @param  {[type]} options.period     [description]
 * @param  {[type]} options.details    [description]
 * @param  { Array}  options.featured   [description]
 * @param  { Array}  options.features   [description]
 * @param  {[type]} options.link       [description]
 * @param  {[type]} options.promote    [description]
 * @return {[type]}                    [description]
 */
const PriceBox = ({ plan, priceMonth, priceYear, period, details, featured = [], features = [], link, promote = Boolean(false) }) => {
  const activeCL = cx("near-white", {
    "bg-scala-4": !promote,
    "bg-blue": promote,
  });

  const headerClass = cx(activeCL, "pt4", "b");

  const buttonClass = cx("b", "ba", "dim", "ttu", "dib", "br2", "ph4", "pv2", "tracked-tight",
    {
      white: !promote,
      "hover-white": !promote,
      "b--scala-8": !promote,
    },
    {
      white: promote,
      "hover-white": promote,
      "b--scala-8": promote,
    }
  );

  return (
    <div className={ cx("fl", "w-100", "w-third-ns", "mb3", "mb0-ns", "pa2-ns") }>
      <ul className={ cx("list", "tc", "pa0", "ma0", "ba", "br2", "b--scala-7", "xoverflow-hidden", "box-shadow") }>

        <li className={ headerClass }>
          <p className={ cx("f5", "ma0") } >{ plan}</p>
          <If condition={ !period }>
            <p className={ cx("f1", "ma0", "pb2") }><span>{ priceMonth}</span><span className={ cx("f4", "fw6") }>/month</span></p>
          </If>
          <If condition={ period }>
            <p className={ cx("f1", "ma0", "pb2") }><span>{ priceYear}</span><span className={ cx("f4", "fw6") }>/year</span></p>
          </If>
        </li>

        <li className={ cx(activeCL, "pb4") }>
          <ul className={ cx("list", "tl", "dib", "ma0", "pa0") }>
            <For each="item" index="idx" of={ featured }>
              <li key={ idx } className={ cx("pv1") } >
                <Icon className={ cx("mr3") } name="check" /><span>{ item}</span>
              </li>
            </For>
          </ul>
        </li>

        <li className={ cx(activeCL, "pb4") }>
          <Link to={ link } className={ buttonClass }>Get Started Now</Link>
        </li>

        <li className={ cx("bg-scala-8", "scala-3", "pv3") } >
          <p className={ cx("ttc", "ma0", "db", "pv2", "tracked-tight") }>{ details}</p>
        </li>

        <li>
          <ul className={ cx("f6", "list", "pa0", "ma0", "pv4", "dib", "center") }>
            <For each="item" index="idx" of={ features }>
              <li key={ idx } className={ cx("tl", "ph2-l", "lh-copy", "pv1") }>
                <If condition={ item.active === "true" }>
                  <Icon className={ cx("green") } name="check" /> <span className={ cx("scala-1") }>{ item.title}</span>
                </If>
                <If condition={ item.active === "false" }>
                  <em className={ cx("dib", "mr2") }> </em><span className={ cx("ml1", "strike", "scala-6") }>{ item.title}</span>
                </If>
              </li>
            </For>
          </ul>
        </li>

      </ul>
    </div>
  );
};

PriceBox.propTypes = {
  plan: React.PropTypes.string,
  priceMonth: React.PropTypes.string,
  priceYear: React.PropTypes.string,
  period: React.PropTypes.bool,
  details: React.PropTypes.string,
  features: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  featured: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  link: React.PropTypes.string,
  promote: React.PropTypes.bool,
};

/**
 * PricingExtended Component
 */
export default class PricingExtended extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.changePeriod = this.changePeriod.bind(this);
    this.state = {
      db: require("../extendedDb.json"),
      period: false,
    };
  }

  changePeriod(event) {
    this.setState({
      period: event.target.checked,
    });
  }

  render() {
    const period = this.state.period;
    const init = cx("scala-4");
    const active = cx("blue", "b");
    return (
      <div>
        <div className={ cx("flex", "items-center", "justify-center") }>
          <h4 className={ cx("order-0", { [`${active}`]: !period, [`${init}`]: period }) }>Monthly</h4>
          <h4 className={ cx("order-2", { [`${active}`]: period, [`${init}`]: !period }) }>Yearly <small>(Save 1 month)</small></h4>
          <label htmlFor="inputPeriod" className={ cx("order-1", "mh3", "switch", "switch-small") }>
            <input id="inputPeriod" onChange={ this.changePeriod } value="1" type="checkbox" />
            <div className={ cx("slider", "round") } />
          </label>
        </div>
        <div className={ cx("cf") }>
          <For each="p" index="idx" of={ this.state.db }>
            <PriceBox key={ idx } { ...p } period={ this.state.period } />
          </For>
        </div>
      </div>
    );
  }
}
