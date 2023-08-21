import React from "react";
import building from "../images/building.png";
import mission from "../images/mission.png";
import gym from "../images/gym.png";
import trainer from "../images/trainer.png";
import community from "../images/community.png";
import success from "../images/success.png";
import gorilla from "../images/gorilla.png";

function About() {
  return (
    <div id="about" className="w-full h-full bg-zinc-900 p-5">
      <h1 className="text-2xl text-red-700 font-bold text-center mb-5 ">
        About Us
      </h1>
      <div className="w-full flex justify-center gap-10 flex-wrap">
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={building} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Welcome to GORILLA GYM!
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              At GORILLA Gym, we believe that fitness is not just about physical
              strength; it's about embracing a lifestyle that nurtures your
              mind, body, and spirit. We are more than just a gym; we are a
              vibrant community dedicated to helping individuals achieve their
              health and fitness goals while fostering a supportive and
              empowering environment.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={mission} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Our Mission
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              Our mission is to inspire and empower individuals to lead
              healthier and happier lives. We strive to create a space where
              everyone feels welcome, regardless of their fitness level or
              background. Our aim is to provide top-notch facilities, expert
              guidance, and a wide range of programs to cater to diverse needs,
              helping each member unlock their full potential.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={gym} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Unparalleled Facilities
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              Step into GORILLA Gym and experience a fitness haven like no
              other. Our state-of-the-art facilities are meticulously designed
              to provide you with everything you need to achieve your goals.
              From our spacious and well-equipped workout areas to our
              cutting-edge equipment, we ensure that you have the tools
              necessary to challenge yourself and make progress on your fitness
              journey.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={trainer} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Passionate Trainers
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              At the heart of GORILLA Gym is our team of dedicated and highly
              qualified trainers. Our trainers are not only experts in their
              respective fields but are also passionate about helping you
              succeed. They will provide personalized guidance, support, and
              motivation every step of the way. Whether you're a beginner
              seeking guidance or an experienced athlete looking to push your
              limits, our trainers are here to guide you on your path to
              success.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={community} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Community Spirit
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              Joining GORILLA Gym means becoming part of a vibrant and inclusive
              community. We believe in the power of connections and the strength
              that comes from supporting and uplifting one another. Our members
              create a welcoming and friendly atmosphere, where you'll find
              workout buddies, accountability partners, and friends who share
              your passion for fitness. We organize regular social events,
              workshops, and challenges to foster camaraderie and make your
              fitness journey an enjoyable one.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={success} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Achieving Success Together
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              We measure our success by the accomplishments of our members.
              Witness the transformative power of fitness through inspiring
              success stories of individuals who have surpassed their own
              expectations and achieved remarkable results. We take pride in
              being a catalyst for positive change, and we are committed to
              helping you reach new heights of personal achievement.
            </p>
          </div>
        </div>
        <div className="w-72 border bg-zinc-800 rounded-3xl drop-shadow-3.5xl border-red-700 flex flex-col items-center p-4">
          <img src={gorilla} alt="" className="mb-4 w-7 h-7" />
          <div>
            <h1 className="text-sm text-red-600 text-center font-bold mb-3">
              Join the GORILLA Family
            </h1>
            <p className="text-xs font-bold text-red-100 text-center">
              We invite you to embark on a fulfilling fitness journey with us.
              Take the first step towards a healthier and happier you by
              becoming a member of GORILLA Gym. Whether you're a fitness
              enthusiast, a beginner, or someone who wants to prioritize their
              well-being, we have the perfect program and resources for you.
              Visit our gym, meet our team, and discover the endless
              possibilities that await you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
