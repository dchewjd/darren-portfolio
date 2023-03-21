"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { RiLinkedinBoxFill, RiMailFill, RiGithubFill } from "react-icons/ri";
import Header, { handleClickScroll } from "./Header";
import motivateAiScreen from "../../public/motivate-ai-screencap.png";
import darrenPortfolioScreen from "../../public/darren-portfolio-screencap.png";
import { riseWithFade, FadeIn } from "utils/animations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className={`${hamburgerMenuOpen ? "h-screen overflow-hidden" : ""}`}
    >
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        setHamburgerMenuOpen={setHamburgerMenuOpen}
      />
      <div
        className={`bg-gray-800 px-8 sm:px-16 md:px-24 flex flex-col items-center justify-center`}
      >
        <motion.div
          id="hero"
          className="max-w-2xl h-[calc(100vh-5rem)] flex flex-col justify-center gap-1 md:gap-2 my-4"
          variants={riseWithFade}
        >
          <p className="text-orange-400 tracking-normal leading-6 md:leading-10 font-sfmono">
            Hi, my name is
          </p>
          <br />
          <h1 className="text-slate-300 ml-[-4px]">Darren Chew.</h1>
          <h1 className="text-slate-400 ml-[-3px]">
            I craft delightful web experiences.
          </h1>
          <br />
          <p className="text-slate-400 max-w-2xl pb-1 lg:pb-4">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.
          </p>
          <br />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 0.1,
            }}
            className="text-md px-2 pt-3 pb-2 w-1/3 text-orange-400 border rounded-md border-orange-400 justify-items-start hover:bg-orange-400/90 hover:font-medium hover:text-gray-800 "
            onClick={() => {
              setTimeout(() => {
                handleClickScroll("about");
              }, 200);
            }}
          >
            About Me
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          id="about"
          className="max-w-2xl py-12 md:py24"
        >
          <p className="font-sfmono text-orange-400">
            01.{" "}
            <span className="text-3xl font-semibold text-slate-300">
              About Me
            </span>
          </p>
          <br />
          <p>
            Hello! My name is Darren, and I'm a software engineer with 3+ years
            of experience in creating engaging and dynamic web interfaces. My
            passion is crafting digital experiences that are both beautiful and
            functional, and that have a real impact on people's lives.
          </p>
          <br />
          <p>
            I'm constantly striving to stay up-to-date with the latest trends
            and technologies to deliver cutting-edge solutions that meet the
            demands of today's fast-paced digital landscape.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="md:w-2/3 list-disc list-inside grid grid-rows-3 grid-flow-col marker:text-orange-400 gap-1">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
          <br />
          <p>
            At my core, I'm a builder and a creator. I'm passionate about using
            technology to drive success and create meaningful solutions that
            make a difference in people's lives. If you're looking for a skilled
            and dedicated software engineer to bring your digital vision to
            life, I'd love to hear from you.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.2,
            delay: 0,
          }}
          viewport={{ once: true }}
          id="experience"
          className="max-w-2xl py-12 md:py24"
        >
          <p className="font-sfmono text-orange-400">
            02.{" "}
            <span className="text-3xl font-semibold text-slate-300">
              Where I've worked
            </span>
          </p>
          <Tabs.Root
            defaultValue="tab1"
            // orientation="vertical"
            className="m-1"
          >
            <Tabs.List
              aria-label="tabs example"
              className="font-sfmono text-xs sm:text-sm  text-slate-400 my-4 flex w-full h-16"
            >
              <Tabs.Trigger
                value="tab1"
                className="text-center w-1/2 sm:w-40 mb-4 px-6 py-2 pt-1 border-b-2 data-[state=inactive]:border-slate-400/30 data-[state=active]:border-orange-400 data-[state=active]:text-orange-400 hover:bg-slate-600"
              >
                Alpha Impact
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className="text-center w-1/2 sm:w-40 mb-4 px-6 py-2 pt-1 border-b-2 data-[state=inactive]:border-slate-400/30 data-[state=active]:border-orange-400 data-[state=active]:text-orange-400 hover:bg-slate-600"
              >
                NCS
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className="">
              <motion.div variants={FadeIn}>
                <p className="text-slate-300">
                  Software Engineer
                  <span className="text-orange-400"> @ Alpha Impact</span>
                </p>
                <p className="text-sm">November 2021 - February 2022</p>
                <br />
                <ul className="ml-4 list-disc list-outside marker:text-orange-400 gap-1 space-y-4 ">
                  <li>
                    Designed and developed a highly engaging user interface for
                    a rewards and referral program, resulting in a significant
                    increase in the total number of users of the web application
                  </li>
                  <li>
                    Collaborated with cross-functional agile teams to prioritize
                    and scope feature requests, ensuring that the most impactful
                    features were developed first and delivered on time
                  </li>
                  <li>
                    Communicated regularly with internal stakeholders to
                    identify user pain points and developed solutions to
                    optimize the user experience, resulting in increased
                    customer satisfaction and retention rates
                  </li>
                  <li>
                    Technologies used: React (Typescript), Express (Node.js),
                    Spring (Java), JSS, MongoDB , Figma
                  </li>
                </ul>
              </motion.div>
            </Tabs.Content>
            <Tabs.Content value="tab2" className="">
              <motion.div variants={FadeIn}>
                <p className="text-slate-300">
                  Application Consultant
                  <span className="text-orange-400"> @ NCS</span>
                </p>
                <p className="text-sm">November 2018 - October 2021</p>
                <br />
                <ul className="ml-4 list-disc list-outside marker:text-orange-400 gap-1 space-y-4 ">
                  <li>
                    Kickstarted the development of a high-traffic web
                    application as part of Immigration & Checkpoints Authority's
                    Digital Transformation initiative, delivering a reliable and
                    user-friendly platform for millions of users
                  </li>
                  <li>
                    Revamped an outdated web application, improving site
                    performance by 20% and enhancing the user experience through
                    responsive design and streamlined functionality
                  </li>
                  <li>
                    Chaired discussions with stakeholders to identify key
                    requirements and develop tailored solutions to address their
                    specific needs, resulting in increased customer satisfaction
                    and retention
                  </li>
                  <li>
                    Successfully coded, tested, reviewed, and delivered software
                    solutions with a 100% on-time record, meeting or exceeding
                    service level objectives and ensuring high-quality results
                  </li>
                  <li>
                    Optimized web application compatibility and security across
                    multiple platforms, including web and mobile devices,
                    leveraging the latest tools and technologies to enhance
                    performance and mitigate risks.
                  </li>
                  <li>
                    Technologies used: Angular (Typescript), Spring (Java),
                    Sass, Oracle DB
                  </li>
                </ul>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          id="work"
          className="max-w-2xl py-12 md:py24 w-full"
        >
          <p className="font-sfmono text-orange-400">
            03.{" "}
            <span className="text-3xl font-semibold text-slate-300">
              Some Things I've built
            </span>
          </p>
          <motion.div whileHover={{ scale: 1.01, rotate: 1 }} className="my-10">
            <motion.a
              href="https://motivate-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <h4 className="text-slate-300 ">Motivate AI</h4>
              <p>
                A motivational quote generator powered by ChatGPT. Just for
                laughs!
              </p>
              <Image
                src={motivateAiScreen}
                alt="motivate-ai-screencap"
                className=" border-2 border-gray-400 hover:border-orange-400 my-2"
                width={600}
              />
            </motion.a>
            <p className="py-4">
              Technologies used: React, Next.js, Tailwind CSS, OpenAI API,
              Vercel
            </p>
          </motion.div>

          <div className="my-10">
            <h4 className="text-slate-300">Portfolio</h4>
            <p className="">This website. </p>
            <Image
              src={darrenPortfolioScreen}
              alt={"darren-portfolio-screencap"}
              className="border-2 border-gray-400 my-2"
              width={600}
            />
            <p className="py-4">
              Technologies used: React, Next.js, Tailwind CSS, Radix UI, Framer
              Motion, Vercel
            </p>
          </div>
          <div className="my-10">
            <h4 className="text-slate-300">
              More projects brewing in 2023 ...
            </h4>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          id="contact"
          className="max-w-2xl py-12 md:py24"
        >
          <p className="font-sfmono text-orange-400">
            04.{" "}
            <span className="text-3xl font-semibold text-slate-300">
              Get In Touch
            </span>
          </p>
          <p className="my-4 text-justify">
            I’m currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>

          <div className="space-y-2">
            <motion.a
              whileHover={{ scale: 1.01 }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.1,
              }}
              className="hover:text-orange-400 cursor-pointer flex gap-2 w-fit"
              href="https://linkedin.com/in/darren-cjd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.01 }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.1,
              }}
              className="hover:text-orange-400 cursor-pointer flex gap-2 w-fit"
              href="https://github.com/dchewjd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
              Github
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.01 }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.1,
              }}
              className="hover:text-orange-400 cursor-pointer flex gap-2 w-fit"
              href="mailto:darrencjd@gmail.com"
            >
              <RiMailFill />
              Email
            </motion.a>
          </div>
        </motion.div>
        <div className="">
          <p>© 2023 - Darren Chew</p>
        </div>
      </div>
    </motion.div>
  );
}
