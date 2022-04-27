import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

const Layout = ({ children, router }) => {
  return (
    <div className="App">
      <Navbar />

      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
        transition={{ delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
