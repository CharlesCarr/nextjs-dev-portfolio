import Image from "next/image";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import classes from "../../styles/Projects.module.css";

const Project = ({ title, image, description, github, demo, tech }) => {

  const width = useWindowWidth();

  const gitHubClickHandler = () => {
    window.open(github);
  };

  const demoClickHandler = () => {
    window.open(demo);
  };

  return (
      <div className={classes.fullproject}>
        {width >900 ? (<div className={classes.projectleft}>
          <Image
            src={image}
            alt={title}
            className={classes.image}
            width={1353}
            height={737}
          />
        </div>
        ) : null}

        <div className={classes.project}>
          <div className={classes.aboutcontainer}>
            <h3 className={classes.projecttitle}>{title}</h3>

            <p className={classes.description}>{description}</p>
          </div>

          <div className={classes.projectbottom}>
            <div className={classes.btncontainer}>
              <button onClick={gitHubClickHandler} className={classes.btn}>
                GITHUB REPO
              </button>
              <button onClick={demoClickHandler} className={classes.btn}>
                LIVE DEMO
              </button>
            </div>

            <ul className={classes.list}>
              {tech.map((el) => (
                <li className={classes.item} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Project;
