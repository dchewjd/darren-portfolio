"use client";

import React, { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

export const handleClickScroll = (id: string) => {
  console.log("scrolling to", id);
  const element = document.getElementById(id);
  const headerOffset = 80;
  const elementPosition = element?.getBoundingClientRect().top;
  let offsetPosition = 0;
  if (elementPosition) {
    offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  }
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Header = ({ hamburgerMenuOpen, setHamburgerMenuOpen }: any) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hamburgerId, setHamburgerId] = useState("");
  const [mobileScrollPosition, setMobileScrollPosition] = useState(0);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleHamburgerClickScroll = (id: string) => {
    setHamburgerMenuOpen((prev: any) => !prev);
    setScroll(true);
    setHamburgerId(id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    console.log("hamburgerMenuOpen", hamburgerMenuOpen);
    if (!hamburgerMenuOpen) {
      if (!scroll) {
        window.scrollTo(0, mobileScrollPosition);
      } else {
        handleClickScroll(hamburgerId);
      }
    }
  }, [hamburgerMenuOpen]);

  return (
    <motion.nav
      className={`${
        visible ? "top-0" : ""
      } bg-gray-800 sticky flex flex-row justify-between shadow-sm shadow-gray-600 z-10`}
    >
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        href="/"
        className="mx-8 my-4 w-fit text-orange-400 font-serif text-5xl flex justify-start"
      >
        D
      </motion.a>
      {/* desktop nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-sfmono text-sm hidden md:visible md:flex justify-end mr-2"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.1,
          }}
          onClick={() => handleClickScroll("about")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">01.</span> About
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.1,
          }}
          onClick={() => handleClickScroll("experience")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">02.</span> Experience
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.1,
          }}
          onClick={() => handleClickScroll("work")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">03.</span> Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.1,
          }}
          onClick={() => handleClickScroll("contact")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">04.</span> Contact
        </motion.button>
      </motion.div>

      {/* mobile nav */}
      <motion.div className="my-5 mr-8 md:hidden flex justify-center z-10 cursor-pointer ">
        <RiMenu3Fill
          onClick={() => {
            setMobileScrollPosition(window.scrollY);
            setHamburgerMenuOpen((prev: any) => !prev);
          }}
          size="2.5rem"
          className={`text-slate-400 ${hamburgerMenuOpen ? "hidden" : ""}`}
        />
        <RiCloseFill
          size="2.5rem"
          onClick={() => {
            setScroll(false);
            setHamburgerMenuOpen((prev: any) => !prev);
          }}
          className={`mr-8 text-slate-400 ${
            hamburgerMenuOpen ? "fixed" : "hidden"
          }`}
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 0.4,
          delay: 0,
        }}
        className={`bg-gray-800 w-full h-full flex flex-col gap-16 justify-center ${
          hamburgerMenuOpen ? "fixed" : "hidden"
        }`}
      >
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.2,
            delay: 0.2,
          }}
          onClick={() => {
            handleHamburgerClickScroll("about");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          01. About
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.2,
            delay: 0.25,
          }}
          onClick={() => {
            handleHamburgerClickScroll("experience");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          02. Experience
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.2,
            delay: 0.3,
          }}
          onClick={() => {
            handleHamburgerClickScroll("work");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          03. Work
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.2,
            delay: 0.35,
          }}
          onClick={() => {
            handleHamburgerClickScroll("contact");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          04. Contact
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Header;
