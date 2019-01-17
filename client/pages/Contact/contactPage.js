/* eslint-disable import/extensions */
import React from "react";

// Modules
import Helmet from "react-helmet";

// Components
// import Container from "components/Container/";
// import Hero from "components/Hero/";

// Utils
import config from "config";
import cx from "utils/styles";

// Contact Page Blocks
import { ContactForm, ContactMap, ContactInfo } from "./blocks/";

/**
 * ContactPage Component
 */
export default class ContactPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.seoTags = {
      title: "Contact us",
      meta: [
        { name: "description", content: "Technical support, Enterprise Services, Purchasing & licensing You can get in touch with us about anything that\"s troubling you." },
        { name: "keywords", content: "support, enterprise services, purchasing, licensing ,technical support, contact, titan, business" },
        { property: "og:title", content: "Contact us" },
        { property: "og:description", content: "Technical support, Enterprise Services, Purchasing & licensing You can get in touch with us about anything that\"s troubling you." },
        { property: "og:image", content: `${config.site.url}${require("assets/about/hero.jpg")}` },
      ],
    };

    this.teamMembers = [
      { avatar: require("assets/avatars/f8.jpg"), name: "Ellen", job: "UX Designer" },
      { avatar: require("assets/avatars/m4.jpg"), name: "Richard", job: "NodeJs Dev" },
      { avatar: require("assets/avatars/f4.jpg"), name: "Laura", job: "QA Specialist" },
    ];

    this.workingHours = [
      { day: "Monday - Friday", time: "9:00 am to 17:00 pm" },
      { day: "Saturday - Sunday", time: "9:00 am to 13:00 pm" },
    ];
  }

  render() {
    return (
      <div>
        <Helmet { ...this.seoTags } />
        { /* <Hero
          headline="1"
          width="mw7"
          title="Get in touch!"
          subtitle=`Technical support, Enterprise Services, Purchasing & Licensing...
          You can get in touch with us about anything that"s troubling you.``
          background={require("assets/contact/hero.jpg")}
          />*/}
        <div className={ cx("cf", "vh-100-ns") }>
          <div className={ cx("cf", "relative", "vh-100-ns", "bg-scala-1", "bg-transparent-ns") }>
            <div style={ { marginTop: "90px" } } className={ cx("absolute-ns", "w-100", "w-40-ns", "pa4", "bg-white-90", "z-1", "right-2-ns", "bottom-2-ns") }>
              <ContactForm />
            </div>
            <div className={ cx("dn", "db-ns", "absolute", "w-100", "h-100-ns", "top-0", "left-0", "z--1") }>
              <ContactMap />
            </div>
          </div>
        </div>
        <ContactInfo
          teamMembers={ this.teamMembers }
          workingHours={ this.workingHours }
          socialMedia={ config.socialMediaSites }
        />
      </div>
    );
  }
}
