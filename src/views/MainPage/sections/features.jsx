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
import InfoArea from "components/InfoArea/InfoArea.jsx";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";

function Features({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
    <div className={classes.sectionBlank} id="blanksection" />
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>Who We Are</h2>
              <h5 className={classes.description}>
              Ciné-Med is a unique medical education company offering a robust blend of products and services to meet the educational needs of healthcare providers for over 30 years. Founded in 1980 with a specific focus on video-based education for surgeons and operating room nurses, we have since evolved to offer event management services, publishing services, marketing services and distribution of video and text based products as well as continuing education for physicians, nurses, and pharmacists.
              </h5>
            </GridItem>
          </GridContainer>
          {/* <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Surgical Training"
                description=" "
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Perioperative Nursing"
                description=" "
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Mutlimedia Services"
                description=" "
                iconColor="danger"
              />
            </GridItem>
          </GridContainer> */}
        </div>
        </div>

    </div>
  );
}

export default withStyles(featuresStyle)(Features);
