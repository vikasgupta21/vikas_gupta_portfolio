"use client"
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);


   const [isGifLoaded, setIsGifLoaded] = useState(false);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
                {!isGifLoaded && (       <a href="https://cocktail-webapp-vercel.vercel.app/" target="_blank">
                                         <img
                                         src="/images/coctail.gif"
                                         alt="Loading animation"
                                         className="w-full h-full object-contain"
                                         onLoad={() => setTimeout(() => setIsGifLoaded(true), 13000)}
                                         />
                                         </a>
      )}

      {isGifLoaded && (
        <a href="https://cocktail-webapp-vercel.vercel.app/" target="_blank">
        <img
          src="/images/cocktail.png"
          alt="Cocktail App Interface"
          className="w-full h-full object-contain"
        />
        </a>
      )}
             </div> 
            <div className="text-content">
              <a href="https://cocktail-webapp-vercel.vercel.app/" target="_blank">
              <h2>
                Craft Cocktails Made Beautiful with a Smooth, Interactive Experience Called Velvet Pour
              </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                A modern website powered by Next.js, GSAP, & Tailwind CSS for an immersive, 
                responsive experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://weather-app-main-ashy.vercel.app/" target="blank"> 
                   <img
                      src="/images/weatherApp.png"
                      alt=" The Weather Forecasting Platform"
                    />
                </a>
              </div>
              <a href="https://weather-app-main-ashy.vercel.app/" target="blank" >
              <h2> The Weather Forecasting Platform</h2>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://github.com/vikasgupta21/chat-app">
                <img src="/images/chat-app-img.png" alt="The Smart AI Chat Platform" />
                </a>
              </div>
              <a href="https://github.com/vikasgupta21/chat-app" target="_blank">
              <h2>The Smart AI Chat Platform</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
