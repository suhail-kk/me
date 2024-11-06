import React from "react";
import { SocialLinks, TextWhiteMedium } from "./display";
import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  MailIconBlack,
  WhatsappIcon,
} from "./icons";

export default function SocialMedia() {
  return (
    <div className="flex flex-col h-fit md:h-[40vh] justify-start items-center gap-10 padding">
      <TextWhiteMedium text="Follow Along" />
      <div className="flex justify-between gap-4 sm:gap-10">
        <a
          href="https://instagram.com/_suhail_kk__?igshid=NDk5N2NlZjQ="
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <SocialLinks icon={<InstaIcon />} />
          </div>
        </a>
        <a href="/#" target="_blank" rel="noreferrer">
          <div>
            <SocialLinks bgColor="bg-[#3b5998]" icon={<FacebookIcon />} />
          </div>
        </a>

        <a href="https://wa.me/+919745874906" target="_blank" rel="noreferrer">
          <div>
            <SocialLinks icon={<WhatsappIcon />} />
          </div>
        </a>

        <div
          onClick={() => (window.location = "mailto:suhailkotta2001@gmail.com")}
        >
          <SocialLinks icon={<MailIconBlack />} />
        </div>
        <a href="https://github.com/suhail-kk" target="_blank" rel="noreferrer">
          <div>
            <SocialLinks icon={<GithubIcon />} />
          </div>
        </a>
      </div>
    </div>
  );
}
