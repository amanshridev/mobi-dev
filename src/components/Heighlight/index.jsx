import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../../utils";
import Video from "../Video";

const Heighlight = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="heighlight"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-950"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get The Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link text-sm">
              Watch the Film
              <img src={watchImg} className="ml-2" alt="watch" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} className="ml-2" alt="watch" />
            </p>
          </div>
        </div>
        <Video />
      </div>
    </section>
  );
};

export default Heighlight;
