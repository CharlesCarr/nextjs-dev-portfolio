import Image from "next/image";
import classes from "../../styles/Navbar.module.css";

const HeadIcon = ({ src, alt, onClick }) => {
  const clickHandler = () => {
    window.open(onClick);
  };

  return (
    <li
      onClick={clickHandler}
      className={classes.item}
    >
      <Image width={22} height={22} src={src} alt={alt}></Image>
    </li>
  );
};

export default HeadIcon;
