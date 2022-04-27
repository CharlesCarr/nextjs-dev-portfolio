import classes from "../../styles/About.module.css"

const BioPara = () => {
  return (
    <div className={classes.bio}>
      <p className={classes.para}>
        Hi! My name is Charlie Carr and I am a NYC-based software developer who
        is actively pursuing full time employment and open to both remote and
        in-office work.
      </p>
      <p className={classes.para}>
        I have spent my career in tech working in enterprise software for both
        small startups as well as large tech corporations. After starting on the
        sales side of the industry, my passion and curiosity for these products
        fueled my desire to become more technical and attend an in person full
        stack coding bootcamp. Currently, I am focused on front-end web
        development and expanding my knowledge in Next.js and TypeScript.
      </p>
    </div>
  );
};

export default BioPara;
