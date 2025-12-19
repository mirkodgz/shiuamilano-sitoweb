import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.img
                src="/assets/Icono-SHIUA-Milano.svg"
                alt="Shiua Milano Loading"
                className="preloader-logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

export default Preloader;
