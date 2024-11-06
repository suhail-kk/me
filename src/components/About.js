import React from "react";
import { SectionHeading, TextKeyValue, TextWhiteMedium } from "./display";
import { DownloadIcon } from "./icons";
import { Button } from "./input";

export default function About() {
  return (
    <div className="w-ful h-fit flex flex-col gap-4 justify-center items-center padding">
      <div>
        <SectionHeading
          textWhite="about"
          textYellow="me"
          subHead="resume"
          tracking={"tracking-[10px] md:tracking-[20px]"}
        />
      </div>
      <div className="mt-5 md:mt-14 w-full max-w-[1100px] flex sm:flex-row flex-col justify-between">
        <div className="w-full sm:w-[40%]">
          <img
            className="w-full h-[400px] sm:h-[550px] object-cover object-center"
            src="./assets/images/me/me.jpeg"
          />
        </div>
        <div className="w-full sm:w-[50%]">
          <div className="w-full">
            <div className="text-center md:text-left mt-4 md:mb-10">
              <TextWhiteMedium text="WHO AM I" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-6 h-fit">
            <TextKeyValue title="Name" value="Suhail k k" />
            <TextKeyValue title="Email" value="suhailkotta2001@gmail.com" />
            <TextKeyValue title="Nationality" value="Indian" />
            <a
              href="https://www.linkedin.com/in/suhail-kk-8451b420a"
              target="_blank"
            >
              <div className="w-[75%] sm:w-full">
                <TextKeyValue
                  title="Linkedin"
                  value="https://www.linkedin.com/in/suhail-kk-8451b420a"
                />
              </div>
            </a>
            <TextKeyValue title="Experience" value="2.7+ years" />{" "}
            <TextKeyValue title="Completed projects" value="10+" />
          </div>
          <div className="w-full justify-start mt-4 md:mt-8">
            <a
              href="https://drive.google.com/file/d/1T1uP6zdUngsQCrJDHmwGOeGnNnCHk6Gt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button text="DOWNLOAD RESUME" icon={<DownloadIcon />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
