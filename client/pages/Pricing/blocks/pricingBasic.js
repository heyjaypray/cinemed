/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router";

// Modules

// Components

// Utils & Config
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * [description]
 * @param  {[type]}  options.plan    [description]
 * @param  {[type]}  options.price   [description]
 * @param  {[type]}  options.period  [description]
 * @param  {[type]}  options.details [description]
 * @param  {Array}   options.items   [description]
 * @param  {[type]}  options.link    [description]
 * @param  {Boolean} options.promote [description]
 * @return {[type]}                  [description]
 */
const PriceBox = ({ plan, priceMonth, priceYear, period, details, features = [], link, promote = Boolean(false) }) => {
  const headerClass = cx("f3", "near-white", "pv3", "b", {
    "bg-scala-4": !promote,
    "bg-blue": promote,
  });

  const buttonClass = cx("dim", "ttu", "dib", "br2", "ph4", "pv2", "white", "hover-white", "tracked-tight", {
    "bg-scala-3": !promote,
    "bg-blue": promote,
  });

  const footerClass = cx("b", "f5", "tc", "pv3", "bg-scala-7");

  return (
    <div className={ cx("fl", "w-100", "w-third-ns", "mb3", "mb0-ns", "pa2-ns") }>
      <ul className={ cx("list", "tc", "pa0", "ma0", "ba", "br2", "b--scala-7", "overflow-hidden") }>
        <li className={ headerClass }>{plan}</li>
        <li className={ cx("b", "f4", "bg-scala-7", "pv3") }>
          <If condition={ !period }>
            {/* Month */}
            <p className={ cx("mt0", "mb1") }>{priceMonth} <span className={ cx("f6", "fw6", "scala-3") }>/month</span></p>
          </If>
          <If condition={ period }>
            {/* Year */}
            <p className={ cx("mt0", "mb1") }>{priceYear} <span className={ cx("f6", "fw6", "scala-3") }>/year</span></p>
          </If>
          <p className={ cx("scala-3", "i", "fw4", "f7", "ma0") }>{details}</p>
        </li>
        <For each="item" index="idx" of={ features }>
          <li key={ idx } className={ cx("f5", "pv3", "bb", "b--scala-7") }>{item}</li>
        </For>
        <li className={ footerClass }>
          <Link to={ link } className={ buttonClass }>Sign Up</Link>
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
  link: React.PropTypes.string,
  promote: React.PropTypes.bool,
};

export default class PricingBasic extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.changePeriod = this.changePeriod.bind(this);
    this.state = {
      db: require("../db.json"),
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
            <input id="inputPeriod" onChange={ this.changePeriod } value={ Boolean(true) } type="checkbox" />
            <div className={ cx("slider", "round") } />
          </label>
        </div>
        <div className={ cx("cf") }>
          <For each="p" index="idx" of={ this.state.db }>
            <PriceBox key={ idx } period={ this.state.period } { ...p } />
          </For>
        </div>
      </div>

    );
  }
}
