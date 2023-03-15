"use client";

import React, { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

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
    setHamburgerMenuOpen((prev) => !prev);
    handleClickScroll(id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    console.log("hamburgerMenuOpen", hamburgerMenuOpen);
  }, [hamburgerMenuOpen]);

  return (
    <nav
      className={`${
        visible ? "top-0" : ""
      } bg-gray-800 sticky flex flex-row justify-between`}
    >
      <a
        href="/"
        className="mx-8 my-4 w-fit text-orange-400 font-serif text-5xl flex justify-start"
      >
        D
      </a>
      {/* desktop nav */}
      <div className="font-sfmono text-sm hidden md:visible md:flex justify-end">
        <button
          onClick={() => handleClickScroll("about")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">01.</span> About
        </button>
        <button
          onClick={() => handleClickScroll("experience")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">02.</span> Experience
        </button>
        <button
          onClick={() => handleClickScroll("work")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">03.</span> Work
        </button>
        <button
          onClick={() => handleClickScroll("contact")}
          className="px-8 py-6 min-w-fit text-slate-300 hover:text-orange-400"
        >
          <span className="text-orange-400">04.</span> Contact
        </button>
      </div>
      {/* mobile nav */}
      <div className="my-5 mr-12 md:hidden flex justify-center z-10 cursor-pointer ">
        <RiMenu3Fill
          onClick={() => setHamburgerMenuOpen((prev) => !prev)}
          size="2.5rem"
          className={`text-slate-400 ${
            hamburgerMenuOpen ? "hidden" : "absolute"
          }`}
        />
        <RiCloseFill
          size="2.5rem"
          onClick={() => setHamburgerMenuOpen((prev) => !prev)}
          className={`text-slate-400 ${hamburgerMenuOpen ? "fixed" : "hidden"}`}
        />
      </div>
      <div
        className={`bg-gray-800 w-full h-full flex flex-col gap-16 justify-center ${
          hamburgerMenuOpen
            ? "fixed overflow-hidden overscroll-contain"
            : "hidden"
        }`}
      >
        <a
          onClick={() => {
            handleHamburgerClickScroll("about");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          01. About
        </a>
        <a
          onClick={() => {
            handleHamburgerClickScroll("experience");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          02. Experience
        </a>
        <a
          onClick={() => {
            handleHamburgerClickScroll("work");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          03. Work
        </a>
        <a
          onClick={() => {
            handleHamburgerClickScroll("contact");
          }}
          className="place-self-center cursor-pointer text-2xl"
        >
          04. Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
