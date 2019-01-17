import React from "react";
import { Link } from "react-router";

// Utils & Config
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * User Login Form
 */
export default class UserLoginForm extends React.Component {

  /**
   * propTypes
   * @property {String} name - Component name
   * @type {Object}
   */
  static propTypes = {
    name: React.PropTypes.string,
  };

  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.formSubmitButton = this.formSubmitButton.bind(this);
  }

  /**
   * formSubmitButton method
   * @param  {Object} event - Button event
   */
  formSubmitButton(event) { // eslint-disable-line class-methods-use-this
    event.preventDefault();
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const inputCL = cx("input-reset", "pa2", "scala-3", "ba", "b--scala-5", "w-100");
    const buttonCL = cx("input-reset", "pa2", "white", "bg-blue", "hover-bg-dark-blue", "pointer", "ba", "br2", "b--transparent", "w-100");
    const linkCL = cx("fw6", "f6", "link", "scala-2", "hover-blue", "db", "mb1");
    return (
      <div className={ cx("ph4", "pv3", "black-80") }>
        <form className={ cx("measure", "center") }>
          <fieldset id="sign_up" className={ cx("ba", "b--transparent", "ph0", "mh0") }>
            <legend className={ cx("f4", "fw6", "ph0", "mh0", "dn") }>Sign In</legend>
            <div className={ cx("mt3") }>
              <label className={ cx("db", "fw6", "lh-copy", "f6", "mb2") } htmlFor="email-address">Email</label>
              <input placeholder="example@gmail.com" className={ inputCL } type="email" name="email-address" id="email-address" />
            </div>
            <div className={ cx("mv3") }>
              <label className={ cx("db", "fw6", "lh-copy", "f6", "mb2") } htmlFor="password">Password</label>
              <input placeholder="Your super secret password" className={ inputCL } type="password" name="password" id="password" />
            </div>
            <div className={ cx("flex") }>
              <label htmlFor="inputRememberMe" className={ cx("pa0", "ma0", "lh-copy", "f6", "pointer", "switch", "switch-small") }>
                <input id="inputRememberMe" type="checkbox" />
                <div className={ cx("slider", "round") } />
              </label>
              <p className={ cx("f6", "ml2", "dib", "lh-copy", "ma0") }>Remember me</p>
            </div>
          </fieldset>
          <div>
            <button onClick={ this.formSubmitButton } className={ buttonCL }>Sign in</button>
          </div>
          <ul className={ cx("lh-copy", "mt3", "list", "pl0") }>
            <li><Link to="/password" className={ linkCL }>Forgot your password?</Link></li>
            <li><Link to="/register" className={ linkCL }>Create a new account</Link></li>
          </ul>
        </form>
      </div>
    );
  }
}
