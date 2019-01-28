/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";
// import { Icon } from "react-fa";

// Components
// import Container from "components/Container/";
import Hero from "components/Hero/";


// Utils & Config
import config from "config";
import cx from "utils/styles";

// Home Page Blocks
import {
  HomeMessage,
  HomeNewsletter,
  HomePurchase,
  HomeFeatures,
  HomeIntro,
} from "./blocks/";

/**
 * HomePage Component
 */
export default class HomePage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.seoTags = {
      title: "Rapidly build your website",
      meta: [
        { name: "description", content: "Everything You Need To Build Awesome React Website. Rapidly prototype, build, and deploy website with Titan business." },
        { name: "keywords", content: "rapidly, prototype, build, deploy, react, website" },
        { property: "og:description", content: "Everything You Need To Build Awesome React Website. Rapidly prototype, build, and deploy website with Titan business." },
        { property: "og:title", content: "Rapidly prototype, build, and deploy website with titan business" },
        { property: "og:image", content: `${config.site.url}${require("assets/home/hero.jpg")}` },
      ],
    };
  }

  render() {
    // const topTitle = () => (
    //   <h3 className={cx("f6","f4-ns","ma0","white-60")}>
    //     <span>Graphic Design</span>
    //     <span className={cx("mh1")}>/</span>
    //     <span>Web Design</span>
    //     <span className={cx("mh1")}>/</span>
    //     <span>App Development</span>
    //   </h3>
    // );

    //
    const footerButton = () => {
      const pCL = cx("db", "tc-ns", "mt4");
      const linkCL = cx(
        "b",
        "b--white-50",
        "ba",
        "br2",
        "f6-ns",
        "ph3",
        "ph4-ns",
        "pointer",
        "pv2",
        "pv3-ns",
        "ttu",
        "white",
        "hover-black",
        "bg-animate",
        "bg-transparent",
        "hover-bg-white-80",
      );

      return (
        <p className={ pCL }>
          <a className={ linkCL }>
            <span>GET STARTED NOW</span>
          </a>
        </p>
      );
    };

    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          subtitle="ReactJS / CSSModule / Static HTML"
          // toptitle="Balls"
          title="Build Your WebApp"
          footer={ footerButton }
          vh="min-vh-100-ns"
          width="w-100"
          background={ require("assets/home/hero.jpg") }
        />
        <HomeIntro />
        <HomeMessage />
        {/*
          <Container className={cx("mt6")}>
            <div className={cx("ba","mw8","center")}>HomePage</div>
          </Container>
        */}
        <HomeFeatures />
        <HomePurchase />
        <HomeNewsletter />
      </div>
    );
  }
}
