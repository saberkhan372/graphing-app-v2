import React from 'react';
import { motion } from 'framer-motion';

const GraphAnimations: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
);

export default GraphAnimations;
