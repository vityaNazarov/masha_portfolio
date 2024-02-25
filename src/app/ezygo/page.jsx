"use client";

import { motion } from "framer-motion";
import css from "./ezygo.module.css";
import Link from "next/link";
import Image from "next/image";

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

export default function page() {
  return (
    <main>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className={css.ezygo__section}
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
                  src="/desktop/ezygo/ezygo-main.png"
                  alt=""
                  width="602"
                  height="468"
                />
              </motion.div>
              <motion.h2
                // custom={2}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
                className={css.main_img_name}
              >
                EZYGO
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
                  EZYGO is a super-app focused on the European market. Its goal
                  is{" "}
                  <span className={css.about_text_span}>
                    to combine many services in one application
                  </span>{" "}
                  that people use very often &#40;if not daily&#41; and this
                  format simplifies the user&#39;s life.
                </p>
                <p className={css.about_text}>
                  <span className={css.about_text_span}>
                    The MVP of this app
                  </span>{" "}
                  includes such services as food ordering, taxi booking, travel,
                  and food delivery.
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
                  When developing a super app for the European market that
                  includes different services, the main problem was{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    the lack of similar products on the market
                  </span>
                  . European users have a limited choice of super apps that
                  provide more than two services.
                </p>
                <p className={css.problem_and_solution_text}>
                  The goal was{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    to create a unique product
                  </span>{" "}
                  that meets the needs of European users by combining different
                  services in one application, making it particularly attractive
                  in this market.
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
                  The most important aspect in solving the problem was{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    the emphasis on UX methods in design
                  </span>
                  , such as: analysis of this app segment, competitive research,
                  user interviews, interviews analysis.
                </p>
                <p className={css.problem_and_solution_text}>
                  All of these methods helped{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    turn the idea into a functional application
                  </span>{" "}
                  that meets the needs and demands of users in the European
                  field.
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
                      src="/desktop/ezygo/ezygo-role-1.jpg"
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
                      src="/desktop/ezygo/ezygo-role-2.jpg"
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
                      src="/desktop/ezygo/ezygo-role-3.jpg"
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

                <p className={css.product_designer}>Product Designer</p>
              </div>
            </div>

            <div className={css.workflow_stages}>
              <h3 className={css.workflow_title}>Workflow Stages</h3>
              <p className={css.workflow_text}>
                While working on this project, I{" "}
                <span className={css.workflow_text_bold}>
                  emphasized UX research methods to dive deeper into user
                  problems and focus more on solving them
                </span>
                , as the main goal was to create a product that would be not
                only convenient but also{" "}
                <span className={css.workflow_text_bold}>
                  functional to the needs of users
                </span>
                .
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
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Research</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;From the darkness to the vision&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.research_1}
                  alt=""
                  width="804"
                  height="472"
                  src="/desktop/ezygo/research-1.jpg"
                />

                <Image
                  className={css.project_img_24 + " " + css.research_2}
                  alt=""
                  width="252"
                  height="472"
                  src="/desktop/ezygo/research-2.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Underdeveloped niche in the European market,{" "}
                  <span className={css.project_description_bold}>
                    lack of knowledge
                  </span>
                  about the functionality and operation of Super apps in
                  general.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : I studied the super apps of{" "}
                  <span className={css.project_description_bold}>
                    the Asian market
                  </span>
                  , where they are most developed, with all the details and
                  pitfalls. An in-depth analysis helped me{" "}
                  <span className={css.project_description_bold}>
                    to draw conclusions about the main task
                  </span>{" "}
                  that will be faced in the next stages.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>
                  Competitive analysis
                </span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;How good are they? Or...?&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.analysis_1}
                  alt=""
                  width="348"
                  height="227"
                  src="/desktop/ezygo/analysis-1.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.analysis_2}
                  alt=""
                  width="348"
                  height="227"
                  src="/desktop/ezygo/analysis-2.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.analysis_3}
                  alt=""
                  width="348"
                  height="227"
                  src="/desktop/ezygo/analysis-3.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  A{" "}
                  <span className={css.project_description_bold}>
                    small number of competitors in the European market
                  </span>
                  , a certain difficulty in studying the Asian market due to
                  language and other problems.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : To study the competitors, I had to continue studying the
                  Asian digital market. Analyzing competitors{" "}
                  <span className={css.project_description_bold}>
                    helped me understand
                  </span>{" "}
                  not only how extensive a super app could be and the basic
                  needs of users, but also{" "}
                  <span className={css.project_description_bold}>
                    compare and evaluate their apps
                  </span>
                  , drawing conclusions that were important in the following
                  stages.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>
                  User interviews & analysis
                </span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Qualitative is better than quantitative&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.interviews_1}
                  alt=""
                  width="348"
                  height="218"
                  src="/desktop/ezygo/interviews-1.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.interviews_2}
                  alt=""
                  width="348"
                  height="218"
                  src="/desktop/ezygo/interviews-2.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.interviews_3}
                  alt=""
                  width="348"
                  height="218"
                  src="/desktop/ezygo/interviews-3.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Lack of understanding of{" "}
                  <span className={css.project_description_bold}>
                    the needs, mentality, and lifestyle of users in Europe
                  </span>
                  , what their requirements are for the functionality of the
                  super app.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : An important point for me was{" "}
                  <span className={css.project_description_bold}>
                    to talk to people who live in Europe
                  </span>{" "}
                  or travel there frequently and use the services I was going to
                  add to this app, which helped me to{" "}
                  <span className={css.project_description_bold}>
                    better understand the needs of the target audience
                  </span>{" "}
                  for which I was doing this project. The{" "}
                  <span className={css.project_description_bold}>
                    qualitative information
                  </span>
                  I was able to collect became one of their important aspects
                  and the basis for creating the app.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>
                  Building an app architecture
                </span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Design begins with logic&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.architecture_1}
                  alt=""
                  width="342"
                  height="600"
                  src="/desktop/ezygo/architecture-1.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.architecture_2}
                  alt=""
                  width="342"
                  height="600"
                  src="/desktop/ezygo/architecture-2.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.architecture_3}
                  alt=""
                  width="342"
                  height="600"
                  src="/desktop/ezygo/architecture-3.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Create a{" "}
                  <span className={css.project_description_bold}>
                    vision of the user roadmap
                  </span>{" "}
                  in different app scenarios and build a clear and correct
                  architecture.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : It was important for me{" "}
                  <span className={css.project_description_bold}>
                    to work out the architecture of the app in as much detail as
                    possible
                  </span>
                  , so that at this stage I could see how complex the flows were
                  and how I could{" "}
                  <span className={css.project_description_bold}>optimize</span>{" "}
                  them to make the{" "}
                  <span className={css.project_description_bold}>
                    user experience easier
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Benchmark</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Everything is based on patterns&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.benchmark_1}
                  alt=""
                  width="464"
                  height="250"
                  src="/desktop/ezygo/Benchmark-1.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.benchmark_2}
                  alt=""
                  width="598"
                  height="250"
                  src="/desktop/ezygo/Benchmark-2.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  To track the patterns, functionality, and architecture of
                  other similar applications to{" "}
                  <span className={css.project_description_bold}>
                    understand which patterns are used the most
                  </span>
                  , which shows their effectiveness in use.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : An in-depth{" "}
                  <span className={css.project_description_bold}>
                    analysis of patterns and flows
                  </span>{" "}
                  in various similar applications, the analysis and conclusions
                  of which helped to create a vision that{" "}
                  <span className={css.project_description_bold}>
                    some patterns are more effective and usable
                  </span>
                  , and some are already{" "}
                  <span className={css.project_description_bold}>outdated</span>
                  .
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Wireframing</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Build and make decisions iteratively&quot;
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block + " " + css.wireframing_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.wireframing_1}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-1.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.wireframing_2}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-2.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.wireframing_3}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-3.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.wireframing_4}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-4.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.wireframing_5}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-5.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.wireframing_6}
                  alt=""
                  width="160"
                  height="346"
                  src="/desktop/ezygo/Wireframing-6.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  The first{" "}
                  <span className={css.project_description_bold}>
                    visualization of my hypotheses and conclusions
                  </span>{" "}
                  after the previous stages.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : At this stage, I made{" "}
                  <span className={css.project_description_bold}>
                    Hi-Fi wireframes
                  </span>{" "}
                  to better understand the future composition and architecture
                  of the application. This helped me
                  <span className={css.project_description_bold}>
                    to work iteratively
                  </span>{" "}
                  on many decisions regarding
                  <span className={css.project_description_bold}>
                    composition and functionality
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>UI stage</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;The better the design, the more invisible it is&quot;
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_1}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-1.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_2}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-2.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_3}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-3.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_4}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-4.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_5}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-5.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_6}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-6.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_7}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-7.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_8}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-8.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_9}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-9.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_10}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-10.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_11}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-11.jpg"
                />
                <Image
                  className={css.project_img_12 + " " + css.ui_stage_12}
                  alt=""
                  width="157"
                  height="342"
                  src="/desktop/ezygo/ui-stage-12.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Create a{" "}
                  <span className={css.project_description_bold}>
                    modern but minimalistic
                  </span>{" "}
                  and clear visual.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : At the UI stage, I first conducted
                  <span className={css.project_description_bold}>
                    research to understand the trends
                  </span>{" "}
                  in the visual part and settled on a minimalist design that{" "}
                  <span className={css.project_description_bold}>
                    would not overload the user&#39;s focus from the main
                    actions
                  </span>
                  , but would clearly guide the user along the path they choose.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>Prototyping</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Interactivity = logicality&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.prototyping_1}
                  alt=""
                  width="534"
                  height="372"
                  src="/desktop/ezygo/Prototyping-1.jpg"
                />
                <Image
                  className={css.project_img_24 + " " + css.prototyping_2}
                  alt=""
                  width="534"
                  height="372"
                  src="/desktop/ezygo/Prototyping-2.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  To{" "}
                  <span className={css.project_description_bold}>
                    make mockups interactive
                  </span>{" "}
                  to &quot;use&quot; the application and{" "}
                  <span className={css.project_description_bold}>
                    correct logical errors
                  </span>{" "}
                  in the flows.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : While I was making the layout interactive, I saw{" "}
                  <span className={css.project_description_bold}>
                    many errors in the flow
                  </span>
                  , which I corrected later, making the layouts and flows as{" "}
                  <span className={css.project_description_bold}>
                    a whole completely complete and logical
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title}>UI-System</span>
                <span className={css.workflow_stage_subtitle}>
                  &quot;Spending time now to save time in the future&quot;
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_0 + " " + css.ui_system_1}
                  alt=""
                  width="276"
                  height="396"
                  src="/desktop/ezygo/ui-system-1.jpg"
                />
                <Image
                  className={css.project_img_0 + " " + css.ui_system_2}
                  alt=""
                  width="276"
                  height="396"
                  src="/desktop/ezygo/ui-system-2.jpg"
                />
                <div className={css.project_img_doubleblock}>
                  <Image
                    className={css.project_img_0 + " " + css.ui_system_3}
                    alt=""
                    width="254"
                    height="292"
                    src="/desktop/ezygo/ui-system-3.jpg"
                  />
                  <Image
                    className={css.project_img_0 + " " + css.ui_system_4}
                    alt=""
                    width="254"
                    height="97"
                    src="/desktop/ezygo/ui-system-4.jpg"
                  />
                </div>
                <Image
                  className={css.project_img_0 + " " + css.ui_system_5}
                  alt=""
                  width="248"
                  height="397"
                  src="/desktop/ezygo/ui-system-5.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_0 + " " + css.ui_system_6}
                  alt=""
                  width="276"
                  height="197"
                  src="/desktop/ezygo/ui-system-6.jpg"
                />
                <Image
                  className={css.project_img_0 + " " + css.ui_system_7}
                  alt=""
                  width="276"
                  height="197"
                  src="/desktop/ezygo/ui-system-7.jpg"
                />
                <Image
                  className={css.project_img_0 + " " + css.ui_system_8}
                  alt=""
                  width="229"
                  height="197"
                  src="/desktop/ezygo/ui-system-8.jpg"
                />
                <Image
                  className={css.project_img_0 + " " + css.ui_system_9}
                  alt=""
                  width="273"
                  height="197"
                  src="/desktop/ezygo/ui-system-9.jpg"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={topAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Create a{" "}
                  <span className={css.project_description_bold}>
                    structured system with all the components
                  </span>
                  , elements, and styles of this interface.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : I not only collected the components, but also{" "}
                  <span className={css.project_description_bold}>
                    added explanations to each section
                  </span>{" "}
                  to make it more specific and{" "}
                  <span className={css.project_description_bold}>
                    convenient to work
                  </span>{" "}
                  with this document{" "}
                  <span className={css.project_description_bold}>
                    at the development stage
                  </span>
                  .
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
                  <span className={css.about_text_span}>
                    In 4 months, I created a high-quality product
                  </span>{" "}
                  from scratch with the potential for growth.
                </p>
                <p className={css.about_text}>
                  After studying the market and the audience, I realized that
                  <span className={css.about_text_span}>
                    users in Europe are interested in such a product
                  </span>
                  . I adapted payment methods and functionality to European
                  realities, using information from interviews with Europeans.
                </p>
                <p className={css.about_text}>
                  This can{" "}
                  <span className={css.about_text_span}>
                    open up this super app for development in other countries
                  </span>
                  . My result is a product that is ready for implementation and
                  <span className={css.about_text_span}>
                    meets the needs of European users
                  </span>
                  .
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
              <Link href="/maven-group" className={css.footer_link}>
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
