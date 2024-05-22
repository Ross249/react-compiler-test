import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-sliver-200">
      <motion.div
        layout
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className=" p-4 w-[16rem] h-[16rem] flex flex-col justify-evenly gap-10 rounded-lg  shadow-2xl bg-gray-100 hover:bg-white transition-colors ease-in-out duration-500  "
      >
        {/* <img src="/assets/peep.png" className="w-10 h-10" /> */}
        <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center">
          <motion.div
            className=" absolute w-6 h-6 bg-cyan-300 rounded-full"
            animate={isHovered ? "open" : "closed"}
            transition={{ type: "spring", duration: 0.5 }}
            // style={{}}
            variants={{
              open: {
                width: "3.5rem",
                height: "3.5rem",
                backgroundImage: "url(/assets/peep.png)",
                backgroundSize: "cover",
              },
              closed: {
                width: "1.5rem",
                height: "1.5rem",
              },
            }}
          ></motion.div>
        </div>
        <div>
          <p className="text-xl text-black font-bold">Jim Luo</p>
          <p className="text-lg text-gray-400 font-semibold">
            Software Engineer
          </p>
        </div>
        <div className="w-9 h-9 rounded-full border p-2">
          <svg
            fill="#000000"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z"
              fill-rule="evenodd"
              animate={isHovered ? "open" : "closed"}
              variants={{
                open: {
                  opacity: 0,
                },
                closed: {
                  opacity: 1,
                },
              }}
            ></motion.path>
            <motion.path
              d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z"
              fill-rule="evenodd"
              variants={{
                open: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }}
              animate={isHovered ? "open" : "closed"}
            ></motion.path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
