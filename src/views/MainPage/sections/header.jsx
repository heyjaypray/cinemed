import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";
import ParallaxComponent from 'react-parallax-component';


import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
import { Parallax, ParallaxBanner } from "react-parallax";

function HeaderCinemed({ ...props }) {
    const { classes, ...rest } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        // we've set the className to cd-section so we can make smooth scroll to it
        <div className="cd-section" {...rest}>
            <div className={classes.sectionBlank} id="blanksection" />

            {/* HEADER 3 START */}
            <div>


                <Carousel {...settings}>
                    {/* Carousel 1 START */}
                    
                    <div>

                        <div
                            className={classes.pageHeader}
                            style={{ backgroundImage: `url("${dg1}")` }}
                        >


                            <div className={classes.container}>

                                <GridContainer>
                                    <GridItem xs={12} sm={6} md={6} className={classNames(
                                        classes.mlAuto,
                                        classes.mrAuto,
                                        classes.textCenter
                                    )}>


                                        <h1 className={classes.title}>Products</h1>


                                        {/* <h4>
                      Dolce & Gabbana is a luxury Italian fashion house founded
                      in 1985 in Legnano by Italian designers Domenico Dolce and
                      Stefano Gabbana. The two met in Milan in 1980 and designed
                      for the same fashion house.
                    </h4> */}
                                        <br />
                                        {/* <Button color="danger" size="lg">
                      Read more
                    </Button> */}
                                        {/* <Button justIcon color="white" simple>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-get-pocket" />
                    </Button> */}
                                    </GridItem>
                                </GridContainer>

                            </div>
                        </div>
                    </div>

                    {/* Carousel 1 END */}
                    {/* Carousel 2 START */}
                    <div>
                        <div
                            className={classes.pageHeader}
                            style={{ backgroundImage: `url("${dg2}")` }}
                        >
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem
                                        xs={12}
                                        sm={8}
                                        md={8}
                                        className={classNames(
                                            classes.mlAuto,
                                            classes.mrAuto,
                                            classes.textCenter
                                        )}
                                    >
                                        <h1 className={classes.title}>Services</h1>
                                        {/* <h4>
                      Dolce & Gabbana is a luxury Italian fashion house founded
                      in 1985 in Legnano by Italian designers Domenico Dolce and
                      Stefano Gabbana. The two met in Milan in 1980 and designed
                      for the same fashion house.
                    </h4> */}
                                        <br />
                                        {/* <Button color="danger" size="lg">
                      Read more
                    </Button> */}
                                        {/* <h6>Connect with us on:</h6>
                    <div>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div> */}
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </div>
                    </div>
                    {/* Carousel 2 END */}
                    {/* Carousel 3 START */}
                    <div>
                        <div
                            className={classes.pageHeader}
                            style={{ backgroundImage: `url("${dg3}")` }}
                        >
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem
                                        xs={12}
                                        sm={7}
                                        md={7}
                                        className={classNames(
                                            classes.mlAuto,
                                            classes.mrAuto,
                                            classes.textCenter
                                        )}
                                    >
                                        <h1 className={classes.title}>Courses</h1>
                                        {/* <h4>
                      There's no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                    </h4> */}
                                        <br />
                                        {/* <Button color="danger" size="lg">
                      Read more
                    </Button> */}
                                        <div>
                                            {/* <Button color="white" simple size="lg">
                        <Share /> Share Offer
                      </Button>
                      <Button color="danger" size="lg">
                        <ShoppingCart /> Shop now
                      </Button> */}
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </div>
                    </div>
                    {/* Carousel 3 END */}
                </Carousel>

            </div>
            {/* HEADER 3 END */}
        </div>
    );
}

export default withStyles(headersStyle)(HeaderCinemed);
