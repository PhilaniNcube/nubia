import React from 'react';
import { motion } from 'framer-motion';

const about = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <h1>About</h1>
    </motion.div>
  );
};

export default about;
