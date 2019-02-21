import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function projects({ data }) {
  return (
    <BackgroundImage
      fluid={data.img.childImageSharp.fluid}
      className="bg-projects"
    >
      <h1>works</h1>
    </BackgroundImage>
  );
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "mountain1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 8000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
