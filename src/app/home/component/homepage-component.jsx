"use client";

import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "../../components/materialUi/materialUi.jsx";
import Link from "next/link";


export default function HomePageComponent() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="bg-[#0F1015] min-h-screen w-screen !overflow-x-hidden">
      <Navigation />
      <div className="w-full !overflow-x-hidden px-4 py-10 bg-[#0F1015] flex flex-col items-center">
        <div>
          <p className="text-[18px] text-shadow text-center">
            Introducing <span className="text-custom-blue">Pai</span>
          </p>
          <p className="max-w-[804px] text-center text-[42px] font-semibold mt-4 lg:text-[54px] lg:leading-[125%] leading-[120%] mb-5">
            Power Simplified, Humanized, and Useful Everyday
          </p>
        </div>
        <Image src="/loading-icon.png" alt="/" width={200} height={200} />
        <p className="max-w-[674px] text-center mt-8 lg:mt-16 text-2xl text-[#eee] font-light">
          Plan Ahead, Minimize Disruptions: Power Outage Insights at Your
          Fingertips
        </p>
        <div className="flex gap-2 items-center mt-10 lg:mt-20 px-3 py-2.5 rounded-[60px] bg-default/5">
          <Image src="/scroll.png" alt="/" width={24} height={24} />
          <p className="uppercase opacity-[64%] text-xs font-medium">
            Scroll to explore
          </p>
        </div>
      </div>
      <div id="explainer-video" className="!overflow-x-hidden w-full">
        <video
          className="h-full w-full rounded-lg hidden lg:block"
          autoPlay
          muted
          loop
        >
          <source src="/desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="h-full w-full rounded-lg block lg:hidden"
          autoPlay
          muted
          loop
        >
          <source src="/mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="carousel"></div>
      <div id="grid" className="py-20">
        <div className="flex flex-col items-center max-w-[623px] mx-auto text-center">
          <div className="relative w-max">
            <Image
              src="/for-everyone.png"
              width={110}
              height={20}
              alt="for everyone"
              className="absolute left-[40%] lg:right-0 lg:left-auto"
            />
            <p className="font-semibold text-[40px] leading-[52px] lg:text-[56px] lg:leading-[64px] mt-2">
              Power on demand
            </p>
          </div>
          <p className="text-white/[56%] mt-4">
            You can access Pai via any device with an internet connection and it
            has been built for all form-factors. So don&apos;t wait any longer
          </p>
        </div>

        <div className="mt-7 lg:mt-10 flex flex-col gap-y-2 lg:grid lg:grid-cols-2">
          <div className="bg-at-home bg-cover bg-no-repeat h-[464px] font-semibold lg:h-[553px] p-4 lg:p-10 flex items-end text-[28px]">
            <p>At Home</p>
          </div>
          <div className="bg-on-the-go bg-cover bg-no-repeat h-[464px] lg:h-[553px] font-semibold p-4 lg:p-10 flex items-end text-[28px]">
            <p>On the go</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mx-auto max-w-[960px] py-16 px-4 gap-10">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl mb-2">
            Still have questions?
          </h1>
          <p className="text-white/95 font-extralight text-[18px]">
            We answered questions so you do not have to ask them.
          </p>
        </div>

        <div>
          <Accordion
            className="py-[20px]"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-white/95 lg:text-xl  font-light hover:text-white"
            >
              <span className="max-w-[302px] lg:max-w-max">
                How does the Power Outage Early Warning System predict when
                power outages will occur?
              </span>
            </AccordionHeader>
            <AccordionBody className="text-base lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatem necessitatibus soluta recusandae illum. Accusamus illum
              magni consequatur libero deleniti itaque aperiam velit, nesciunt
              placeat doloribus accusantium nisi quos non!
            </AccordionBody>
          </Accordion>

          <Accordion
            className="py-[20px]"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-white font-light hover:text-white lg:text-xl"
            >
              <span className="max-w-[302px] lg:max-w-max">
                What kind of notifications will I receive about power outages?
              </span>
            </AccordionHeader>
            <AccordionBody className="text-base lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              accusamus asperiores earum dolore ex, molestias doloremque porro
              eligendi modi enim similique dolorem libero? Impedit sapiente
              adipisci nam ea necessitatibus aliquid?
            </AccordionBody>
          </Accordion>

          <Accordion
            className="py-[20px]"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="text-white font-light hover:text-white lg:text-xl"
            >
              <span className="max-w-[302px] lg:max-w-max">
                How accurate are the outage predictions?
              </span>
            </AccordionHeader>
            <AccordionBody className="text-base lg:text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ad
              quos libero ipsum nisi illo nobis voluptate! Nostrum tempora illo
              quaerat iste officiis praesentium eaque voluptatibus qui,
              molestiae laboriosam voluptate.
            </AccordionBody>
          </Accordion>

          <Accordion
            className="py-[20px]"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="text-white font-light hover:text-white lg:text-xl"
            >
              <span className="max-w-[302px] lg:max-w-max">
                Can I access historical power outage data through the system?
              </span>
            </AccordionHeader>
            <AccordionBody className="text-base lg:text-[18px]">
              Yes, you can view past power outage reports in our system.This
              allows you to understand outage trends, durations, and patterns
              over time, adding in your prepardness efforts.
            </AccordionBody>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mx-auto mt-20 mb-8">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl lg:text-6xl mb-3 max-w-[620px] text-center">
            Redefine how you interact with power
          </p>
          <Link href="/waitlist">
            <button className="bg-custom-blue rounded font-semibold leading-5 text-white my-6 mx-auto p-2">
              Get early access
            </button>
          </Link>
        </div>
        <div>
          <Image
            className="my-6"
            src="/macbook-pic.png"
            alt="/"
            width={800}
            height={400}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Icon({ id, open }) {
  return (
    <div className="flex items-center">
      {id === open ? (
        <Image src="/close-icon.png" width={30} height={30} alt="close" />
      ) : (
        <Image src="/open-icon.png" width={30} height={30} alt="open" />
      )}
    </div>
  );
}
