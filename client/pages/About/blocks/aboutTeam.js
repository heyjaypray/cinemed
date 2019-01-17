/* eslint-disable max-len */
import React from "react";

// Modules
import ToolTip from "react-portal-tooltip";

// Components
import Container from "components/Container/"; // eslint-disable-line import/extensions

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions
import { shuffle } from "utils/random"; // eslint-disable-line import/extensions

export default class AboutTeam extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.leave = this.leave.bind(this);
    const memberList = [
      { name: "Brandon Gonzalez", job: "Account Service Intern", image: require("assets/avatars/m1.jpg") },
      { name: "Joseph Morris", job: "President & Chief Digital Officer", image: require("assets/avatars/m2.jpg") },
      { name: "James Stidham", job: "Office Manager", image: require("assets/avatars/m3.jpg") },
      // { name: "Antione Johnson", job: "Specialist", image: require("assets/avatars/m4.jpg") },
      // { name: "William Mikkelsen", job: "Strategist", image: require("assets/avatars/m5.jpg") },
      { name: "Rufus White", job: "Cloud Architect", image: require("assets/avatars/m6.jpg") },
      { name: "Michael Cox", job: "Database Administrator", image: require("assets/avatars/m7.jpg") },
      { name: "Ricky Garcia", job: "Front-End Designer", image: require("assets/avatars/m8.jpg") },
      // { name: "Russell Franco", job: "Developer", image: require("assets/avatars/m9.jpg") },
      { name: "Barbara Davis", job: "Media Strategist", image: require("assets/avatars/f1.jpg") },
      { name: "Marianna Kramer", job: "Web Project Manager", image: require("assets/avatars/f2.jpg") },
      { name: "Heather Taylor", job: "Agile Project Manager", image: require("assets/avatars/f3.jpg") },
      { name: "Regina Cao", job: "Computer Graphics Animator", image: require("assets/avatars/f4.jpg") },
      { name: "Karen Reed", job: "Data Architect", image: require("assets/avatars/f5.jpg") },
      { name: "Valerie Mattera", job: "Creative Director", image: require("assets/avatars/f6.jpg") },
      { name: "Elaine Henning", job: "Accounting Director", image: require("assets/avatars/f7.jpg") },
      { name: "Nancy Wright", job: "Account Coordinator", image: require("assets/avatars/f8.jpg") },
      { name: "Susan Etheridge", job: "Senior Art Director", image: require("assets/avatars/f9.jpg") },
    ];
    this.members = shuffle(memberList);
    this.state = {
      show: false,
      parent: "",
      name: "",
      job: "",
    };
  }

  hover(index, event) {
    event.preventDefault();
    // console.log("event", event.target);
    // Team member Hover
    // console.log("Member", index, this.members[index]);
    this.setState({
      show: true,
      parent: `#member_${index}`,
      name: this.members[index].name,
      job: this.members[index].job,
    });
  }

  leave() {
    // Team member leave mouse
    this.setState({
      show: false,
      // parent: "#",
      // name: "",
      // job: "",
    });
  }


  render() {
    const toolTipStyle = {
      style: {
        backgroundColor: "#E5E9F2",
        padding: "1em",
        boxShadow: "1px 1px 5px rgba(0,0,0,.2)",
      },
      arrowStyle: {
        color: "#E5E9F2",
        borderColor: false,
      },
    };
    return (
      <div className={ cx("pv5", "ph3") }>
        <Container className={ cx("ba", "b--scala-7", "relative") }>
          <section>
            <header className={ cx("tc") }>
              <h2>The Team</h2>
              <h4 className={ cx("body-font", "center", "lh-copy") }>
                Meet all our teammates, we develop these wonderful projects together.
              </h4>
            </header>
            <article>
              <div className={ cx("tc", "relative") }>

                <ToolTip
                  active={ this.state.show }
                  position="top"
                  arrow="center"
                  parent={ this.state.parent }
                  style={ toolTipStyle }
                >
                  <div>
                    <h3 className={ cx("ma0") }>{this.state.name}</h3>
                    <p className={ cx("mb0") }>{this.state.job}</p>
                  </div>
                </ToolTip>

                <For each="member" index="idx" of={ this.members } >
                  <img
                    alt="team member"
                    onMouseEnter={ this.hover.bind(this, idx) } // eslint-disable-line react/jsx-no-bind
                    onMouseLeave={ this.leave }
                    key={ idx }
                    id={ `member_${idx}` }
                    className={ cx("w4", "h4", "br3", "ma2", "desaturate", "ba", "b--scala-7") }
                    src={ member.image }
                  />
                </For>
              </div>
            </article>
          </section>
        </Container>
      </div>
    );
  }
}
