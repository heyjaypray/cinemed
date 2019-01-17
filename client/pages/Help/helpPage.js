/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
import Container from "components/Container/";
import Hero from "components/Hero/";

// Utils & Config
import config from "config";
import cx from "utils/styles";

// Home Page Blocks
import { HelpSearchBox, HelpCategory, HelpContact } from "./blocks/";

/**
 * Help Page
 */
export default class HelpPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.seoTags = {
      title: "Start building now to have happy customers",
      meta: [
        { name: "description", content: "Easy-to-use knowledge base pages that guarantees 50% less support emails." },
        { name: "keywords", content: "knowledge base, help, rapidly, prototype, build, deploy, react, website" },
        { property: "og:description", content: "Easy-to-use knowledge base pages that guarantees 50% less support emails." },
        { property: "og:title", content: "Start building now to have happy customers" },
        { property: "og:image", content: `${config.site.url}${require("assets/help/hero.jpg")}` },
      ],
    };
  }

  render() {
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          title="Help!"
          background={ require("assets/help/hero.jpg") }
          subtitle="Easy-to-use knowledge base pages that guarantees 50% less support emails."
          details="Start building now to have happy customers."
        />
        <Container>
          <HelpSearchBox />
          <div className={ cx("tc", "ph2") }>
            <div className={ cx("tl", "w-100", "w-70-ns", "dib") }>
              <HelpCategory db={ require("./db.json") } />
            </div>
          </div>
        </Container>
        <HelpContact />
      </div>
    );
  }
}
