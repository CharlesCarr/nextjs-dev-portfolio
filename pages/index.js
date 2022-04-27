import Head from "next/head";
import classes from "../styles/Home.module.css";
import ParticlesLayout from "../components/ParticlesLayout";

const Home = () => {
  const resumeHandler = () => {
    window.open("/CHARLIECARRxRESUMExAPR22.pdf");
  };

  return (
    <>
      <Head>
        <title>Charlie Carr | Home</title>
        <meta name="description" content="Charlie Carr's web dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticlesLayout></ParticlesLayout>

      <main className={`main ${classes.container}`}>
        <h1 className={classes.name}>CHARLIE CARR.</h1>
        <h2 className={classes.title}>SOFTWARE DEVELOPER.</h2>
        <button className={classes.btn} onClick={resumeHandler}>
          MY RESUME
        </button>
      </main>
    </>
  );
};

export default Home;
