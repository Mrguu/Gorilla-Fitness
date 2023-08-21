import React from "react";
import cardio from "../images/cardio.png";
import weightlifting from "../images/weightlifting.png";
import yoga from "../images/yoga.png";
import materialart from "../images/martialart.png";
function Classes() {
  return (
    <div
      id="classes"
      className="w-full h-full bg-zinc-900 p-5 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl text-red-700 font-bold mb-5">Classes</h2>
        <h3 className="text-md text-red-700 font-bold mb-3">
          Transform Your Fitness Journey
        </h3>
        <p className="text-sm font-bold text-red-700 border-b border-red-700 pb-5">
          Offers customized workout programs designed to help clients <br />
          achieve their fitness goals, such as weight loss, strength and <br />
          conditioning, and body shaping
        </p>
      </div>
      <div className="mt-8 px-5 w-5/6 flex  justify-center gap-10 flex-wrap">
        <div className="w-96 border border-red-700 rounded-xl overflow-hidden p-3 cursor-pointer drop-shadow-4xl  bg-zinc-900 hover:scale-105 ease-in-out duration-500">
          <span className="absolute bg-red-700 p-2 text-red-100 text-xl font-bold left-0 top-0">
            1
          </span>
          <img src={cardio} alt="" className="w-full rounded-lg mb-5" />
          <h3 className="text-sm text-red-700 font-bold text-start mb-2">
            Cardiovascular Classes: "Get Your Heart Pumping with Cardio
            Workouts!"
          </h3>
          <p className="text-xs text-red-100 font-bold text-start">
            Cardiovascular exercises are essential for improving heart health
            and boosting endurance. In this blog post, we'll explore various
            high-energy classes such as Zumba, Spinning, and Kickboxing, which
            will get your heart racing and help you achieve your fitness goals.
          </p>
        </div>
        <div className="w-96  border border-red-700 rounded-xl overflow-hidden p-3 cursor-pointer drop-shadow-4xl bg-zinc-900 hover:scale-105 ease-in-out duration-500">
          <span className="absolute bg-red-700 p-2 text-red-100 text-xl font-bold left-0 top-0">
            2
          </span>
          <img src={weightlifting} alt="" className="w-full rounded-lg mb-5" />
          <h3 className="text-sm text-red-700 font-bold text-start mb-2">
            Strength and Conditioning Classes: "Unleash Your Inner Strength with
            Strength Training Workouts!"
          </h3>
          <p className="text-xs text-red-100 font-bold text-start">
            Strength and conditioning classes are perfect for building muscle,
            increasing strength, and enhancing overall body composition. Join us
            as we dive into the world of weightlifting, CrossFit, and circuit
            training, and discover the benefits of these empowering workouts.
          </p>
        </div>
        <div className="w-96  border border-red-700 rounded-xl overflow-hidden p-3 cursor-pointer drop-shadow-4xl bg-zinc-900 hover:scale-105 ease-in-out duration-500">
          <span className="absolute bg-red-700 p-2 text-red-100 text-xl font-bold left-0 top-0">
            3
          </span>
          <img src={yoga} alt="" className="w-full rounded-lg mb-5" />
          <h3 className="text-sm text-red-700 font-bold text-start mb-2">
            Mind and Body Classes: "Find Balance and Inner Harmony with Mind and
            Body Workouts!"
          </h3>
          <p className="text-xs text-red-100 font-bold text-start">
            If you're seeking a holistic approach to fitness, mind and body
            classes can provide the perfect blend of physical exercise and
            mental relaxation. Explore the benefits of yoga, Pilates, and
            meditation, and learn how these practices can improve flexibility,
            promote mindfulness, and create a sense of calm within.
          </p>
        </div>
        <div className="w-96  border border-red-700 rounded-xl overflow-hidden p-3 cursor-pointer drop-shadow-4xl bg-zinc-900 hover:scale-105 ease-in-out duration-500">
          <span className="absolute bg-red-700 p-2 text-red-100 text-xl font-bold left-0 top-0">
            4
          </span>
          <img src={materialart} alt="" className="w-full rounded-lg mb-5" />
          <h3 className="text-sm text-red-700 font-bold text-start mb-2">
            Specialized Classes: "Discover Unique Fitness Experiences with
            Specialized Classes!"
          </h3>
          <p className="text-xs text-red-100 font-bold text-start">
            If you're looking for something beyond traditional workouts,
            specialized classes offer exciting and focused training experiences.
            Explore the world of martial arts, self-defense, and functional
            training, and find out how these classes can enhance your skills,
            boost your confidence, and take your fitness journey to new heights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
