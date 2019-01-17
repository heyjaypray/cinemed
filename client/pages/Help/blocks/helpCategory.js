import React from "react";
import { Link } from "react-router";

// Modules
import _ from "lodash";

// Utils & Config
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class HelpCategory extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
    db: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);

    const data = _.chain(this.props.db)
      .groupBy("category")
      .toPairs()
      .map(currentItem => _.zipObject(["category", "topics"], currentItem))
      .value();

    this.state = {
      db: data || [],
    };
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className={ cx("mb5") }>
        <For each="category" index="catIndex" of={ this.state.db }>
          <h2>{category.category}</h2>
          <ul key={ `cat-${catIndex}` } className={ cx("list", "list-nicely", "pl0", "flex", "flex-wrap") }>
            <For each="topic" index="topicIdx" of={ category.topics }>
              <li key={ `topic-${topicIdx}` } className={ cx("lh-copy", "w-100", "w-50-ns") }>
                <Link className={ cx("ttc", "link", "scala-3", "hover-blue", "underline-hover") } to={ topic.link }>{topic.title}</Link>
              </li>
            </For>
          </ul>
        </For>
      </div>
    );
  }
}
