import React from "react";
import { Education } from "../constants/education";
import { Experiance } from "../constants/experiance";
import { ExperianceContent, TextWhiteMedium } from "./display";

export default function Experiances() {
  return (
    <div className="flex flex-col  justify-center h-fit md:h-fit items-center gap-10 padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
        <div className="flex flex-col gap-10">
        <div>
          <TextWhiteMedium text="Experience" />
        </div>
          {Experiance &&
            Experiance.map((item, i) => {
              return <ExperianceContent item={item} key={i} />;
            })}
        </div>
        <div className="flex flex-col mt-10 md:mt-0 gap-10">
          <div>
            <TextWhiteMedium
              text="Education"
            />
          </div>
          {Education &&
            Education.map((item, i) => {
              return <ExperianceContent item={item} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
}
