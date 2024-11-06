import React from "react";
import {
  ContactIconAndValue,
  SectionHeading,
  TextWhiteMedium,
} from "./display";
import { CallIconYellow, MailIconYellow, SendIcon } from "./icons";
import { Button, InputField, TextArea } from "./input";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjerkdw");
  if (state.succeeded) {
    toast.success("Form submitted successfully");
  }
  return (
    <div className="flex flex-col h-fit md:h-fit justify-center items-center gap-10 padding">
      <SectionHeading
        textWhite="get in"
        textYellow="touch"
        subHead="connect"
        tracking={"tracking-[15px] sm:tracking-[23px]"}
      />
      <div className="w-full max-w-[1100px] relative flex flex-1  flex-col md:flex-row justify-between gap-10">
        <div className="w-full h-full absolute top-0 right-0" />
        <div className="flex flex-col w-fit sm:w-[40%] gap-4">
          <div className="w-fit">
            <TextWhiteMedium text="Dont be Shy !" />
          </div>
          <p className="text-white font-medium text-base md:text-lg">
            Have a question? I&apos;d love to hear from you!
          </p>
          <div>
            {" "}
            <ContactIconAndValue
              icon={<MailIconYellow />}
              title="Mail me"
              value={"suhailkotta2001@gmail.com"}
            />
          </div>
          <div>
            <ContactIconAndValue
              icon={<CallIconYellow />}
              title="Call me"
              value={"+91 9745874906 / +91 7034823906"}
            />
          </div>
        </div>
        <div className="flex flex-col z-50 w-full sm:w-[50%]">
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://formspree.io/f/xbjerkdw"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <InputField placeholder="First name" id="fname" name="fname" />
              <ValidationError
                prefix="First name"
                field="fname"
                errors={state.errors}
              />
              <InputField placeholder="Last name" id="lname" name="lname" />
              <ValidationError
                prefix="Last name"
                field="fname"
                errors={state.errors}
              />
            </div>
            <div className="mt-4">
              <InputField
                placeholder="Your subject"
                id="subject"
                name="subject"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="mt-4">
              <TextArea
                placeholder="Your message..."
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="mt-8">
              <Button type="submit" text="SEND MESSAGE" icon={<SendIcon />} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
