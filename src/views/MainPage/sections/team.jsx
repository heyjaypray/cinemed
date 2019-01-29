import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

function SectionTeams({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>

      {/* Team 4 START */}
      <div
        className={`${classes.team} ${classes.section}`}
        style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>The Executive Team 4</h2>
              <h5 className={classes.descriptionWhite}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile1Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile2Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile4Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Gina Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 4 END */}

    </div>
  );
}

export default withStyles(teamsStyle)(SectionTeams);
