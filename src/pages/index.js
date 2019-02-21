import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImage
      fluid={data.img.childImageSharp.fluid}
      className="bg-index"
    >
      <div>
        <h1>Bobby's Resume</h1>
        <h4>
          <Link
            className="btn btn-info"
            style={{ marginLeft: "5vw" }}
            to="/projects/projects"
          >
            View Projects
          </Link>
        </h4>
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
  }
`;

export default IndexPage;
