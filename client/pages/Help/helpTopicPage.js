/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";

// Components
import Container from "components/Container/";
import Hero from "components/Hero/";

// Utils & Config
import config from "config";
import cx from "utils/styles";

// Home Page Blocks
import {
  // HelpSearchBox,
  // HelpCategory,
  // HelpContact,
  HelpHelpful,
} from "./blocks/";


/**
 * Help Topic Page
 */
export default class HelpTopicPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.db = require("./db.topic.json");
    this.seoTags = {
      title: "Start building now to have happy customers.",
      meta: [
        { name: "description", content: "" },
        { name: "keywords", content: "knowledge base, help, rapidly, prototype, build, deploy, react, website" },
        { property: "og:description", content: "" },
        { property: "og:title", content: "" },
        { property: "og:image", content: `${config.site.url}${require("assets/help/hero.jpg")}` },
      ],
    };
  }

  render() {
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          title="Help Topic"
          headline={ 2 }
          // vh="vh-50-ns"
          background={ require("assets/help/hero.jpg") }
          subtitle="Example help topic page"
        />

        <Container>
          <section className={ cx("center", "mw7", "mv5") } >
            <For each="help" index="idx" of={ this.db }>
              <header><h1>{help.title}</h1></header>
              <ReactMarkdown className={ cx("f4", "lh-copy") } source={ help.details } />
              <For each="topic" of={ help.paragraphs }>
                <article>
                  <h2 className={ cx("bb", "b--scala-6", "pb2") }>{topic.title}</h2>
                  {/* <p className={cx("f4","lh-copy")}>{topic.body}</p> */}
                  <ReactMarkdown className={ cx("xf5", "lh-copy") } source={ topic.body } />
                </article>
              </For>
            </For>
          </section>
          <section className={ cx("center", "mw7", "mv5") } >
            <HelpHelpful />
          </section>

        </Container>
      </div>
    );
  }
}
