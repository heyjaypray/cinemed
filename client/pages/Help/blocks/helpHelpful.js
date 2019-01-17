/* eslint-disable import/extensions */
import React from "react";

// Modules

// Components
// import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * HelpHelpful Component
 */
export default class HelpHelpful extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.feedbackAct = this.feedbackAct.bind(this);
    this.state = {
      feedback: null,
      feedbackAct: null,
      feedbackSuccess: "Thanks so much for your feedback!",
    };
  }

  feedbackAct(event) {
    // console.log("Acy", event.target.getAttribute("data-value"));
    this.setState({
      feedback: 1,
      feedbackAct: event.target.getAttribute("data-value"),
    });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const buttonCL = cx(
      "link",
      "pointer",
      "input-reset",
      "ba",
      "br2",
      "b--transparent",
      "ph4",
      "pv3",
      "bg-blue",
      "bg-animate",
      "hover-bg-navy",
      "white",
      "animate",
      "b",
      "mh2",
    );

    return (
      <div>
        <div className={ cx("bb", "bt", "b--scala-5", "pa4", "tc") } >
          {/* Vote & Feedback thanks */}
          <If condition={ this.state.feedbackAct === "1" }>
            <h2>{this.state.feedbackSuccess}</h2>
          </If>

          {/* Feedback Action */}
          <If condition={ (this.state.feedbackAct !== "1") }>
            <h3 className={ cx("ma0", "mb3") }>Was this article helpful?</h3>
            <div className={ cx("flex", "justify-center") }>
              <button data-value={ 1 } onClick={ this.feedbackAct } className={ buttonCL } >
                Yes, thanks!
              </button>
              <button data-value={ 0 } onClick={ this.feedbackAct } className={ buttonCL } >
                Not really
              </button>
            </div>
          </If>

          {/* Feedback Action Details */}
          <If condition={ this.state.feedbackAct === "0" }>
            <div className={ cx("mv3") }>
              <textarea
                placeholder="Sorry about that! How can we make it better?"
                className={ cx("input-reset", "pa3", "w-80", "ba", "b--scala-5", "scala-3") }
              />
              <button data-value={ 1 } onClick={ this.feedbackAct } className={ cx(buttonCL, "mt3") }>Submit feedback</button>
            </div>
          </If>

        </div>
      </div>
    );
  }
}
