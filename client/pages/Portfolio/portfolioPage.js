/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
// import Container from "components/Container/";
import Hero from "components/Hero/";

// Utils & Config
import config from "config";
// console.log("config", config);

// Home Page Blocks
import {
  PortfolioItems,
} from "./blocks/";

export default class PortfolioPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.seoTags = {
      title: "This is the perfect way to promote your products",
      meta: [
        { name: "description", content: "Present this sample product to your customers in the best possible way. The only thing you need is the TITAN pre-build reactjs template" },
        { name: "keywords", content: "rapidly, prototype, build, deploy, react, website, portfolio" },
        { property: "og:description", content: "Present this sample product to your customers in the best possible way. The only thing you need is the TITAN pre-build reactjs template" },
        { property: "og:title", content: "This is the perfect way to promote all products" },
        { property: "og:image", content: `${config.site.url}${require("assets/portfolio/hero.jpg")}` },
      ],
    };
  }

  render() {
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          title="Showcase"
          subtitle="Handpicked Portfolio items"
          width="w-100"
          vh="min-vh-100-ns"
          scrollAnimation={ Boolean(true) }
          background={ require("assets/portfolio/hero.jpg") }
        />
        <PortfolioItems />
      </div>
    );
  }
}
