import React, { useEffect, useState } from "react";
import { NavItem } from "./display";
import {
  ArticlesIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  SettingsIcon,
  SkillsIcon,
} from "./icons";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            window.history.replaceState(null, "", `/#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex flex-row md:flex-col justify-between items-center gap-2 md:gap-4">
      <a href="/">
        <NavItem icon={<HomeIcon />} active={activeSection === ""} />
      </a>
      <a href="/#me">
        <NavItem icon={<InfoIcon />} active={activeSection === "me"} />
      </a>
      <a href="/#skills">
        <NavItem icon={<SettingsIcon />} active={activeSection === "skills"} />
      </a>
      <a href="/#works">
        <NavItem icon={<SkillsIcon />} active={activeSection === "works"} />
      </a>
      <a href="/#articles">
        <NavItem
          icon={<ArticlesIcon />}
          active={activeSection === "articles"}
        />
      </a>
      <a href="/#contact">
        <NavItem
          icon={<MailIcon />}
          active={
            activeSection === "contact" ||
            activeSection === "footer" ||
            activeSection === "social-link"
          }
        />
      </a>
    </div>
  );
}
