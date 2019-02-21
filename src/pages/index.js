import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";
import Navbar from "../components/Global/Navbar";
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImage
      fluid={data.img.childImageSharp.fluid}
      className="bg-projects"
    >
      <div style={{ width: "100%" }}>
        <Navbar />
        <div className="text-center" style={{ marginTop: "10vh" }}>
          <h1>Bobby's Resume</h1>
          <Img fixed={data.me.childImageSharp.fixed} />
          <br />
          <Link className="btn btn-info" to="/projects/">
            View Projects
          </Link>
          <div className="about-description container mt-5">
            <h3>About Me</h3>
            <p>
              My name is Robert but I go by Bobby. I am a software developer
              currently living in Cupertino across the street from Apple.
            </p>
            <p>
              I started using JavaScript in 2010, slightly before I went to
              college. I immediately fell in love with it. My specialty is in
              web development. Most of my work has been front end, although I
              have worked with full stack and continue to. My specialty is the
              MERN stack, Mongo Express, React, and Node. I am willing and open
              to use any language or framework. My tech stack is always growing.{" "}
            </p>
            <p>
              I am originally from Seattle. I moved to the Bay Area in early
              2017 and have been working in software since. My interests involve
              playing guitar, football (college and NFL), and taking Udemy
              courses. I am constantly taking Udemy courses, it is by far my
              favorite activity.
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
);
export const query = graphql`
  {
    img: file(relativePath: { eq: "alps-cliff.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 8000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    me: file(relativePath: { eq: "profile_pic.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
