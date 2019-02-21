import React from "react";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";

export const query = graphql`
  {
    img: file(relativePath: { eq: "mountain1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 8000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    projects: allContentfulProject {
      edges {
        node {
          id
          updatedAt
          title
          tech
          image {
            fixed(width: 400, height: 400, quality: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          description {
            description
          }
          link
        }
      }
    }
  }
`;

export default function projects({ data }) {
  const order = data.projects.edges.sort((a, b) => {
    return new Date(b.node.updatedAt) - new Date(a.node.updatedAt);
  });
  console.log(order);

  return (
    <BackgroundImage
      fluid={data.img.childImageSharp.fluid}
      className="bg-projects"
    >
      <div style={{ width: "100%" }}>
        <h1 className="text-center">Projects</h1>
        <div className="row">
          {data.projects.edges.map(({ node: project }) => {
            return (
              <div
                key={project.title}
                className="col-sm-8 col-md-6 col-lg-3 mx-auto my-3"
              >
                <div className="bg-project-card text-center">
                  <h5>{project.title}</h5>
                  <Img fixed={project.image.fixed} />
                  <div className="my-2 pb-2">
                    <Link
                      className="btn btn-dark"
                      to={`/projects/${project.title}`}
                    >
                      Details
                    </Link>
                    {project.link ? (
                      <a className="btn btn-success ml-3" href={project.link}>
                        Visit
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BackgroundImage>
  );
}
