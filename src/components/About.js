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
      <div className="w-full">
        <div className="text-center md:text-left mt-4">
          <TextWhiteMedium text="WHO AM I" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
        <TextKeyValue title="Name" value="Suhail k k" />
        <TextKeyValue title="Email" value="suhailkotta2001@gmail.com" />
        <TextKeyValue title="Freelance" value="Available" />
        <TextKeyValue title="Nationality" value="Indian" />
        {/* <a href="https://www.linkedin.com/in/suhail-kk-8451b420a" target="_blank">
          <div className="w-[75%] sm:w-full">
            <TextKeyValue
              title="Linkedin"
              value="https://www.linkedin.com/in/suhail-kk-8451b420a"
            />
          </div>
        </a> */}
        <TextKeyValue title="Experience" value=".08+ years" />{" "}
        <TextKeyValue title="Completed projects" value="07+" />
      </div>
      <div className="w-full justify-start mt-4">
        <a
          href="https://drive.google.com/file/d/18JNZrUsGVdxV1cpRKHCFtKbPWGOGl28i/view?usp=drivesdk"
          target="_blank"
        >
          <Button text="DOWNLOAD CV" icon={<DownloadIcon />} />
        </a>
      </div>
    </div>
  );
}