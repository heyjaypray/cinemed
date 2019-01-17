import React from "react";
import { Link } from "react-router";

// Modules

// Components
// import Container from "components/Container/";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

export default class HelpSearchBox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const inputCL = cx(
      "fl",
      "input-reset",
      "f5",
      "dib",
      "pa3",
      "w-80",
      "w-50-ns",
      "ba",
      "br2",
      "b--scala-6",
    );
    const buttonCL = cx(
      "f6",
      "f5-l",
      "button-reset",
      "fl",
      "pv3",
      "tc",
      "bn",
      "bg-animate",
      "bg-scala-4",
      "hover-bg-scala-3",
      "white",
      "pointer",
      "w-25",
      "w-20-l",
      "br2-ns",
      "br--right-ns",
    );

    const popularTopics = [
      { title: "Sign in to Business", url: "#" },
      { title: "Delete a account", url: "#" },
      { title: "Edit or delete messages", url: "#" },
    ];

    return (
      <div className={ cx("tc", "pa2") }>
        <h2 className={ cx("f1") }>How can we help?</h2>
        <div className={ cx("flex", "justify-center") }>
          <input className={ inputCL } name="search" placeholder="Find anything (like reset password, send a message etc.)" />
          <input className={ buttonCL } type="submit" value="Search" />
        </div>
        <div>
          <ul className={ cx("list", "pl0") } >
            <li className={ cx("dib", "mr2") }><b>Popular help topics:</b></li>
            <For each="item" index="idx" of={ popularTopics }>
              <li key={ idx } className={ cx("dib", "mh1", "lh-copy") }>
                <Link className={ cx("link", "underline") } to={ item.url }>{item.title}</Link>
                <If condition={ idx < popularTopics.length - 1 }><span>,</span></If>
              </li>
            </For>
          </ul>
        </div>
      </div>
    );
  }
}
// message formatting, Slackbot, two-factor authentication
