/* eslint-disable import/extensions */
import React from "react";

// Modules

// Components
// import Container from "components/Container/";

// Utils
import cx from "utils/styles";

export default class ContactForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.state = {
      limit: 600,
      length: 0,
      send: 0,
    };
  }

  changeHandler(event) {
    this.setState({
      length: event.target.value.length,
    });
  }

  sendForm(event) {
    // console.log("Form Sended Action");
    event.preventDefault();
    this.setState({
      send: 1,
    });
  }

  render() {
    // Shorthand State definitions
    const counterLength = this.state.length;
    const counterLimit = this.state.limit;

    // Styles
    const groupCL = cx("mb3", "w-100");
    const labelCL = cx("f6", "b", "db", "mb2", "w-100");
    const inputCL = cx("input-reset", "fw4", "scala-2", "pa3", "ba", "b--scala-5", "w-100");
    const textareaCL = cx(inputCL, "ba", "b--scala-4", "w-100");
    const buttonCL = cx("animate", "b", "b--transparent", "ba", "bg-animate", "bg-blue", "br2", "hover-bg-navy", "input-reset", "link", "mh2", "ph4", "pointer", "pv3", "white");
    const counterCL = cx("f6", { red: (Number(counterLength) > 500), blue: (Number(counterLength) < 500) });

    return (
      <div className={ cx("cf") }>
        <If condition={ this.state.send }>
          <div className={ cx("bg-blue", "near-white", "pa3", "br3") }>
            <h4 className={ cx("lh-copy", "ma0") }>We will get back to you soon with any update on this. Thank you!</h4>
          </div>
        </If>
        <h1 className={ cx("f4") }>Contact Form</h1>
        <form>
          <div className={ groupCL }>
            <select className={ inputCL }>
              <option>Technical support</option>
              <option>Enterprise Services</option>
              <option>Purchasing & licensing</option>
            </select>
          </div>
          <div className={ groupCL }>
            <label htmlFor="inputName" className={ labelCL }>Name *</label>
            <input id="inputName" type="text" className={ inputCL } placeholder="Your Name" />
          </div>
          <div className={ groupCL }>
            <label htmlFor="email" className={ labelCL } >Email Address *</label>
            <input id="email" type="email" className={ inputCL } placeholder="You Email Address" />
          </div>
          <div className={ groupCL }>
            <label htmlFor="message" className={ labelCL }>Message *</label>
            <textarea id="message" onChange={ this.changeHandler } placeholder="Your Message" className={ textareaCL } rows="3" />
            <span className={ counterCL }>
              {`${counterLength}/${counterLimit}`}
            </span>
          </div>
          <div className={ cx("tr") } >
            <button onClick={ this.sendForm } type="submit" className={ buttonCL }>Send</button>
          </div>
        </form>
      </div>
    );
  }
}
