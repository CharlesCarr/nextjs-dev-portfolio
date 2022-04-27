import classes from "../../styles/About.module.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const TechSkills = () => {
  const width = useWindowWidth();

  return (
    <div className={classes.listgroup}>
      <ul className={classes.list}>
        {width > 750 ? <li className={classes.topitem}>LANGUAGES</li> : null}
        <li className={classes.item}>HTML5</li>
        <li className={classes.item}>CSS3</li>
        <li className={classes.item}>JavaScript</li>
        <li className={classes.item}>TypeScript</li>
      </ul>

      <ul className={classes.list}>
        {width > 750 ? (
          <li className={classes.topitem}>LIBRARIES/FRAMEWORKS</li>
        ) : null}
        <li className={classes.item}>React</li>
        <li className={classes.item}>Next.js</li>
        <li className={classes.item}>jQuery</li>
        <li className={classes.item}>Framer Motion</li>
      </ul>

      <ul className={classes.list}>
        {width > 750 ? (
          <li className={classes.topitem}>VERSION CONTROL</li>
        ) : null}
        <li className={classes.item}>Git</li>
        <li className={classes.item}>GitHub</li>
      </ul>

      <ul className={classes.list}>
        {width > 750 ? (
          <li className={classes.topitem}>RESPONSIVE DESIGN</li>
        ) : null}
        <li className={classes.item}>Figma</li>
        <li className={classes.item}>Material UI</li>
        <li className={classes.item}>Chakra UI</li>
        <li className={classes.item}>Bootstrap 5</li>
      </ul>
    </div>
  );
};

export default TechSkills;
