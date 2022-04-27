import Head from "next/head";
import BioPara from "../components/about/BioPara";
import TechSkills from "../components/about/TechSkills";
import classes from "../styles/About.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Charlie Carr | About</title>
        <meta name="description" content="Charlie Carr's web dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${classes.container}`}>
        <div className={classes.top}>
          <h1 className={classes.title}>2.0 ABOUT</h1>
          <BioPara />
        </div>

        <hr className={classes.divider}></hr>

        <div className={classes.bottom}>
          <h2 className={classes.skillstitle}>TECHNICAL SKILLS</h2>
          <TechSkills />
        </div>
      </main>
    </>
  );
};

export default Home;
