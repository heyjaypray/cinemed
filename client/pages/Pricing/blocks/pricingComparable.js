import React from "react";
import { Link } from "react-router";

// Modules
import { Icon } from "react-fa";

// Components

// Utils & Config
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class PricingComparable extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.changePeriod = this.changePeriod.bind(this);
    this.state = {
      db: require("../comparableDb.json"),
      period: false,
    };
  }

  changePeriod(event) {
    this.setState({
      period: event.target.checked,
    });
  }

  render() {
    // const StarterPlan = find( this.state.db.plans, {plan: "Starter"});
    // const FeatureValue = (plan,item) => _.result(_.find(plan, { title:  item }), "value");
    const period = this.state.period;
    const init = cx("scala-4");
    const active = cx("blue", "b");

    const promote = cx("bg-blue", "white");
    const normalCL = cx("scala-3");

    const buttonClass = cx("color-inherit", "b", "ba", "dim", "ttu", "dib", "br2", "pa2", "mb3", "tracked-tight");

    return (
      <div>
        <table className={ cx("w-100", "collapse", "pv2", "ph3", "mt4") }>
          <thead>
            <tr>
              <th className={ cx("ba", "b--scala-7") }>
                <div className={ cx("flex", "items-center", "justify-center") }>
                  <h4 className={ cx("order-0", { [`${active}`]: !period, [`${init}`]: period }) }>Monthly</h4>
                  <h4 className={ cx("order-2", { [`${active}`]: period, [`${init}`]: !period }) }>Yearly <small>(Save 1 month)</small></h4>
                  <label htmlFor="inputPeriod" className={ cx("order-1", "mh3", "switch", "switch-small") }>
                    <input id="inputPeriod" onChange={ this.changePeriod } value={ Boolean(true) } type="checkbox" />
                    <div className={ cx("slider", "round") } />
                  </label>
                </div>
              </th>
              <For each="item" index="idx" of={ this.state.db.plans } >
                <th key={ `c-${idx}` } className={ cx("ba", "b--scala-7", { [`${promote}`]: item.promote }) } >
                  <p className={ cx("f3", "lh-copy", "mv2", { [`${normalCL}`]: !item.promote }) } >{item.plan}</p>
                  <If condition={ !period }>
                    <p className={ cx("f1", "ma0", "pb2", { [`${normalCL}`]: !item.promote }) }><span>{item.priceMonth}</span><span className={ cx("f4", "fw6") }>/month</span></p>
                  </If>
                  <If condition={ period }>
                    <p className={ cx("f1", "ma0", "pb2", { [`${normalCL}`]: !item.promote }) }><span>{item.priceYear}</span><span className={ cx("f4", "fw6") }>/year</span></p>
                  </If>
                  <p className={ cx("f6", "ttc", "mv2", "db", "pv2", "tracked-tight", { [`${normalCL}`]: !item.promote }) }>{item.details}</p>
                  <Link to={ item.link } className={ buttonClass }>Get Started Now</Link>
                </th>
              </For>
            </tr>
          </thead>
          <tbody className={ cx("ba", "b--scala-7") }>
            <For each="item" index="idx" of={ this.state.db.data } >

              <tr key={ `i-${idx}` } className={ cx("striped--scala-7") }>
                <th className={ cx("pv2", "ph3", "tl", "f6", "w-40") }>{item}</th>

                <For each="plan" index="planIndex" of={ this.state.db.plans } >
                  <th key={ `p-${planIndex}` } className={ cx("tc", "pv2", "ph3", "tl", "f6", "w-20") }>
                    <Choose>
                      <When condition={ this.state.db.plans[planIndex].features[idx] === "yes" }>
                        <Icon className={ cx("green") } name="check" />
                      </When>
                      <When condition={ this.state.db.plans[planIndex].features[idx] === "no" }>
                        <Icon className={ cx("red") } name="close" />
                      </When>
                      <Otherwise>
                        <span>{this.state.db.plans[planIndex].features[idx]}</span>
                      </Otherwise>
                    </Choose>
                  </th>
                </For>

              </tr>

            </For>
          </tbody>
        </table>
      </div>
    );
  }
}
