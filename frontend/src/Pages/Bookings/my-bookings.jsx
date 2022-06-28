import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./style.css";
import { Box } from "@chakra-ui/react";
const MyBookings = () => {
  function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div className="avatar" layout />
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }

  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" />
        <div className="row" />
        <div className="row" />
      </motion.div>
    );
  }

  const items = [0, 1, 2];
  return (
    <Box className="w-full p-10 mobile:p-4 flex justify-center">
      <Box className="w-1/2 mobile:w-full bg-red-100 table-data">
        <AnimateSharedLayout>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            {items.map((item) => (
              <Item key={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </Box>
    </Box>
  );
};

export { MyBookings };
