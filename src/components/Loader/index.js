import React from "react";
import { StyledLoader } from "../../styles/styles";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-10, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.7,
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
};

const Loader = () => {
  return (
    <StyledLoader
      variants={loaderVariants}
      animate="animationOne"
      initial="initial"
    ></StyledLoader>
  );
};
export default Loader;
