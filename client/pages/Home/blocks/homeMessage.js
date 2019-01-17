/* eslint-disable import/extensions, max-len */
import React from "react";

// Modules
import NoScript from "react-noscript";
import { Icon } from "react-fa";
import ImageLoader from "react-imageloader";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

const preloader = () => (
  <img alt="preloader" width="45" height="45" src={ require("assets/loading.svg") } />
);

export default class HomeMessage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tab: "desktop",
    };
  }

  handleChange(value) {
    this.setState({
      tab: value,
    });
  }

  render() {
    return (
      <div className={ cx("bt-ns", "b--scala-7", "ph4") }>
        <Container>
          <div className={ cx("flex", "flex-wrap", "items-center", "flex-row-ns", "flex-column") }>

            <div className={ cx("fl", "w-100", "w-40-ns", "order-2", "order-1-ns", "br-ns", "b--scala-7") }>
              <div className={ cx("tc", "tl-ns", "pa4-ns") }>
                <h2 className={ cx("f2", "body-font", "fw1", "lh-copy") } >
                  <b>TITAN</b> is responsive layout reactjs bundle template for all your needs.
                </h2>
                <p className={ cx("lh-copy", "scala-3") }>
                  You can easily build your site with the help of TITAN in accordance with every device.
                  Lorem ipsum dolor sit amet, consectetur adipisici elit,
                  sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Quisque ut dolor gravida, placerat libero vel, euismod. Paullum deliquit,
                  ponderibus modulisque suis ratio utitur.
                </p>
                <ul className={ cx("list", "pl0") }>
                  <For each="device" index="idx" of={ ["desktop", "laptop", "tablet", "mobile"] }>
                    <li key={ idx } className={ cx("dib", "ph1") }>
                      <a tabIndex={ idx } onClick={ () => this.handleChange(device) } className={ cx("scala-5", "hover-blue", "pointer", "mb2", "ttc") } >
                        <Icon name={ device } size="2x" /> <span className={ cx("dn") }>{device}</span>
                      </a>
                    </li>
                  </For>
                </ul>
              </div>
            </div>

            <div className={ cx("fl", "w-100", "w-60-ns", "order-1", "order-2-ns") }>
              <div className={ cx("ph4", "tc", "center") }>
                <div>
                  <If condition={ this.state.tab === "desktop" }>
                    <NoScript>
                      <div><img alt="Business desktop preview" title="Business desktop preview" src={ require("assets/home/imac@1x.png") } /></div>
                    </NoScript>
                    <ImageLoader
                      src={ require("assets/home/imac@1x.png") }
                      imgProps={ { alt: "Business desktop preview" } }
                      wrapper={ React.DOM.div }
                      preloader={ preloader }
                    >
                      Image load failed!
                    </ImageLoader>
                  </If>
                  <If condition={ this.state.tab === "laptop" }>
                    {/* <div><img alt="Laptop preview" title="Laptop preview" src={require("assets/home/macbook@1x.png")} /></div>*/}
                    <ImageLoader
                      src={ require("assets/home/macbook@1x.png") }
                      imgProps={ { alt: "Business laptop preview" } }
                      wrapper={ React.DOM.div }
                      preloader={ preloader }
                    >
                      Image load failed!
                    </ImageLoader>
                  </If>
                  <If condition={ this.state.tab === "tablet" }>
                    {/* <div><img alt="Tablet preview" title="Tablet preview" src={require("assets/home/iPad@025x.png")} /></div>*/}
                    <ImageLoader
                      src={ require("assets/home/iPad@1x.png") }
                      imgProps={ { alt: "Business tablet preview" } }
                      wrapper={ React.DOM.div }
                      preloader={ preloader }
                    >
                      Image load failed!
                    </ImageLoader>
                  </If>
                  <If condition={ this.state.tab === "mobile" }>
                    {/* <div><img alt="Mobile Preview" title="Mobile preview" src={require("assets/home/mobile@1x.png")} /></div>*/}
                    <ImageLoader
                      src={ require("assets/home/mobile@1x.png") }
                      imgProps={ { alt: "Business mobile preview" } }
                      wrapper={ React.DOM.div }
                      preloader={ preloader }
                    >
                      Image load failed!
                    </ImageLoader>
                  </If>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
