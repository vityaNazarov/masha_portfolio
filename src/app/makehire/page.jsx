"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import css from "./makehire.module.css";

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
                transition={{ delay: 0.3, duration: 0.7 }}
                variants={topAnimation}
              >
                <Image
                  src="/desktop/makehire/makehire-main.png"
                  alt=""
                  width="804"
                  height="461"
                />
              </motion.div>

              <motion.h2
                className={css.main_img_name}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
              >
                Makehire.ai
              </motion.h2>
            </div>
            <div className={css.submain_img_block}>
              <motion.p
                className={css.submain_img_name}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
              >
                *The product is under NDA, so it is presented in a limited way
              </motion.p>
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
                  <span className={css.about_text_span}>Makehire.ai</span> is an{" "}
                  <span className={css.about_text_span}>
                    AI-based ATS system
                  </span>{" "}
                  for the hiring process that helps to build high-performing
                  tech teams faster.
                </p>
                <p className={css.about_text}>
                  This is the{" "}
                  <span className={css.about_text_span}>MVP version</span> of
                  the product, which includes many features and functionality
                  &#40;such as{" "}
                  <span className={css.about_text_span}>
                    Intelligent Resume Analysis, AI-Powered Interview Guides,
                    Interview Analysis, Data-Driven Candidate Comparisons,
                    AI-Assisted Hiring Decisions
                  </span>
                  &#41; to effectively close the needs of the target audience.
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
                  To create in the shortest possible time an MVP version of the
                  product, which{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    will be superior in its functionality, visuals and usability
                  </span>{" "}
                  to its competitors and will become{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    the most preferred product in its niche.
                  </span>{" "}
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
                  Creating a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    web-based version
                  </span>{" "}
                  of the product{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    using a design system, studying analytical data
                  </span>{" "}
                  in the product niche{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    to identify missing functionality
                  </span>{" "}
                  for the target audience in similar products.
                </p>
                <p className={css.problem_and_solution_text}>
                  Working out the{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    usability of the product
                  </span>{" "}
                  after studying the competitors, as well as{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    customization of the used design system
                  </span>{" "}
                  to get the best visual result for this project, which{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    will remain clear and functional for users.
                  </span>{" "}
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
                    variants={bottomAnimation}
                    // custom={1}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="680"
                      height="391"
                      src="/desktop/makehire/makehire-role.png"
                    />
                  </motion.li>
                  {/* <motion.li
                    className={css.role_imgs_item}
                    variants={bottomAnimation}
                    // custom={1}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/maven/maven-role-2.png"
                    />
                  </motion.li> */}
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
                The most important point in the development of this product was
                to{" "}
                <span className={css.workflow_text_bold}>
                  in-depth research the niche of AI-based products and products
                  for the recruitment
                </span>{" "}
                and their capabilities. The key to the desired result was a{" "}
                <span className={css.workflow_text_bold}>
                  clear teamwork and close cooperation with all its members
                </span>
                , such as CEO, PM, engineers, etc.
              </p>
              <p className={css.workflow_text}>
                The{" "}
                <span className={css.workflow_text_bold}>
                  iterativeness of the workflow
                </span>{" "}
                on my part, as a designer, brought the team{" "}
                <span className={css.workflow_text_bold}>
                  to the desired outcome faster across all scenarios and the
                  functionality
                </span>{" "}
                in them.
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
                <span className={css.workflow_stage_title_maven}>
                  Onboarding & Product Research
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={
                    css.project_img_24 + " " + css.research_and_moodboard_1
                  }
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-onboarding-1.png"
                />
                <Image
                  className={
                    css.project_img_24 + " " + css.research_and_moodboard_2
                  }
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-onboarding-2.png"
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
                  Since the project was started by another designer, it was
                  necessary to understand what had been done, think{" "}
                  <span className={css.project_description_bold}>
                    how to refine it and create a full-fledged logic of the
                    whole product.
                  </span>{" "}
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Made a{" "}
                  <span className={css.project_description_bold}>
                    detailed breakdown
                  </span>{" "}
                  of the finished small initial part of the product with
                  revisions, detailed{" "}
                  <span className={css.project_description_bold}>
                    discussion with higher management on requirements and
                    product idea
                  </span>
                  . Also analyzed the niche to understand the{" "}
                  <span className={css.project_description_bold}>
                    construction and functionality of AI-based digital products.
                  </span>
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
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Competitive analysis
                </span>
              </motion.div>

              {/* <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.analysis_1}
                  alt=""
                  width="534"
                  height="460"
                  src="/desktop/maven/analysis-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.analysis_2}
                  alt=""
                  width="534"
                  height="460"
                  src="/desktop/maven/analysis-2.png"
                />
              </motion.div> */}
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
                    what functionality direct competitors have
                  </span>
                  , what visual they are using.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Researching and use this products as a user{" "}
                  <span className={css.project_description_bold}>
                    to better understand their approach, communicate with
                    potential users
                  </span>{" "}
                  to understand what they{" "}
                  <span className={css.project_description_bold}>
                    lack in the existing products
                  </span>{" "}
                  on the market.
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
                <span className={css.workflow_stage_title_maven}>
                  Roadmaping, Estimating and Userflows
                </span>
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
                  width="534"
                  height="301"
                  src="/desktop/makehire/makehire-roadmaping-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_1}
                  alt=""
                  width="534"
                  height="301"
                  src="/desktop/makehire/makehire-roadmaping-2.png"
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
                  Give the company an{" "}
                  <span className={css.project_description_bold}>
                    interim job estimate, project work plan
                  </span>
                  and create userflows to{" "}
                  <span className={css.project_description_bold}>
                    define and validate functionality.
                  </span>{" "}
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Creating a project roadmap with timelines, working on
                  userflows to see{" "}
                  <span className={css.project_description_bold}>
                    the scope and complexity of the product.
                  </span>{" "}
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
                <span className={css.workflow_stage_title_maven}>UI stage</span>
              </motion.div>
              <motion.div
                className={css.project_img_block + " " + css.ui_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_1}
                  alt=""
                  width="351"
                  height="229"
                  src="/desktop/makehire/ui-stage-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_2}
                  alt=""
                  width="351"
                  height="229"
                  src="/desktop/makehire/ui-stage-2.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_3}
                  alt=""
                  width="348"
                  height="229"
                  src="/desktop/makehire/ui-stage-3.png"
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
                  To recreate{" "}
                  <span className={css.project_description_bold}>
                    in detail
                  </span>{" "}
                  all the logic and userflows of the product{" "}
                  <span className={css.project_description_bold}>
                    with finished visuals.
                  </span>
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Since the main goal was{" "}
                  <span className={css.project_description_bold}>
                    to finish the MVP version of the product as soon as possible
                  </span>{" "}
                  for the earliest possible market launch - I{" "}
                  <span className={css.project_description_bold}>
                    skipped the Wireframing phase
                  </span>{" "}
                  and immediately started building screens across all flows{" "}
                  <span className={css.project_description_bold}>
                    with visuals
                  </span>
                  . For this purpose I also used the{" "}
                  <span className={css.project_description_bold}>
                    design system
                  </span>
                  , which I{" "}
                  <span className={css.project_description_bold}>
                    customized for the needs of the product.
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
                <span className={css.workflow_stage_title_maven}>
                  UI-System
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block + " " + css.adaptation_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.adaptation_1}
                  alt=""
                  width="1080"
                  height="325"
                  src="/desktop/makehire/ui-system.png"
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
                  The ready-made design system, which was used in this product,{" "}
                  <span className={css.project_description_bold}>
                    did not fully cover the needs of the visual and logical part
                    of the project.
                  </span>
                  .
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  :{" "}
                  <span className={css.project_description_bold}>
                    Customize
                  </span>{" "}
                  the elements of the design system and{" "}
                  <span className={css.project_description_bold}>
                    systematize all elements into a UI-System for future project
                    usability.
                  </span>{" "}
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
                <span className={css.workflow_stage_title_maven}>
                  Creation of documentation (specification)
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.prototyping_1}
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-specification-1.png"
                />
                <Image
                  className={css.project_img_12 + " " + css.prototyping_2}
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-specification-2.png"
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
                  Since the product is complex with a lot of functionality and
                  logic - development needs documentation for the correct
                  product development process.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : A{" "}
                  <span className={css.project_description_bold}>
                    detailed documentation
                  </span>{" "}
                  was made describing{" "}
                  <span className={css.project_description_bold}>
                    all the logic and technical nuances
                  </span>{" "}
                  based on the{" "}
                  <span className={css.project_description_bold}>
                    Tailwind document
                  </span>
                  , which I also{" "}
                  <span className={css.project_description_bold}>
                    customized for this project.
                  </span>
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            {/* <motion.div
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
                <span className={css.workflow_stage_title_maven}>
                  Development stage
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.development_1}
                  alt=""
                  width="1080"
                  height="419"
                  src="/desktop/maven/development-1.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  At this stage,{" "}
                  <span className={css.project_description_bold}>
                    I actively communicated with the developer
                  </span>{" "}
                  and together we solved certain problems and tasks that arose
                  during the creation of the site, so I got a great experience
                  of cooperation with the developer.
                </p>
              </motion.div>
            </motion.div> */}
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
                  <span className={css.about_text_span}>In 3 months</span>,
                  practically from 0, I made an{" "}
                  <span className={css.about_text_span}>
                    MVP version of an AI-based product for the hiring process{" "}
                  </span>{" "}
                  as AI-hiring assistant, which has a{" "}
                  <span className={css.about_text_span}>
                    huge potential for growth and great competitiveness{" "}
                  </span>{" "}
                  among the products of this niche{" "}
                  <span className={css.about_text_span}>
                    due to its functionality
                  </span>
                  .
                </p>

                <p className={css.about_text}>
                  A huge amount of work has been done{" "}
                  <span className={css.about_text_span}>
                    in a multifunctional team, deep analysis
                  </span>{" "}
                  of the niche,{" "}
                  <span className={css.about_text_span}>
                    competitors and users' needs
                  </span>
                  , work on{" "}
                  <span className={css.about_text_span}>
                    usability and visual part{" "}
                  </span>{" "}
                  to create the{" "}
                  <span className={css.about_text_span}>
                    functionality that is not yet available on the market.
                  </span>
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
