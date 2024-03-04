"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import css from "./vibook.module.css";

const leftAnimation = {
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

const rightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const topAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const bottomAnimation = {
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

export default function page() {
  return (
    <main>
      <motion.section
        className={css.ezygo__section}
        initial="hidden"
        whileInView="visible"
      >
        <div className={css.container}>
          <div className={css.ezygo}>
            <motion.div
              // custom={3}
              transition={{ delay: 0.9, duration: 0.7 }}
              variants={leftAnimation}
            >
              <Link href="/" className={css.link_back}>
                <svg
                  className={css.link_back_svg}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L19 12"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={css.link_back_text}>Homepage</span>
              </Link>
            </motion.div>
            <div className={css.main_img_block}>
              <motion.div
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
                variants={topAnimation}
              >
                <Image
                  src="/desktop/vibook/vibook-main.png"
                  alt=""
                  width="600"
                  height="468"
                />
              </motion.div>
              <motion.h2
                className={css.main_img_name}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
              >
                VIBOOK
              </motion.h2>
            </div>
            <div className={css.about}>
              <div className={css.about_title_block}>
                <h3 className={css.about_title}>About</h3>
                <svg
                  className={css.about_title_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={css.about_text_block}>
                <p className={css.about_text}>
                  VIBOOK is{" "}
                  <span className={css.about_text_span}>
                    a cross-platform app
                  </span>{" "}
                  where{" "}
                  <span className={css.about_text_span}>
                    you can choose any book
                  </span>{" "}
                  depending on your preferences in the{" "}
                  <span className={css.about_text_span}>genre</span>, the
                  ability to read it{" "}
                  <span className={css.about_text_span}>online/offline</span> or{" "}
                  <span className={css.about_text_span}>
                    listen to it in audiobook
                  </span>{" "}
                  format, choose from{" "}
                  <span className={css.about_text_span}>
                    free and paid books
                  </span>
                  , or <span className={css.about_text_span}>subscribe</span>{" "}
                  and read as much as you want!
                </p>
                <p className={css.about_text}>
                  You can choose a{" "}
                  <span className={css.about_text_span}>child mode</span> for
                  younger users to ensure their{" "}
                  <span className={css.about_text_span}>
                    safe use of the app.
                  </span>
                </p>
              </div>
            </div>
            <div className={css.problem_and_solution}>
              <div className={css.problem_block}>
                <span className={css.problem_title_block}>
                  <h3 className={css.problem_title}>Problem</h3>

                  <svg
                    className={css.problem_title_svg}
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 17.9166L43 68.0833"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p className={css.problem_and_solution_text}>
                  Sometimes a person who likes to read books{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    doesn&#39;t have enough time
                  </span>{" "}
                  for this hobby because, firstly, it is{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    not always possible to buy real books and carry them around
                  </span>
                  , and secondly, a lot of time in everyday life is spent
                  traveling, cooking, etc.
                </p>
              </div>
              <div className={css.solution_block}>
                <span className={css.problem_title_block}>
                  <h3 className={css.problem_title}>Solution</h3>

                  <svg
                    className={css.problem_title_svg}
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 17.9166L43 68.0833"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p className={css.problem_and_solution_text}>
                  A cross-platform app that has a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    wide selection of free and paid books that can be read
                    online or offline, or listened to in audiobook formats
                  </span>
                  . It has a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    wide range of features
                  </span>
                  , including a children&#39;s mode for safe use by children.
                </p>
              </div>
            </div>

            <div className={css.section_role}>
              <motion.div
                className={css.role_imgs}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.08, once: true }}
              >
                <ul className={css.role_imgs_list}>
                  <motion.li
                    className={css.role_imgs_item}
                    variants={topAnimation}
                    // custom={1}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/vibook/role-1.png"
                    />
                  </motion.li>
                  <motion.li
                    className={css.role_imgs_item}
                    variants={topAnimation}
                    // custom={1}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/vibook/role-2.png"
                    />
                  </motion.li>
                  <motion.li
                    className={css.role_imgs_item}
                    variants={topAnimation}
                    // custom={1}
                    transition={{ delay: 0.9, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/vibook/role-3.png"
                    />
                  </motion.li>
                  <motion.li
                    className={css.role_imgs_item}
                    variants={topAnimation}
                    // custom={1}
                    transition={{ delay: 1.2, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/ezygo/ezygo-role-4.jpg"
                    />
                  </motion.li>
                </ul>
              </motion.div>
              <div className={css.role_designer}>
                <span className={css.role}>Role</span>

                <svg
                  className={css.role_designer_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div
                  className={
                    css.product_designer + " " + css.product_designer_none
                  }
                >
                  <p className={css.product_designer_bold}>
                    Lead UX/UI Designer
                  </p>

                  <p className={css.product_designer_small_text}>
                    in the team of 3 person
                  </p>
                </div>
              </div>
            </div>

            <div className={css.workflow_stages}>
              <h3 className={css.workflow_title}>Workflow Stages</h3>
              <p className={css.workflow_text}>
                In this project,{" "}
                <span className={css.workflow_text_bold}>
                  I worked with two designers and took on the role of lead
                  designer
                </span>
                . The most important task was{" "}
                <span className={css.workflow_text_bold}>
                  to distribute the workflows in stages and get a good result
                </span>{" "}
                that would allow the application to have the potential for
                further development.
              </p>

              <svg
                className={css.workflow_svg}
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 17.9166L43 68.0833"
                  stroke="#191919"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                  stroke="#191919"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>
                  Research & Competitive analysis
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.analysis_1}
                  alt=""
                  width="535"
                  height="445"
                  src="/desktop/vibook/analysis-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.analysis_2}
                  alt=""
                  width="535"
                  height="445"
                  src="/desktop/vibook/analysis-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Such applications are quite common on the market, so the{" "}
                  <span className={css.project_description_bold}>
                    main challenge was to understand what we could create that
                    would be more effective and unique in this niche.
                  </span>
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : My team and I not only analyzed the niche and competitors,
                  studying their apps, but also{" "}
                  <span className={css.project_description_bold}>
                    paid attention to user comments and feedback
                  </span>
                  , both positive and negative, and{" "}
                  <span className={css.project_description_bold}>
                    analyzed them to determine what competitors lack and what
                    works well.
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>
                  Building an app architecture
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.architecture_1}
                  alt=""
                  width="527"
                  height="395"
                  src="/desktop/vibook/architecture-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.architecture_2}
                  alt=""
                  width="527"
                  height="395"
                  src="/desktop/vibook/architecture-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  The{" "}
                  <span className={css.project_description_bold}>
                    main difficulty was to work out a login and registration
                  </span>{" "}
                  that would be simple and understandable, as well as{" "}
                  <span className={css.project_description_bold}>
                    to see the structural hierarchy
                  </span>{" "}
                  of the future application.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Thanks to good communication, we were able to analyze these
                  patterns in direct and indirect ocurrencies and{" "}
                  <span className={css.project_description_bold}>
                    built a simple flow
                  </span>{" "}
                  that allowed us to move on to the next stage of work.
                </p>
              </motion.div>
            </motion.div>
            {/* // */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Benchmark</span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.benchmark_1}
                  alt=""
                  width="577"
                  height="349"
                  src="/desktop/vibook/Benchmark-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.benchmark_2}
                  alt=""
                  width="474"
                  height="349"
                  src="/desktop/vibook/Benchmark-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Understand{" "}
                  <span className={css.project_description_bold}>
                    the trends in the pattern, functionality, and visuals
                  </span>{" "}
                  of applications in this particular niche.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : An important aspect of the successful benchmarking in this
                  project was the{" "}
                  <span className={css.project_description_bold}>
                    study of applications from different niches to learn
                    different user flows and patterns
                  </span>
                  , and to understand the quality of the visual part.
                </p>
              </motion.div>
            </motion.div>

            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Wireframing</span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.wireframing_1}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/vibook/Wireframing-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_2}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/vibook/Wireframing-2.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_3}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/vibook/Wireframing-3.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_4}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/vibook/Wireframing-4.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_5}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/vibook/Wireframing-5.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  To build an{" "}
                  <span className={css.project_description_bold}>
                    architecture similar to the final version
                  </span>
                  , to build the consistency of the project.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : When creating the wireframes we chose the{" "}
                  <span className={css.project_description_bold}>
                    Hi-Fi version
                  </span>
                  . We selected a{" "}
                  <span className={css.project_description_bold}>
                    ready-made design system for use in this project
                  </span>{" "}
                  and chose Atomic Web Design System. So{" "}
                  <span className={css.project_description_bold}>
                    building consistency
                  </span>{" "}
                  began at this stage.
                </p>
              </motion.div>
            </motion.div>

            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>UI stage</span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_1}
                  alt=""
                  width="208"
                  height="450"
                  src="/desktop/vibook/ui-stage-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_2}
                  alt=""
                  width="208"
                  height="450"
                  src="/desktop/vibook/ui-stage-2.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_3}
                  alt=""
                  width="208"
                  height="450"
                  src="/desktop/vibook/ui-stage-3.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_4}
                  alt=""
                  width="208"
                  height="450"
                  src="/desktop/vibook/ui-stage-4.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_5}
                  alt=""
                  width="208"
                  height="450"
                  src="/desktop/vibook/ui-stage-5.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Create a modern and bright-feeling visual{" "}
                  <span className={css.project_description_bold}>
                    to translate our tone of voice
                  </span>{" "}
                  to users.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : To achieve this goal, we chose a fairly{" "}
                  <span className={css.project_description_bold}>
                    simple but visually soft font and a fairly bright pink
                    accent color
                  </span>
                  . In the process of working on the visuals, we also decided to
                  create{" "}
                  <span className={css.project_description_bold}>
                    a section with achievements
                  </span>
                  , where 3D illustrations were used, as in other parts of the
                  design, which emphasized the tone of the website and its
                  consistency even more.
                </p>
              </motion.div>
            </motion.div>

            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Prototyping</span>
              </motion.div>
              <motion.div
                className={css.project_img_block_center}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.prototyping_1}
                  alt=""
                  width="758"
                  height="419"
                  src="/desktop/vibook/prototyping.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  To{" "}
                  <span className={css.project_description_bold}>
                    make mockups interactive to &#171;use&#187; the application
                  </span>{" "}
                  and correct logical errors in the flows.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : While I was making the layout interactive, we saw many
                  errors in the flow, which I corrected later, making the
                  layouts and flows as a whole completely{" "}
                  <span className={css.project_description_bold}>
                    complete and logical.
                  </span>
                </p>
              </motion.div>
            </motion.div>

            <div className={css.about}>
              <div className={css.about_title_block}>
                <h3 className={css.about_title}>Outcome</h3>
                <svg
                  className={css.about_title_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={css.about_text_block}>
                <p className={css.about_text}>
                  By taking on the role of lead designer,{" "}
                  <span className={css.about_text_span}>
                    I was able to build a structured workflow and facilitate
                    effective communication within the team.
                  </span>
                </p>
                <p className={css.about_text}>
                  A{" "}
                  <span className={css.about_text_span}>
                    competent division of responsibilities
                  </span>{" "}
                  helped me close work stages quickly, built a{" "}
                  <span className={css.about_text_span}>
                    trusting relationship between me and the team
                  </span>
                  , and led to a good result of work in general.
                </p>
              </div>
            </div>

            <div className={css.footer_links}>
              <Link href="/" className={css.footer_link}>
                <svg
                  className={css.footer_link_svg_left}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L19 12"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={css.footer_link_text}>Homepage</p>
              </Link>
              <Link href="/ezygo" className={css.footer_link}>
                <p className={css.footer_link_text}>Next case</p>
                <svg
                  className={css.footer_link_svg_right}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L19 12"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
