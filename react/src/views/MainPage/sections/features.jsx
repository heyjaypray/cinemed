import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridItemCarousel from "components/Grid/GridItemCarousel.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Input
} from 'reactstrap';

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Carousel from "react-slick";

import cg1 from "assets/img/cinemed/cg1.jpg";
import cg2 from "assets/img/cinemed/1.jpg";
import cg3 from "assets/img/cinemed/2.jpg";
import Accordion from "components/Accordion/Accordion.jsx";
import Collapse from './collapse'

function Features({ ...props }) {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      <div className={classes.features3}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.section} id="carousel">
              <div className={classes.container}>
                <GridContainer>
                  <GridItemCarousel xs={12} sm={10} md={12} className={classes.marginAuto}>
                    {/* <Card> */}
                      <Carousel {...settings}>
                        <div>
                          <img
                            src={cg1}
                            alt="First slide"
                            className="slick-image"
                          />
                          
                        </div>
                        <div>
                          <img
                            src={cg2}
                            alt="Second slide"
                            className="slick-image"
                          />
                          
                        </div>
                        <div>
                          <img
                            src={cg3}
                            alt="Third slide"
                            className="slick-image"
                          />
                          
                        </div>
                      </Carousel>
                    {/* </Card> */}
                  </GridItemCarousel>
                </GridContainer>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h2 className={classes.title}>Who We Are</h2>
            <h5 className={classes.description}>
              Ciné-Med is a unique medical education company offering a robust blend of products and services to meet the educational needs of healthcare providers for over 30 years. Founded in 1980 with a specific focus on video-based education for surgeons and operating room nurses, we have since evolved to offer event management services, publishing services, marketing services and distribution of video and text based products as well as continuing education for physicians, nurses, and pharmacists.
              </h5>
              
              <Collapse />
          </GridItem>
          
                
              

         
        </GridContainer>
      </div>



    </div>
  );
}

export default withStyles(featuresStyle)(Features);



