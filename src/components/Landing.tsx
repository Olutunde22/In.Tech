import React from "react";
import Layout from "./shared/Layout";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

const Landing = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex flex-col md:flex-row mt-10 h-screen py-20">
          <div className="p-8 lg:pl-28 md:w-7/12 lg:w-8/12 w-full flex flex-col lg:mt-24">
            <h2 className="leading-loose text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 text-center md:text-left font-semibold text-gray-400">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to In.Tech")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Quality Service At Affordable Rates.")
                    .start();
                }}
              />
            </h2>
            <p className="uppercase font-medium mt-10 text-gray-600 text-lg text-center md:text-left tracking-wide">
              Solving all computer related problems{" "}
            </p>
          </div>
          <div className="md:w-5/12 lg:w-8/12 w-ful place-items-stretch md:mr-10">
            <img
              className="w-90 lg:w-full "
              src="https://elements-cover-images-0.imgix.net/790945c8-90f0-4ac9-b551-06fa26d4f597?auto=compress%2Cformat&fit=max&w=1170&s=416d544ceb7bab026f982e86952f31ad"
              alt="shopingImage"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <Fade direction="left" triggerOnce>
            <h2 className="text-5xl mb-20">Our Services</h2>
          </Fade>
        </div>

        <div className="flex flex-col px-4 md:px-16 py-4 lg:flex-row lg:grid lg:grid-cols-3 lg:gap-4 lg:pl-28">
          <Fade direction="up" cascade>
            <div className="max-w-sm rounded overflow-hidden rounded-lg mb-4 shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg px-2 py-4">
              <div className="px-6 py-4">
                <SpeakerphoneIcon className="w-16 h-24 mr-2 text-blue-400" />
                <div className=" font-light text-gray-900 text-xl mb-2">
                  Lorem Ipsum
                </div>
                <p className="text-gray-400 tracking-wider text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
