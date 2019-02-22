import React from "react";
import SEO from "../components/seo";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/Global/Navbar";

export const query = graphql`
  {
    img: file(relativePath: { eq: "light-mountains.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    projects: allContentfulProject {
      edges {
        node {
          id
          createdAt
          title
          tech
          image {
            fixed(width: 350, height: 400, quality: 100) {
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
    return new Date(b.node.createtdAt) - new Date(a.node.createdAt);
  });
  console.log(order);

  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundImage
        fluid={data.img.childImageSharp.fluid}
        className="bg-projects"
      >
        <div style={{ width: "100%" }}>
          <Navbar />

          <h1 className="text-center">Projects</h1>
          <div className="row">
            {data.projects.edges.map(({ node: project }) => {
              return (
                <div
                  key={project.title}
                  className="col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                >
                  <div className="bg-project-card text-center">
                    <h5>{project.title}</h5>
                    <Img fixed={project.image.fixed} />
                    <div className="my-2 pb-2">
                      <span className="d-none d-sm-none d-md-block">
                        <Link
                          className="btn btn btn-dark mb-3"
                          to={`/projects/${project.title}`}
                        >
                          Details
                        </Link>
                      </span>

                      {project.link ? (
                        <a className="btn btn-success" href={project.link}>
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
    </Layout>
  );
}
