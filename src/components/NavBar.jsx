import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCannabis, FaExclamation } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { gsap } from "gsap";
import { navigateToPage } from "../utils/navigateToPage";
import { styles } from "../utils/styles";
import thcAlert from "../assets/images/thcAlert.svg";
import cartIcon from "../assets/images/cartIcon.svg";
import SplitText from "../utils/Split3.min.js";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const burgerContainer = useRef(null);

  const splitHome = useRef(null);
  const splitVapes = useRef(null);
  const splitParaphernalia = useRef(null);
  const splitThc = useRef(null);
  const splitCart = useRef(null);

  useEffect(() => {
    splitHome.current = new SplitText("#homeItem", {
      type: "lines",
    });
    const splitHomeParent = new SplitText("#homeItem", {
      type: "lines",
      linesClass: "lineParent",
    });
    splitVapes.current = new SplitText("#vapesItem", {
      type: "lines",
    });
    const splitVapesParent = new SplitText("#vapesItem", {
      type: "lines",
      linesClass: "lineParent",
    });
    splitParaphernalia.current = new SplitText("#paraphernaliaItem", {
      type: "lines",
    });
    const splitParaphernaliaParent = new SplitText("#paraphernaliaItem", {
      type: "lines",
      linesClass: "lineParent",
    });
    splitThc.current = new SplitText("#thcItem", {
      type: "lines",
    });
    const splitThcParent = new SplitText("#thcItem", {
      type: "lines",
      linesClass: "lineParent",
    });
    splitCart.current = new SplitText("#cartItem", {
      type: "lines",
    });
    const splitCartParent = new SplitText("#cartItem", {
      type: "lines",
      linesClass: "lineParent",
    });
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
    const tl = gsap.timeline();
    if (!isMenuOpened) {
      animateBurgerOpen(tl);
    } else {
      animateBurgerClose(tl);
    }
  };

  const animateBurgerOpen = (tl) => {
    let ctx = gsap.context(() => {
      tl.to(".topLine", {
        top: "50%",
        duration: 0.3,
        translateY: "-50%",
      });
      tl.to(
        ".bottomLine",
        {
          top: "50%",
          duration: 0.3,
          translateY: "-50%",
        },
        "-=0.3"
      );
      animateMenuOpen();
      tl.to(".topLine", {
        rotate: 45,
        duration: 0.3,
      });
      tl.to(
        ".midLine",
        {
          opacity: 0,
          duration: 0,
        },
        "-=0.3"
      );
      tl.to(
        ".bottomLine",
        {
          rotate: -45,
          duration: 0.3,
        },
        "-=0.3"
      );
    }, burgerContainer);

    return () => ctx.revert();
  };

  const animateMenuOpen = () => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      //Menu Container
      tl.fromTo(
        ".menuContainer",
        {
          clipPath: "circle(100px at 90% 3%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.5,
          ease: "power3.out",
        }
      );

      // Menu Items
      tl.fromTo(
        [
          splitHome.current.lines,
          splitVapes.current.lines,
          splitParaphernalia.current.lines,
          splitThc.current.lines,
          splitCart.current.lines,
        ],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=1"
      );
    }, burgerContainer);
    return () => ctx.revert();
  };

  const animateBurgerClose = (tl) => {
    let ctx = gsap.context(() => {
      tl.to(".topLine", {
        rotate: 0,
        duration: 0.3,
      });
      tl.to(
        ".midLine",
        {
          opacity: 1,
          duration: 0,
        },
        "-=0.3"
      );
      tl.to(
        ".bottomLine",
        {
          rotate: 0,
          duration: 0.3,
        },
        "-=0.3"
      );
      animateMenuClose();
      tl.to(".topLine", {
        top: "10px",
        duration: 0.3,
        translateY: 0,
      });
      tl.to(
        ".bottomLine",
        {
          top: "35px",
          duration: 0.3,
          translateY: 0,
        },
        "-=0.3"
      );
    }, burgerContainer);
    return () => ctx.revert();
  };

  const animateMenuClose = () => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        [
          splitHome.current.lines,
          splitVapes.current.lines,
          splitParaphernalia.current.lines,
          splitThc.current.lines,
          splitCart.current.lines,
        ].reverse(),
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".menuContainer",
        {
          clipPath: "circle(100% at 50% 50%)",
        },
        {
          clipPath: "circle(100px at 90% 3%)",
          duration: 1,
          ease: "power4.out",
        },
        "-=0.1"
      );
    }, burgerContainer);
    return () => ctx.revert();
  };

  return (
    <nav
      className={`md:block w-full absolute top-0 pt-[1rem] items-center justify-end ${styles.paddingX} z-[9999]`}
    >
      {/* Desktop */}
      <ul
        className="hidden md:flex items-center justify-end gap-[20px] text-white text-base mix-blend-difference"
        id="navBarUl"
      >
        <li
          onClick={() => {
            navigateToPage(navigate, "/");
          }}
          className="cursor-pointer"
        >
          Inicio
        </li>
        <li
          onClick={() => {
            navigateToPage(navigate, "/vapes");
          }}
          className="cursor-pointer"
        >
          Vapes
        </li>
        <li
          onClick={() => {
            navigateToPage(navigate, "/paraphermolia");
          }}
          className="cursor-pointer"
        >
          Parafermolia
        </li>
        <li
          className="flex items-center justify-center cursor-pointer"
          onClick={() => {
            navigateToPage(navigate, "/thc");
          }}
        >
          <span>THC</span>
          <img src={thcAlert} alt="THC Alert icon" />
        </li>
        <li>
          <BsCart size={16} color="#FFF" />
        </li>
      </ul>

      {/* Mobile */}
      <div ref={burgerContainer} className="md:hidden">
        <div
          className="bg-white fixed top-0 left-0 w-[100%] h-[80%] px-[30px] py-[100px] menuContainer"
          style={{
            clipPath: "circle(100px at 90% 3%)",
          }}
        >
          {/* Burger Icon */}
          <div
            className="BurguerMenu absolute w-[50px] h-[50px] rounded-full left-[85%] top-[3%] md:right-[50px] md:top-[50px] grid place-content-center z-[9999] bg-white"
            onClick={handleMenuClick}
          >
            <span
              className="w-[40px] h-[5px] rounded-[5px] bg-black absolute top-[10px] left-1/2 transform -translate-x-1/2 topLine line"
              style={{ transformOrigin: "center center" }}
            />

            <span className="w-[40px] h-[5px] rounded-[5px] bg-black absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 midLine line" />
            <span
              className="w-[40px] h-[5px] rounded-[5px] bg-black absolute bottom-[10px] left-1/2 trasnform -translate-x-1/2 bottomLine line"
              style={{ transformOrigin: "center center" }}
            />
          </div>

          {/* Menu */}
          <ul className="flex flex-col items-start gap-[30px] text-black text-[20px] font-semibold">
            <li
              className="menuItem"
              id="homeItem"
              onClick={() => {
                navigateToPage(navigate, "/");
              }}
            >
              Inicio
            </li>
            <li
              className="menuItem"
              id="vapesItem"
              onClick={() => {
                navigateToPage(navigate, "/vapes");
              }}
            >
              Vapes
            </li>
            <li
              className="menuItem"
              id="paraphernaliaItem"
              onClick={() => {
                navigateToPage(navigate, "/paraphermolia");
              }}
            >
              Parafermolia
            </li>
            <li
              className="flex items-center justify-center menuItem"
              id="thcItem"
              onClick={() => {
                navigateToPage(navigate, "/thc");
              }}
            >
              <span>THC</span>
              <img src={thcAlert} alt="THC Alert icon" />
            </li>
            <li className="menuItem" id="cartItem">
              <img src={cartIcon} alt="cart icon" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
