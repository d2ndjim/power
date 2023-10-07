"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "../../components/materialUi/materialUi.jsx"
import Navigation from "../../components/navigation.jsx";
import Footer from "../../components/footer.jsx";
import Link from "next/link.js";


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

export default function AboutComponent() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" text-white bg-[#0F1015]">
      <Navigation />
      <div className="flex justify-center items-center mt-6">
        <Image
          className="my-6 hidden lg:block md:block"
          src="/frame-17.png"
          alt="image map for big screens"
          width={1280}
          height={350}
        />

        <Image
          className="my-6 sm:block md:hidden lg:hidden"
          src="/frame-18.png"
          alt="image map for mobile"
          width={360}
          height={200}
        />
      </div>

      <div className="flex flex-col items-start self-stretch mx-auto max-w-[960px] gap-5 lg:gap-4 mb-6 px-3">
        <h6 className="text-center text-sm font-normal">ABOUT PAI</h6>
        <h1 className="text-4xl lg:text-6xl font-semibold">
          PAI: The power co-pilot for your home and life
        </h1>
        <p className="text-base font-semibold text-center">
          Written by a &quot;Powerlabber&quot;
        </p>
      </div>

      <div className="mx-auto px-4 py-10 max-w-[960px] text-[18px] lg:text-xl leading-[36px] text-default font-extralight flex flex-col gap-8">
        <p className="italic mt-8">Lagos, Nigeria. 2023 A.D.</p>
        <div>
          <p className="mt-6">
            &quot;Up NEPA!&quot; is a nostalgic cry, rooted in the days of NEPA
            (now PHCN), Nigeria&apos;s electricity authority. Back then, when
            power cuts unexpectedly left us in the dark, we&apos;d lament
            furiously and rejoice with that exclamation, whenever it returned.
            While these emotions persist, they no longer stir the same
            intensity, likely due to adulthood&apos;s pragmatism.{" "}
          </p>

          <p className="mt-6">
            I pondered why we shared these emotions and realized that it was the
            unpredictability! Although I&apos;ve matured, my knowledge of my
            relationship with the power I use, regardless of how available it
            is, has stayed limited to my power bills, yet I believe it can be
            more.
          </p>

          <p className="mt-6">
            What if I could know if I had power in my home without having to be
            there or call anyone? What if I quickly and dynamically understood
            the patterns around when and how long I had power for within a
            certain day or week? What if I immediately knew when these patterns
            changed? Heck, what if I could know when I would lose power before
            it actually happens? Seems crazy right?
          </p>
        </div>

        <div className="flex flex-col max-w-[960px] mx-auto mt-6 text-center gap-4">
          <div id="explainer-video" className="!overflow-x-hidden w-full">
            <video className="h-auto w-full" autoPlay muted loop>
              <source src="/desktop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Pai explainer video</p>
        </div>
        <div>
          <p className="mt-6">
            The beauty of the world we live in, is that questions around the
            possibility of a thing or capability seem crazy until that thing is
            done, or that capability is achieved. Pai adds to this beauty in
            that it answers all these seemingly crazy questions with an emphatic
            YES, and indeed changes what consuming power would mean for me and
            you…way beyond the power bills we get. At PowerLabs, we&apos;ve
            built Pai to offer users real-time personalized insights and
            predictions on their power availability patterns, empowering them to
            maximize their personal productivity and optimize their costs. We
            also have plans for an enterprise version that would more closely
            cater to the needs of small/medium businesses, enterprises,
            utilities for a wide range of use cases.
          </p>

          <p className="mt-6">
            I reflect on crazy questions I asked myself and if they could ever
            be answered, it makes Pai a more enjoyable and fulfilling product to
            use…and at PowerLabs, we want to share Pai with everyone, so our
            power user experience for the first time will transcend a monthly
            power utility bill.
          </p>

          <p className="mt-6">
            You can access Pai via any device with an internet connection and it
            has been built for all form-factors. So don&apos;t wait any longer.
            Sign up here to join the waitlist. Get early access
          </p>
        </div>

        <Link href="/waitlist">
          <button className="bg-custom-blue rounded font-normal text-white py-2.5 px-[18px] w-max lg:px-4 lg:py-4">
            Get early access
          </button>
        </Link>
      </div>

      <section className="flex flex-col justify-start items-start mx-auto max-w-[960px] py-16 px-4 gap-10">
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
      </section>

      <div className=" flex flex-col justify-between items-center mx-auto mt-20 mb-8">
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
