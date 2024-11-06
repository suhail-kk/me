import React from "react";
import { SkillCard, TextWhiteMedium } from "./display";

export default function Skills() {
  const skills = [
    "Next.js",
    "React.js",
    "React Native",
    "Html",
    "CSS",
    "GIT",
    "MongoDB",
    "Bootstrap",
    "MUI",
    "Tailwind css",
    "Javascript",
    "Node js",
    "Express js",
    "Styled-components",
    "Antd",
    "Context API",
    "Slack",
    "Jira",
    "Figma",
    "Adobe Xd",
  ];
  return (
    <div className="w-full flex justify-center p-5 sm:px-20">
      <div className="flex flex-col  justify-center h-fit items-center gap-10  w-full max-w-[1100px]">
        <div>
          <TextWhiteMedium text="What tools do I use in development?" />
        </div>
        <div className="w-full h-full flex flex-wrap gap-6 sm:gap-10 justify-start sm:justify-center">
          {skills &&
            skills.map((item, i) => {
              return <SkillCard title={item} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
}
