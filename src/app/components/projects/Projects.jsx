"use client";

import { motion } from "framer-motion";
import css from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.15 },
  }),
};

const projectsAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

export default function Projects() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.08, once: true }}
      className={css.projects__section}
    >
      <div className={css.container}>
        <div className={css.projects}>
          <h1 className={css.projects__title}>Projects</h1>
          <ul className={css.projects__block}>
            <li className={css.project__block}>
              <div className={css.project__left_block}>
                <div className={css.project__info}>
                  <h2 className={css.project__project_name}>EZYGO</h2>
                  <span className={css.project__project_data}>2024</span>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.08, once: true }}
                  className={css.project__img_block}
                >
                  <ul className={css.project__img_block_list}>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={1}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/eazygo-1.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={1.5}
                      transition={{ delay: 0.6, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/eazygo-2.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={2}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/eazygo-3.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                  </ul>
                </motion.div>
                <div className={css.project__used_tec}>
                  <ul className={css.project__used_tec_list}>
                    <li className={css.project__used_tec_item}>mobile app</li>
                    <li className={css.project__used_tec_item}>MVP</li>
                    <li className={css.project__used_tec_item}>prototypes</li>
                    <li className={css.project__used_tec_item}>superapp</li>
                    <li className={css.project__used_tec_item}>ux research</li>
                    <li className={css.project__used_tec_item}>ui system</li>
                    <li className={css.project__used_tec_item}>workflow</li>
                    <li className={css.project__used_tec_item}>benchmark</li>
                    <li className={css.project__used_tec_item}>architecture</li>
                  </ul>
                </div>
              </div>
              <div className={css.project__right_block}>
                <Link href="/ezygo" className={css.project__right_block_link}>
                  <span className={css.project__right_text}>Overview</span>
                  <svg
                    width="95"
                    height="96"
                    viewBox="0 0 95 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={css.project__right_block_svg}
                  >
                    <path
                      d="M29.6991 58.0625L64.5566 37.9375"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.0654 30.5712L64.5566 37.9374L57.1904 65.4287"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </li>

            <li className={css.project__block_maven}>
              <div className={css.project__right_block_maven}>
                <Link
                  href="/maven-group"
                  className={css.project__right_block_link}
                >
                  <span className={css.project__right_text}>Overview</span>
                  <svg
                    width="95"
                    height="96"
                    viewBox="0 0 95 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={css.project__right_block_svg}
                  >
                    <path
                      d="M29.6991 58.0625L64.5566 37.9375"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.0654 30.5712L64.5566 37.9374L57.1904 65.4287"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className={css.project__left_block_maven}>
                <div className={css.project__info}>
                  <h2 className={css.project__project_name}>Maven</h2>
                  <span className={css.project__project_data}>2023</span>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.08, once: true }}
                  className={css.project__img_block}
                >
                  <ul>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={1}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    >
                      <Image
                        width="548"
                        height="314"
                        src="/desktop/maven.png"
                        alt=""
                        className={css.project__img_maven}
                      />
                    </motion.li>
                  </ul>
                </motion.div>
                <div className={css.project__used_tec}>
                  <ul className={css.project__used_tec_list}>
                    <li className={css.project__used_tec_item_maven}>
                      ux/ui designer
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      website
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      adaptive
                    </li>
                    <li className={css.project__used_tec_item_maven}>MVP</li>
                    <li className={css.project__used_tec_item_maven}>
                      business
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      problem solving
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      outcome
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      english
                    </li>
                    <li className={css.project__used_tec_item_maven}>
                      ukrainian
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={css.project__block}>
              <div className={css.project__left_block}>
                <div className={css.project__info}>
                  <h2 className={css.project__project_name}>VIBOOK</h2>
                  <span className={css.project__project_data}>2023</span>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.08, once: true }}
                  className={css.project__img_block}
                >
                  <ul className={css.project__img_block_list}>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={1}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/vibook-1.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={1.5}
                      transition={{ delay: 0.6, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/vibook-2.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                    <motion.li
                      variants={projectsAnimation}
                      // custom={2}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className={css.project__img_block_item}
                    >
                      <Image
                        width="137"
                        height="300"
                        src="/desktop/vibook-3.png"
                        alt=""
                        className={css.project__img}
                      />
                    </motion.li>
                  </ul>
                </motion.div>
                <div className={css.project__used_tec}>
                  <ul className={css.project__used_tec_list}>
                    <li className={css.project__used_tec_item}>mobile app</li>
                    <li className={css.project__used_tec_item}>teamwork</li>
                    <li className={css.project__used_tec_item}>prototypes</li>
                    <li className={css.project__used_tec_item}>book app</li>
                    <li className={css.project__used_tec_item}>MVP</li>
                    <li className={css.project__used_tec_item}>ux research</li>
                    <li className={css.project__used_tec_item}>analysis</li>
                    <li className={css.project__used_tec_item}>workflow</li>
                    <li className={css.project__used_tec_item}>architecture</li>
                  </ul>
                </div>
              </div>
              <div className={css.project__right_block}>
                <Link href="/vibook" className={css.project__right_block_link}>
                  <span className={css.project__right_text}>Overview</span>
                  <svg
                    width="95"
                    height="96"
                    viewBox="0 0 95 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={css.project__right_block_svg}
                  >
                    <path
                      d="M29.6991 58.0625L64.5566 37.9375"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.0654 30.5712L64.5566 37.9374L57.1904 65.4287"
                      stroke="#FBF8F8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
