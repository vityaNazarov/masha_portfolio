"use client";

import { motion } from "framer-motion";
import css from "./Header.module.css";
import Link from "next/link";
import React from "react";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const textOpacity = {
  hidden: {
    // y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    // y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

export default function Header() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={css.header__section}
    >
      <div className={css.container}>
        <header className={css.header}>
          <motion.div
            variants={textAnimation}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={css.header__title_name}
          >
            <span>Mariia Nazarova </span>|<span> Product Designer</span>
          </motion.div>
          <motion.p
            // custom={1}
            variants={textAnimation}
            transition={{ delay: 0.6, duration: 0.7 }}
            className={css.greetings}
          >
            Hi there!
          </motion.p>
          <motion.p
            // custom={2}
            variants={textAnimation}
            transition={{ delay: 0.9, duration: 0.7 }}
            className={css.header__text}
          >
            My goal as a designer is to implement my design thinking into
            digital projects and make them high quality.
          </motion.p>
          <motion.nav
            // custom={4}
            variants={textOpacity}
            transition={{ delay: 1.4, duration: 1.5 }}
          >
            <Link href="/about" className={css.header__btn_about}>
              <span className={css.header__btn_text}>About me</span>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={css.header__btn_svg}
              >
                <path
                  d="M19.7997 38.1271L43.0381 24.7104"
                  stroke="#1E1E1E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7103 19.7996L43.0378 24.7104L38.1269 43.0379"
                  stroke="#1E1E1E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.nav>
        </header>
      </div>
    </motion.section>
  );
}
