"use client"

import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "../components/materialUi/materialUi.jsx";
import Link from "next/link";

export default function Waitlist() {
  const [afterSignup, setAfterSignup] = React.useState(false)
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between bg-[#0F1015]">
      <Navigation />
      {afterSignup ? (
        <AfterSignup />
      ) : (
        <WaitlistForm setAfterSignup={setAfterSignup} />
      )}
      <Footer />
    </div>
  );
}

function WaitlistForm({setAfterSignup}) {
  const [defaultValue, setDefaultValue] = React.useState(
    "--Select an option--"
  );
  return (
    <div className="flex justify-center !text-default px-4 mt-10 mb-32">
      <Card color="transparent" shadow={false} className="w-full">
        <Typography
          variant="h4"
          className="text-center text-default text-[32px] md:text-[48px]"
        >
          Join the waitlist
        </Typography>
        <Typography className="opacity-60 mt-2 font-normal text-center text-default max-w-xl md:text-xl mx-auto">
          We only need your email for you to be added to our waitlist. But, if
          you tell us a bit more about what you need, we&apos;ll put you on the
          priority list.
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-[480px]  mx-auto text-default">
          <div className="mb-4 flex flex-col gap-4 lg:gap-[18px]">
            <div>
              <label htmlFor="email" className="text-sm">
                Email address
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "!min-w-full" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="firstName" className="text-sm">
                  First name
                </label>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base min-w-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm">
                  Last name
                </label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base !w-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label htmlFor="state" className="text-sm">
                  State
                </label>
                <Input
                  name="state"
                  type="text"
                  placeholder="State"
                  className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base min-w-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
              <div>
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <Input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base !w-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
            </div>

            <div>
              <Select
                className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button"
                variant="static"
                label="How did you hear about us?"
                labelProps={{ className: "text-default text-sm after:w-0" }}
                menuProps={{ className: "text-default bg-[#0F1015]" }}
                onChange={(e) => setDefaultValue(e)}
                value={defaultValue}
              >
                <Option disabled value="--Select an option--">
                  --Select an option--
                </Option>
                <Option value="React">Material Tailwind React</Option>
                <Option value="Vue">Material Tailwind Vue</Option>
                <Option value="Angular">Material Tailwind Angular</Option>
                <Option value="Svelte">Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
          <Button
            className="mt-10 lg:text-base normal-case bg-[#1570EF] text-default"
            fullWidth
            onClick={setAfterSignup(true)}
          >
            Join Waitlist
          </Button>
        </form>
      </Card>
    </div>
  );
}

function AfterSignup() {
  return (
    <div className="flex flex-col gap-6 items-center text-center mx-4">
      <Image src="/waitlist-check.png" width={100} height={100} alt="check" />

      <div>
        <h2 className="font-semibold text-2xl mb-[9px] md:text-[32px]">
          Waitlist Joined
        </h2>
        <p className="opacity-60 md:text-xl">
          An email would be sent to you once you have been granted access.
        </p>
      </div>
      <Link href={"/"}>
        <button
          type="button"
          className="btn text-white normal-case w-max mt-2 border-[0.5px] rounded p-2 border-[#D0D5DD] bg-[#0F1015]"
        >
          Back to home
        </button>
      </Link>
    </div>
  );
}
