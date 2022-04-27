import Link from "next/link";
import { HeadIconData } from "./HeadIconData";
import SidebarIcon from "./HeadIcon";
import classes from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.icons}>
        {HeadIconData.map((icon) => (
          <SidebarIcon
            key={icon.alt}
            alt={icon.alt}
            src={icon.image}
            onClick={icon.onClick}
          />
        ))}
      </ul>

      <ul className={classes.navlist}>
        <Link href="/">
          <li className={classes.item}> 1.0 HOME</li>
        </Link>
        <Link href="/about">
          <li className={classes.item}>2.0 ABOUT</li>
        </Link>
        <Link href="/projects">
          <li className={classes.item}>3.0 PROJECTS</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
