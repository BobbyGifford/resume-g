import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

export default function({ data }) {
  const { title } = data.project;
  const { description } = data.project.description;
  const { fixed } = data.project.image;
  console.log(data);

  return (
    <Layout>
      <BackgroundImage
        fluid={data.img.childImageSharp.fluid}
        className="bg-projects"
      >
        <div className="container text-center">
          <h1>{title}</h1>
          <Img fixed={fixed} />
          <p className="mt-3">
            {data.project.tech.map(skill => {
              return (
                <span key={skill} className="skill-badge ml-3">
                  {skill}
                </span>
              );
            })}
          </p>
          <p className="project-description">
            {description}
            <br />
            <br />
            <Link className="btn btn-info" to="/projects/projects/">
              Back to projects
            </Link>
            {data.project.link ? (
              <a className="btn btn-success ml-3" href={data.project.link}>
                Visit
              </a>
            ) : null}
          </p>
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
        fixed(width: 600, quality: 100) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;
