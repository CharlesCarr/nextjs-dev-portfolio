import Head from "next/head";
import { ProjectsData } from "../../components/projects/ProjectsData";
import Project from "../../components/projects/Project";
import classes from "../../styles/Projects.module.css";

const Projects = () => {

  const MoreProjectsHandler = () => {
    window.open("https://github.com/CharlesCarr?tab=repositories&q=&type=&language=&sort=stargazers");
  }

  return (
    <>
      <Head>
        <title>Charlie Carr | Projects</title>
        <meta name="description" content="Charlie Carr's web dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main ${classes.container}`}>
        <h1 className={classes.title}>LATEST PROJECTS</h1>

        <div className={classes.projectscontainer}>
          {ProjectsData.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
              tech={project.tech}
            />
          ))}
        </div>

        <div className={classes.morecontainer}>
          <button className={classes.moreprojects} onClick={MoreProjectsHandler}>
            View Additional Projects
          </button>
        </div>
      </main>
    </>
  );
};

export default Projects;
