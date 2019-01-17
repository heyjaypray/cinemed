import React from "react";

// Modules

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions
import config from "config"; // eslint-disable-line import/extensions


const Column = ({ children, logo, company }) => (
  <div className={ cx("fl", "w-100", "w-third-ns", "pa2") }>
    <div className={ cx("bg-white", "pa3", "h-100", "desaturate", "box-shadow", "pointer") }>
      <img alt="Logo" title={ company } height="30" src={ logo } />
      {children}
    </div>
  </div>
);
Column.propTypes = {
  logo: React.PropTypes.string,
  company: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

export default class AboutInvestors extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.investors = [
      "Atlassian",
      "eBay",
      "IBM",
      "Microsoft",
      "Envato",
    ];
  }

  render() {
    return (
      <div className={ cx("pv5", "bg-scala-7") } >
        <Container>
          <article className={ cx("ph2") }>
            <h2>Investors</h2>
            <p className={ cx("lh-copy") }>{config.seo.title}
              is funded by leading investment firms and technology companies, including
              <span className={ cx("mh1") }>{this.investors.join(", ")}</span>
            </p>
            <div className={ cx("flex", "flex-wrap", "justify-center", "content-stretch", "nl2", "nr2") }>
              <Column logo={ require("assets/investors/atlassian.svg") } company="Atlassian">
                <p className={ cx("f6", "scala-3", "lh-copy") }>
                Atlassian, one of the leading software companie...
                Tu quoque, Brute, fili mi, nihil timor populi, nihil!
                Praeterea iter est quasdam res quas ex communi.</p>
              </Column>
              <Column logo={ require("assets/investors/microsoft.svg") } company="Microsoft">
                <p className={ cx("f6", "scala-3", "lh-copy") }>
                Microsoft, one of the leading software companie...
                Lorem ipsum dolor sit amet, consectetur adipisici elit,
                Praeterea iter est quasdam res quas ex communi.
                Inmensae subtilitatis, obscuris et malesuada fames.</p>
              </Column>
              <Column logo={ require("assets/investors/ibm.svg") } company="IBM">
                <p className={ cx("f6", "scala-3", "lh-copy") }>
                IBM, one of the leading software companie...
                Sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </p>
              </Column>
              <Column logo={ require("assets/investors/ebay.svg") } company="Ebay">
                <p className={ cx("f6", "scala-3", "lh-copy") }>
                Ebay, one of the leading software companie...
                Inmensae subtilitatis, obscuris et malesuada fames.</p>
              </Column>
              <Column logo={ require("assets/investors/envato.svg") } company="Envato">
                <p className={ cx("f6", "scala-3", "lh-copy") }>
                Envato, one of the leading software companie...
                Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.
                Quae vero auctorem tractata ab fiducia dicuntur.
                </p>
              </Column>
            </div>
          </article>
        </Container>
      </div>
    );
  }
}
