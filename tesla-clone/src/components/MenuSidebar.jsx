import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const MenuSidebar = ({ menu, setMenu }) => {
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.4,
            when: "beforeChildren",
          }}
          className={`bg-white h-screen absolute z-20 top-0 right-0 w-1/2 lg:w-1/3`}
        >
          <motion.div
            className="w-fit top-5 absolute right-20"
            whileHover={{ scale: 1.2 }}
            whileTap={{ x: 10, rotate: 360, transition: { duration: 0.7 } }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <AiOutlineClose
              className="cursor-pointer"
              size="30"
              onClick={() => setMenu(!menu)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuSidebar;
