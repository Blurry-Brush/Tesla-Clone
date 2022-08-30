import React from "react";
import Body from "./Body";
import first from "../../assets/M3-Homepage-D.jpg";
import "../../scroll.css";
import { motion } from "framer-motion";

const BodyGroup = () => {
  return (
    <>
      <div className="parent">
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={first} title={first} />
        </motion.div>
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={"../../assets/model-y_R1@2.jpg"} />
        </motion.div>
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={"../../assets/ms-main-hero-desktop.jpg"} />
        </motion.div>
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={"../../assets/MX-Hero-Desktop.jpg"} />
        </motion.div>
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={"../../assets/solar-panel-desktop.jpg"} />
        </motion.div>
        <motion.div
          className="children"
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: false, amount: 1 }}
        >
          <Body bgLink={"../../assets/sr-storm-desktop.png"} />
        </motion.div>
      </div>
    </>
  );
};

export default BodyGroup;
