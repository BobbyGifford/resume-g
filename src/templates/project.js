import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import Navbar from "../components/Global/Navbar";
import SEO from "../components/seo";

export default function({ data }) {
  const { title } = data.project;
  const { description } = data.project.description;
  const { fluid } = data.project.image;
  console.log(data);

  return (
    <Layout>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

      <BackgroundImage
        fluid={data.img.childImageSharp.fluid}
        className="bg-projects"
      >
        <div style={{ width: "100%" }}>
          <Navbar />
          <div className="container text-center">
            <div className="row">
              <h1 className="col-4 offset-4">{title}</h1>
              <div className="col-8 offset-2">
                <Img fluid={fluid} />
              </div>
              <p className="mt-5">
                {data.project.tech.map(skill => {
                  return (
                    <span key={skill} className="skill-badge ml-3">
                      {skill}
                    </span>
                  );
                })}
              </p>
              <p className="project-description px-3">
                {description}
                <br />
                <br />
                <Link className="btn btn-info" to="/projects/">
                  Back to projects
                </Link>
                {data.project.link ? (
                  <a className="btn btn-success ml-3" href={data.project.link}>
                    Visit
                  </a>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    img: file(relativePath: { eq: "mountain1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 8000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    project: contentfulProject(id: { eq: $id }) {
      title
      tech
      link
      description {
        description
      }
      image {
        fluid(maxWidth: 8000, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
