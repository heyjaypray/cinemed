/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
import Hero from "components/Hero/";
import Container from "components/Container/";

// Utils & Config
import cx from "utils/styles";
import config from "config";

// Home Page Blocks
import {
  PricingBasic,
  PricingExtended,
  PricingComparable,
} from "./blocks/";

/**
 * PricingPage
 */
export default class PricingPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.changeList = this.changeList.bind(this);
    // Initial State
    this.state = { list: "extended" };
    // Page SEO
    this.seoTags = {
      title: "All product prices are on one page.",
      meta: [
        { name: "description", content: "Everything You Need To Build Awesome React Website. Rapidly prototype, build, and deploy website with Titan business." },
        { name: "keywords", content: "rapidly, prototype, build, deploy, react, website" },
        { property: "og:description", content: "Everything You Need To Build Awesome React Website. Rapidly prototype, build, and deploy website with Titan business." },
        { property: "og:title", content: "All product prices are on one page." },
        { property: "og:image", content: `${config.site.url}${require("assets/home/hero.jpg")}` },
      ],
    };
  }

  changeList(event) {
    // console.log("Target", event.target.getAttribute("data-list"));
    this.setState({
      list: event.target.getAttribute("data-list"),
    });
  }

  render() {
    const buttonCL = cx("dim", "ba", "br2", "b--blue", "ph4", "pv2", "mh1", "mv1", "bg-transparent", "blue");
    const buttonActiveCL = cx(buttonCL, {
      "bg-scala-8": true,
      "b--scala-6": true,
      "scala-2": true,
    });
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          title="Pricing"
          background={ require("assets/pricing/hero.jpg") }
          subtitle="There’s a plan for every size and type of team. Choose the one that fits your business goals."
          details="Feel free to contact us for more information."
        />
        <Container>
          <div className={ cx("cf", "center", "mw8", "mv4") }>
            <div className={ cx("tc", "mb3") }>
              <button
                data-list="basic"
                onClick={ this.changeList }
                className={ cx(buttonCL, { [`${buttonActiveCL}`]: this.state.list === "basic" }) }
              >Basic List</button>
              <button
                data-list="extended"
                onClick={ this.changeList }
                className={ cx(buttonCL, { [`${buttonActiveCL}`]: this.state.list === "extended" }) }
              >Extended List</button>
              <button
                data-list="comparable"
                onClick={ this.changeList }
                className={ cx(buttonCL, { [`${buttonActiveCL}`]: this.state.list === "comparable" }) }
              >Comparable List</button>
            </div>
            <Choose>
              <When condition={ this.state.list === "basic" }>
                <PricingBasic />
              </When>
              <When condition={ this.state.list === "extended" }>
                <PricingExtended />
              </When>
              <When condition={ this.state.list === "comparable" }>
                <PricingComparable />
              </When>
            </Choose>
          </div>
        </Container>
      </div>
    );
  }
}
