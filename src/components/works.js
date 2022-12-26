import React, { useState } from "react";
import { Images } from "../constants/images";
import { Projects } from "../constants/projects";
import { ProjectCard, SectionHeading } from "./display";

export default function Works() {
  const [tab, setTab] = useState("photos");
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 padding">
      <SectionHeading
        textYellow="portfolio"
        subHead="works"
        tracking={"tracking-[25px] md:tracking-[45px]"}
      />
      <div className="w-fit bg-gray-light py-2 px-6 rounded-lg flex justify-center items-center gap-4">
        <p
          className={` cursor-pointer font-semibold hover:text-primaryYellow text-lg ${
            tab === "projects" ? "text-primaryYellow" : "text-white"
          }`}
          onClick={() => setTab("projects")}
        >
          Projects
        </p>
        <p
          className={` cursor-pointer font-semibold hover:text-primaryYellow text-lg ${
            tab === "photos" ? "text-primaryYellow" : "text-white"
          }`}
          onClick={() => setTab("photos")}
        >
          Photos
        </p>
        {/* <p
          className={`cursor-pointer  font-semibold hover:text-primaryYellow text-lg ${
            tab === "shorts" ? "text-primaryYellow" : "text-white"
          }`}
          onClick={() => setTab("shorts")}
        >
          Shorts
        </p> */}
      </div>
      {tab === "projects" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3 sm:gap-y-10">
          {Projects &&
            Projects.map((item, i) => {
              return <ProjectCard item={item} />;
            })}
        </div>
      ) : tab === "photos" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {Images &&
            Images.map((item, i) => {
              return (
                <div className="w-full h-fit">
                  <img
                    className="w-full h-full object-cover image-hover-style"
                    src={item}
                    alt="Image"
                  />
                </div>
              );
            })}
        </div>
      ) : (
        tab === "shorts" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
            {Images &&
              Images.map((item, i) => {
                return (
                  <div className="w-full h-fit">
                    <img
                      className="w-full h-full object-cover"
                      src={item}
                      alt="Image"
                      key={i}
                    />
                  </div>
                );
              })}
          </div>
        )
      )}
    </div>
  );
}
