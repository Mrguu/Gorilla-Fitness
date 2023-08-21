import React from "react";

function Contact() {
  return (
    <div id="contact" className="bg-zinc-900 w-full h-full p-10">
      <h1 className="text-2xl text-red-700 font-bold text-center mb-5">
        Contact Us
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-10 md:items-strech mb-5">
        <div className="flex flex-col items-center md:w-1/3 w-full md:border-l-0 border-l border-b border-r border-red-700 p-3 rounded-xl">
          <h2 className="text-md md:text-xl text-red-700 font-bold mb-3">
            Contact Information
          </h2>
          <ul className="text-xs md:text-sm list- text-red-100 font-bold">
            <li>Gym Name: GODZILLA</li>
            <li>
              Address: 123 Main Street, bla bla town,
              <br /> BLA BLA Country
            </li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@godzilla.com</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:w-1/3 w-full md:border-b md:border-r-0 border-r md:border-t-0 border-t border-l border-red-700 p-3 rounded-xl">
          <h2 className="text-md md:text-xl text-red-700 font-bold mb-3">
            Hours of Operation
          </h2>
          <ul className="text-xs md:text-sm list- text-red-100 font-bold">
            <li>Monday to Friday: 6:00 am - 10:00 pm</li>
            <li>Saturday: 8:00 am - 8:00 pm</li>
            <li>Sunday: 10:00 am - 6:00 pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
