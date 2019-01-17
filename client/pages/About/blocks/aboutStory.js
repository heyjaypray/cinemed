import React from "react";

// Modules
import Lightbox from "react-images";

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

/**
 * AboutStory
 */
export default class AboutStory extends React.Component {

  /**
   * propTypes
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
  };

  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.gallery = [
      { src: `${require("assets/about/story.jpg")}`, caption: "The team is working on a new project." },
      { src: `${require("assets/about/hero.jpg")}`, caption: "It was a very productive brainstorm." },
      { src: `${require("assets/about/team.jpg")}`, caption: "All our employees are in the same square." },
    ];

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    };
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  openLight(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div className={ cx("pt5") } >
        <Container>
          <h2 className={ cx("ph2") }>Out Story</h2>
          <div className={ cx("flex", "items-center", "flex-row-ns", "flex-column") }>
            <div className={ cx("fl", "w-100", "w-third-ns", "pa2", "order-2", "order-1-ns") }>
              <p className={ cx("body-font", "measure", "lh-copy") }>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Hi omnes lingua, institutis, legibus inter se differunt. Mercedem aut nummos unde unde extricat, amaras. Salutantibus vitae elit libero, a pharetra augue. Quis aute iure reprehenderit in voluptate velit esse.</p>
            </div>
            <div className={ cx("fl", "w-100", "w-two-thirds-ns", "pa2", "order-1", "order-2-ns") }>
              <Lightbox
                images={ this.gallery }
                isOpen={ this.state.lightboxIsOpen }
                currentImage={ this.state.currentImage }
                onClickPrev={ this.gotoPrevious }
                onClickNext={ this.gotoNext }
                onClose={ this.closeLightbox }
              />
              <For each="item" index="idx" of={ this.gallery } >
                <div key={ idx } className={ cx("fl", "w-third-l", "pa2-ns", { "w-50-m": (String(idx) !== "0") }) } >
                  <a tabIndex={ idx } className={ cx("link", "pointer") } onClick={ e => this.openLight(idx, e) }>
                    <img alt={ item.caption } className={ cx("grow", "br2") } src={ item.src } />
                  </a>
                </div>
              </For>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
