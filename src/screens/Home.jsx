import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import fumoVape from "../assets/images/fumoVape.png";
import gummiesThc from "../assets/images/gummiesThc.png";
import supremeVape from "../assets/images/supremeVape.png";
import SplitText from "../utils/Split3.min.js";

const Home = () => {
  const mainContainer = useRef(null);
  const firstHero = useRef(null);
  const secondHero = useRef(null);
  const thirdHero = useRef(null);
  const firstHeroButton = useRef(null);
  const secondHeroButton = useRef(null);
  const thirdHeroButton = useRef(null);
  const splitProductNameVapes = useRef(null);
  const splitBrandNameVapes = useRef(null);
  const splitThc = useRef(null);
  let index = 30;

  useEffect(() => {
    splitProductNameVapes.current = new SplitText("#productNameVapes", {
      type: "lines",
      linesClass: "lineChild",
    });
    const splitProductNameVapesParent = new SplitText("#productNameVapes", {
      type: "lines",
      linesClass: "lineParent",
    });
    splitBrandNameVapes.current = new SplitText("#brandNameVapes", {
      type: "lines",
      linesClass: "lineChild",
    });
    const splitBrandNameVapesParent = new SplitText("#brandNameVapes", {
      type: "lines",
      linesClass: "lineParent",
    });
  }, []);

  //Set color text of the navbar
  useEffect(() => {
    const navBar = (document.querySelector("#navBarUl").style.color = "#FFF");
  }, []);

  //Every 6 seconds change the hero
  // useEffect(() => {
  //   let animating = 1;
  //   const interval = setInterval(() => {
  //     animating++;
  //     if (animating > 3) animating = 1;
  //     index++;
  //     animateHeroBackground(animating);
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  //Hero animations
  const animateHeroBackground = (animating) => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (animating === 1) {
        index++;
        stopAnyAnimation([secondHero, thirdHero]);

        resetClipPath([secondHero, thirdHero]);

        setElementOnTop(firstHero);

        setButtonsBorders([secondHeroButton, thirdHeroButton], firstHeroButton);

        animateClipPath(tl, firstHero, "#D80608");

        animateFirstHero();
      } else if (animating === 2) {
        index++;

        stopAnyAnimation([firstHero, thirdHero]);

        resetClipPath([firstHero, thirdHero]);

        setElementOnTop(secondHero);

        setButtonsBorders([firstHeroButton, thirdHeroButton], secondHeroButton);

        animateClipPath(tl, secondHero, "#70C626");
      } else if (animating === 3) {
        index++;

        stopAnyAnimation([firstHero, secondHero]);

        resetClipPath([firstHero, secondHero]);

        setElementOnTop(thirdHero);

        setButtonsBorders([firstHeroButton, secondHeroButton], thirdHeroButton);

        animateClipPath(tl, thirdHero, "#505050");
      }
    }, firstHero);

    return () => ctx.revert();
  };
  const stopAnyAnimation = (elements) => {
    elements.forEach((element) => {
      gsap.killTweensOf(element.current);
    });
  };
  const resetClipPath = (elements) => {
    elements.forEach((element) => {
      switch (element) {
        case firstHero:
          gsap.to(firstHero.current, {
            clipPath: "circle(2vw at 80% 90%)",
            duration: 0,
          });
          break;
        case secondHero:
          gsap.to(secondHero.current, {
            clipPath: "circle(2vw at 83% 90%)",
            duration: 0,
          });
          break;
        case thirdHero:
          gsap.to(thirdHero.current, {
            clipPath: "circle(2vw at 86% 90%)",
            duration: 0,
          });
          break;
        default:
          return "l";
      }
    });
  };
  const setElementOnTop = (element) => {
    gsap.to(element.current, {
      zIndex: index,
      duration: 0,
    });
  };
  const setButtonsBorders = (noBorder, border) => {
    noBorder.forEach((element) => {
      gsap.to(element.current, {
        border: 0,
        duration: 0.1,
      });
    });
    gsap.to(border.current, {
      border: "2px solid #FFFF",
      duration: 0.3,
    });
  };
  const animateClipPath = (tl, element, color) => {
    tl.to(element.current, {
      duration: 1.3,
      clipPath: "circle(100% at 50% 50%)",
      ease: "Ease3.out",
    });
    tl.to(
      mainContainer.current,
      {
        backgroundColor: color,
      },
      "-=0.1"
    );
  };
  const animateFirstHero = () => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#categoryVapes",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
        }
      );
      tl.fromTo(
        splitProductNameVapes.current.lines,
        {
          y: 100,
        },
        {
          y: 0,
          duration: 0.2,
        }
      );
      tl.fromTo(
        splitBrandNameVapes.current.lines,
        {
          y: 100,
        },
        {
          y: 0,
          duration: 0.2,
        }
      );
      tl.fromTo(
        "#vapesImage",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
        }
      );
    }, firstHero);
  };

  return (
    <div
      className="w-full h-[100vh] relative overflow-hidden bg-[#D80608]"
      ref={mainContainer}
    >
      {/* ThirdHero */}
      <div
        className="w-full h-full bg-[#505050] absolute"
        style={{
          clipPath: "circle(1vw at 86% 90%)",
        }}
        ref={thirdHero}
      >
        {/* <div className="w-full h-full flex justify-center items-center relative">
          <img src={thc} alt="l" className="z-[99]" />
          <h5 className="text-[20vw] absolute text-center bottom-0 lg:-bottom-[10%] font-extrabold text-white/10">
            THC
          </h5>
        </div> */}
      </div>

      {/* SecondHero */}
      <div
        className="w-full h-full bg-[#70C626] absolute"
        style={{
          clipPath: "circle(2vw at 83% 90%)",
        }}
        ref={secondHero}
      >
        {/* <div className="w-full h-full flex justify-center items-center relative">
          <img src={gummies} alt="l" className="z-[99]" />
          <h5 className="text-[20vw] absolute text-center bottom-0 lg:-bottom-[10%] font-extrabold text-white/10">
            GUMMIES
          </h5>
        </div> */}
      </div>

      {/* FirstHero */}
      <div
        className="w-full h-full bg-[#D80608] absolute"
        style={{
          clipPath: "circle(100vw at 50% 50%)",
        }}
        ref={firstHero}
      >
        <div className="w-full h-full flex justify-end items-center relative flex-col pt-[100px]">
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[35%] z-[30]"
            id="vapesImage"
            src={fumoVape}
            alt="Red vape with strawberries around it"
          />
          <div className="w-full h-[25%] relative pb-[15%]">
            <div className="w-full h-full absolute z-[9999] ">
              <h3
                className="font-calfine text-[5vw] text-center relative text-[#FFD9D9] lg:-bottom-[20%]"
                id="brandNameVapes"
              >
                FUMO
              </h3>
              <h4
                className="font-calfine text-[5vw] text-center text-transparent z-[9999] relative"
                id="productNameVapes"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#FFD9D9",
                }}
              >
                Eternity Strawberry
              </h4>
            </div>
            <h5
              className="text-[20vw] absolute text-center bottom-0 font-extrabold text-white/10 w-full font-calfine leading-[12vw] categoryText"
              id="categoryVapes"
            >
              VAPES
            </h5>
          </div>
        </div>
      </div>

      <button
        className="absolute w-[2vw] h-[2vw] rounded-full bg-[#505050] z-[9999]"
        style={{
          left: "calc(86% - 1vw)",
          top: "calc(90% - 1vw)",
        }}
        onClick={() => {
          animateHeroBackground(3);
        }}
        ref={thirdHeroButton}
      ></button>

      <button
        className="absolute w-[2vw] h-[2vw] rounded-full bg-[#70C626] z-[9999]"
        style={{
          left: "calc(83% - 1vw)",
          top: "calc(90% - 1vw)",
        }}
        onClick={() => {
          animateHeroBackground(2);
        }}
        ref={secondHeroButton}
      ></button>

      <button
        className="absolute w-[2vw] h-[2vw] rounded-full bg-[#D80608] z-[9999] border-white border-[2px]"
        style={{
          left: "calc(80% - 1vw)",
          top: "calc(90% - 1vw)",
        }}
        onClick={() => {
          animateHeroBackground(1);
        }}
        ref={firstHeroButton}
      ></button>
    </div>
  );
};

export default Home;
