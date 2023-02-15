import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import logoSara from "@/assets/logoSara.jpg";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "servicios",
    },
    {
      id: 3,
      link: "portafolio",
    },
    {
      id: 4,
      link: "contacto",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-40 bg-black text-white z-20 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <a
            href="https://www.instagram.com/sarazapata144/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                src={logoSara}
                alt=""
                className="rounded-full object-cover w-40 h-40 shadow-thSecondary hover:shadow-thPrimary duration-300 shadow-xl cursor-pointer"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-thSecondary cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {/* <Link to="">
            <div>
              <img
                src={logoSara}
                alt=""
                className="rounded-full object-cover w-16 h-16 hover:scale-110 duration-300 shadow-lg shadow-thOrange"
              />
            </div>
          </Link> */}
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
