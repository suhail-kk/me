import React, { useState } from "react";
import { NavItem } from "./display";
import {
  HomeIcon,
  InfoIcon,
  MailIcon,
  SettingsIcon,
  SkillsIcon,
} from "./icons";

export default function Header() {
  
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-row md:flex-col justify-between items-center gap-2 md:gap-4">
      <a href="/#home">
        <NavItem icon={<HomeIcon />} active={active} />
      </a>
      <a href="/#me">
        <NavItem icon={<InfoIcon />} active={active} />
      </a>
      <a href="/#skills">
        <NavItem icon={<SettingsIcon />} active={active} />
      </a>
      <a href="/#works">
        <NavItem icon={<SkillsIcon />} active={active} />
      </a>
      <a href="/#contact">
        <NavItem icon={<MailIcon />} active={active} />
      </a>
    </div>
  );
}
