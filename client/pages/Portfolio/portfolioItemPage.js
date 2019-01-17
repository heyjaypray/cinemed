/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
import Container from "components/Container/";
import Hero from "components/Hero/";

// Utils
import config from "config";
import cx from "utils/styles";

/**
 * PortfolioItemPage
 */
export default class PortfolioItemPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.seoTags = {
      title: "This is the perfect way to promote your products",
      meta: [
        { name: "description", content: "Present this sample product to your customers in the best possible way. The only thing you need is the TITAN pre-build reactjs template" },
        { name: "keywords", content: "rapidly, prototype, build, deploy, react, website, portfolio" },
        { property: "og:description", content: "Present this sample product to your customers in the best possible way. The only thing you need is the TITAN pre-build reactjs template" },
        { property: "og:title", content: "This is the perfect way to promote all products" },
        { property: "og:image", content: `${config.site.url}${require("assets/portfolio/02.jpg")}` },
      ],
    };
  }

  render() {
    return (
      <div>
        <Helmet { ...this.seoTags } />
        <Hero
          title="Sample Portfolio"
          width="w-100"
          vh="min-vh-100-ns"
          scrollAnimation={ Boolean(true) }
          background={ require("assets/portfolio/02.jpg") }
        />
        <div className={ cx("pv5", "bg-scala-8") }>
          <Container>
            <section className={ cx("center", "tc", "mw8", "xba") }>
              <header>
                <h2 className={ cx("f1", "mb1") }>Sample Portfolio Item</h2>
                <h3 className={ cx("mt0", "scala-4") }>Subtitle or details</h3>
              </header>

              <div className={ cx("cf") }>
                <div className={ cx("fl", "w-100", "w-50-ns", "pa3-ns") }>
                  <img className={ cx("bg-white", "pa2-ns") } alt="Portfolio" src={ require("assets/portfolio/02.jpg") } />
                </div>
                <div className={ cx("fl", "w-100", "w-50-ns", "pa3-ns") }>
                  <img className={ cx("bg-white", "pa2-ns") } alt="Portfolio" src={ require("assets/portfolio/03.jpg") } />
                </div>
              </div>

              <div className={ cx("center", "mw7", "cf") }>
                <p className={ cx("tl", "f4", "lh-copy") }>
                  Quis aute iure reprehenderit in voluptate velit esse.
                  Cum ceteris in veneratione tui montes, nascetur mus.
                  Ullamco laboris nisi ut aliquid ex ea commodi consequat.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                  Non equidem invideo, miror magis posuere velit aliquet.
                  Inmensae subtilitatis, obscuris et malesuada fames.
                  </p>
              </div>

              <div className={ cx("pa4") }>
                <blockquote className={ cx("center", "serif", "fw6", "ml0", "mt0", "pl4", "scala-2", "bl", "bw2", "b--scala-2", "mw7") }>
                  <p className={ cx("f5", "f4-m", "f3-l", "lh-copy", "mt0") }>
                    Discipline in typography is a prime virtue. Individuality
                    must be secured by means that are rational. Distinction
                    needs to be won by simplicity and restraint. It is equally
                    true that these qualities need to be infused wiht a
                    certain spirit and vitality, or they degenerate into
                    dullness and mediocrity.
                  </p>
                  <cite className={ cx("f6", "ttu", "tracked", "fs-normal") }>― Stanley Morison</cite>
                </blockquote>
              </div>

              <div className={ cx("center", "mw7", "cf") }>
                <p className={ cx("tl", "f4", "lh-copy") }>
                  Sed haec quis possit intrepidus aestimare tellus.
                  Integer legentibus erat a ante historiarum dapibus.
                  Unam incolunt Belgae, aliam Aquitani, tertiam.
                  Phasellus laoreet lorem vel dolor tempus vehicula.
                  Salutantibus vitae elit libero, a pharetra augue.
                  Non equidem invideo, miror magis posuere velit aliquet.
                </p>
              </div>

            </section>
          </Container>
        </div>
      </div>
    );
  }
}
