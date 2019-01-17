/* eslint-disable import/extensions */
import React from "react";

// Modules
import { Icon } from "react-fa";

// Components
import Container from "components/Container/";

// Utils
import cx from "utils/styles";

/**
 * Stateless Functional WorkingHours Component
 * @param  {Array}  options.data [description]
 * @return {[type]}              [description]
 */
const WorkingHours = ({ data }) => (
  <div>
    <h3 className={ cx("navy") }>Working hours</h3>
    <div>
      <For each="d" index="idx" of={ data }>
        <dl key={ idx }>
          <dt className={ cx("lh-copy") }><b>{d.day}</b></dt>
          <dd className={ cx("lh-copy", "ma0") }>{d.time}</dd>
        </dl>
      </For>
    </div>
  </div>
);

WorkingHours.propTypes = {
  data: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
};
WorkingHours.defaultProps = {
  data: [],
};

const Addresses = () => (
  <div>
    <h3 className={ cx("navy") }>Headquarters</h3>
    <div>
      <p className={ cx("lh-copy") }>
      2289 5th Ave,<br />
      New York, NY, 10037<br />
      +1 212-234-5219</p>
    </div>
  </div>
);

/**
 * Stateless Functional SupportTeam Component
 * @param  {Array}  options.team - Team members data
 * @return {ReactElement} [description]
 */
const SupportTeam = ({ team }) => (
  <div>
    <h3 className={ cx("navy") }>Support Team</h3>
    <ul className={ cx("list", "pl0") }>
      <For each="member" index="idx" of={ team }>
        <li key={ idx } className={ cx("mb2") }>
          <div className={ cx("flex", "items-center") }>
            <img width="48" height="48" className={ cx("br-100") } alt={ `${member.name}-${member.job}` } src={ member.avatar } />
            <div className={ cx("ml2") }>
              <h3 className={ cx("lh-title", "mv0", "f5") }>{member.name}</h3>
              <p className={ cx("lh-copy", "mv0", "f6") }>{member.job}</p>
            </div>
          </div>
        </li>
      </For>
    </ul>
  </div>
);

SupportTeam.propTypes = {
  team: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
};
SupportTeam.defaultProps = {
  team: [],
};

const SocialMedia = ({ links }) => (
  <div>
    <h3 className={ cx("navy") }>Social Media</h3>
    <ul className={ cx("list", "pl0") }>
      <For each="link" index="idx" of={ links }>
        <li key={ idx } className={ cx("lh-copy", "mb2") } >
          <a rel="noopener noreferrer" className={ cx("hover-scala-7", "white") } title={ link.title } href={ link.link } target="_blank">
            <Icon className={ cx("w2") } name={ link.icon } /><span>{link.title}</span>
          </a>
        </li>
      </For>
    </ul>
  </div>
);
SocialMedia.propTypes = {
  links: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
};
SocialMedia.defaultProps = {
  links: [],
};

export default class ContactInfo extends React.Component {

  /**
   * propTypes
   * @property {String} name - Component Name
   * @property {Array} teamMembers - Team member list
   * @property {Array} workingHours - Working hours list
   * @type {Object}
   */
  static propTypes = {
    // name: React.PropTypes.string,
    teamMembers: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
    workingHours: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
    socialMedia: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  };

  /**
   * Default Contact Info Component props
   * @type {Object}
   */
  static defaultProps = {
    teamMembers: [],
    workingHours: [],
    socialMedia: [],
  }

  /**
   * constructor
   * @param  {Object} props
   */
  // constructor(props) {
  //   super(props);
  // }

  /**
   * Contact Info Component Render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className={ cx("bg-blue", "near-white", "pv2", "pv4-ns") }>
        <Container>
          <div className={ cx("flex", "flex-wrap") }>
            <div className={ cx("fl", "w-50", "w-25-ns", "pa3") }><WorkingHours data={ this.props.workingHours } /></div>
            <div className={ cx("fl", "w-50", "w-25-ns", "pa3") }><Addresses /></div>
            <div className={ cx("fl", "w-50", "w-25-ns", "pa3") }><SupportTeam team={ this.props.teamMembers } /></div>
            <div className={ cx("fl", "w-50", "w-25-ns", "pa3") }><SocialMedia links={ this.props.socialMedia } /></div>
          </div>
        </Container>
      </div>
    );
  }
}
