/* eslint-disable import/extensions */
import React from "react";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * HomeNewsletter
 */
export default class HomeNewsletter extends React.Component {

  /**
   * propTypes
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputHandle = this.inputHandle.bind(this);
    this.state = {
      email: "",
      message: false,
    };
  }

  /**
   * inputHandle
   * @param  {Object} event
   */
  inputHandle(event) {
    this.setState({ email: event.target.value });
  }

  /**
   * handleSubmit
   * @param  {Object} event
   */
  handleSubmit(event) {
    this.setState({ message: true });
    event.preventDefault();
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const h5CL = cx("f6", "ma0");
    const h2CL = cx("body-font", "fw3", "f2", "f1-ns", "ma0");
    const formCL = cx("mt4");
    const inputCL = cx("input-reset", "bg-white-50", "scala-1", "ba", "b--transparent", "pa3", "w5", "br1", "br--left");
    const buttonCL = cx("f6", "b", "scala-5", "bg-scala-0", "ba", "b--transparent", "pa3", "br1", "br--right");
    return (
      <div className={ cx("bg-scala-2", "white-80", "pv5", "tc") } >
        <Container>
          <section>
            <header>
              <h5 className={ h5CL }>STAY IN TOUCH</h5>
              <h2 className={ h2CL }>Subscribe to our newsletter</h2>
            </header>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisici elit sed eiusmod tempor.</p>
              <form onSubmit={ this.handleSubmit } className={ formCL }>
                <input value={ this.state.email } onChange={ this.inputHandle } type="email" required={ Boolean(true) } className={ inputCL } placeholder="example@domain.tld" />
                <button className={ buttonCL }>Subscribe</button>
              </form>
              <If condition={ this.state.message }>
                <p>
                  <small>
                    Thank you for the subscription!
                    We will keep you posted on further updates
                  </small>
                </p>
                <p><small>Registered email address: <b>{this.state.email}</b></small></p>
              </If>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
